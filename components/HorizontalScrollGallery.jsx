"use client";
import { useEffect, useRef, useState } from "react";
import { WebGLDistortion } from "./WebGLDistortion";
import { motion, AnimatePresence } from "framer-motion";
import Model from "./Model";

// ✅ Import data (static paths, not imported assets)
import {
  balcanyContent,
  bathroomContent,
  bedroomContent,
  interiorContent,
  kitchenContent,
  outdoorContent,
  swimmingContent,
} from "@/utils/images";

const HorizontalScrollGallery = () => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const webglRefs = useRef([]);
  const distortionEffects = useRef([]);

  // ✅ Data setup (no imported video files)
  const images = {
    outdoorContent,
    bedroomContent,
    balcanyContent,
    swimmingContent,
    interiorContent,
    kitchenContent,
    bathroomContent,
  };

  const categoryLabels = {
    outdoorContent: "Outdoor",
    bedroomContent: "Bedrooms",
    balcanyContent: "Balcony",
    swimmingContent: "Swimming Pool",
    interiorContent: "Interior",
    kitchenContent: "Kitchen",
    bathroomContent: "Bathrooms",
  };

  const data = Object.entries(images).map(([key, value]) => {
    const [header, ...mediaItems] = value;
    return {
      categoryName: categoryLabels[key] || key,
      sectionTitle: header.sectionTitle,
      sectionDescription: header.sectionDescription,
      items: mediaItems,
    };
  });

  // ✅ Detect mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Horizontal Scroll (desktop)
  useEffect(() => {
    if (isMobile) return;

    const loadGSAP = async () => {
      if (window.gsap && window.ScrollTrigger) return;
      const script1 = document.createElement("script");
      const script2 = document.createElement("script");
      script1.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script2.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
      document.head.append(script1, script2);
      await new Promise((r) => (script2.onload = r));
    };

    loadGSAP().then(() => {
      if (window.gsap && galleryRef.current && containerRef.current) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        const gallery = galleryRef.current;
        const container = containerRef.current;
        const totalWidth = gallery.scrollWidth - window.innerWidth;

        const scrollTween = window.gsap.to(gallery, {
          x: -totalWidth,
          ease: "none",
          duration: 1,
        });

        window.ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          animation: scrollTween,
          snap: {
            snapTo: (progress) =>
              Math.round(progress * (data.length - 1)) / (data.length - 1),
            duration: 0.3,
          },
          onUpdate: (self) => {
            const index = Math.round(self.progress * (data.length - 1));
            setCurrentIndex(index);
          },
        });
      }
    });

    return () => {
      if (window.ScrollTrigger)
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile, data.length]);

  // ✅ WebGL Hover Effect
  const setupWebGLEffect = (canvas, imageSrc, index) => {
    if (!canvas) return;
    try {
      const distortion = new WebGLDistortion(canvas, imageSrc);
      distortionEffects.current[index] = distortion;

      const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        distortion.updateMouse(e.clientX - rect.left, e.clientY - rect.top);
      };

      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseenter", handleMouseMove);
      canvas.addEventListener("mouseleave", () =>
        distortion.updateMouse(-100, -100)
      );

      canvas._cleanup = () => {
        distortion.destroy();
        canvas.removeEventListener("mousemove", handleMouseMove);
      };
    } catch (err) {
      console.warn("WebGL setup failed:", err);
    }
  };

  useEffect(() => {
    if (isMobile) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            const firstItem = data[index]?.items[0];
            if (entry.target && firstItem?.type === "image") {
              setupWebGLEffect(entry.target, firstItem.src, index);
            }
          }
        }),
      { threshold: 0.5 }
    );

    webglRefs.current.forEach((canvas) => canvas && observer.observe(canvas));
    return () => observer.disconnect();
  }, [isMobile, data]);

  // ✅ Modal handlers
  const closeModal = () => {
    setIsModalOpen(false);
    setCategory(null);
    document.body.style.overflow = "auto";
  };

  const scrollToIndex = (index) => {
    if (!galleryRef.current || !window.gsap) return;
    const targetX = -index * window.innerWidth;
    window.gsap.to(galleryRef.current, {
      x: targetX,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => setCurrentIndex(index),
    });
  };

  const scrollPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const scrollNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, data.length - 1));

  // ✅ Keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <div className="relative w-screen">
      {/* ✅ Desktop View */}
      {!isMobile && (
        <div
          ref={containerRef}
          className="relative min-h-screen w-screen overflow-hidden bg-black"
        >
          <div ref={galleryRef} className="flex h-screen bg-black">
            {data.map(
              (
                { categoryName, sectionTitle, sectionDescription, items },
                index
              ) => {
                const firstItem = items[0];
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full h-screen relative flex items-center justify-center p-4 bg-black"
                  >
                    <div className="z-20 text-center mb-6 p-8">
                      <h2 className="text-6xl font-bold text-white">
                        {sectionTitle}
                      </h2>
                    </div>

                    {/* ✅ Background */}
                    <div className="w-full absolute inset-0 opacity-30">
                      {firstItem.type === "video" ? (
                        <video
                          src={firstItem.src}
                          className="w-full h-full object-cover"
                          preload="metadata"
                          playsInline
                          muted
                          loop
                          autoPlay
                        />
                      ) : (
                        <img
                          src={firstItem.src}
                          alt={`${categoryName} background`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* ✅ Main Preview */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto">
                      <div className="relative w-full h-[70vh] max-h-[800px] overflow-hidden shadow-2xl rounded-[50px]">
                        {firstItem.type === "video" ? (
                          <video
                            src={firstItem.src}
                            className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                            autoPlay
                            loop
                            muted
                            onClick={() => {
                              setCategory(items);
                              setIsModalOpen(true);
                            }}
                          />
                        ) : (
                          <>
                            <canvas
                              ref={(el) => (webglRefs.current[index] = el)}
                              className="absolute inset-0 w-full h-full cursor-pointer"
                              onClick={() => {
                                setCategory(items);
                                setIsModalOpen(true);
                              }}
                            />
                            <img
                              src={firstItem.src}
                              alt={`${categoryName} preview`}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-0"
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="max-w-100 z-20 text-center p-5">
                      <p className="text-4xl text-gray-400">
                        {sectionDescription}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* ✅ Navigation */}
          <div className="relative z-20 flex flex-col items-center space-y-4">
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg space-x-6">
              <button
                onClick={() => scrollToIndex(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/20 transition disabled:opacity-50"
              >
                ←
              </button>
              <button
                onClick={() => scrollToIndex(currentIndex + 1)}
                disabled={currentIndex === data.length - 1}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/20 transition disabled:opacity-50"
              >
                →
              </button>
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-baseline space-x-2 text-white font-light tracking-widest text-5xl">
              <span className="text-amber-400">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-3xl opacity-70">
                /{String(data.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Mobile View */}
      {isMobile && (
        <div className="relative min-h-screen w-screen overflow-hidden bg-black">
          {/* Mobile content simplified for speed */}
          <div className="flex flex-col items-center justify-center h-screen relative">
            {(() => {
              const { sectionTitle, sectionDescription, items } =
                data[currentIndex];
              const firstItem = items[0];
              return (
                <>
                  <div className="absolute top-10 text-center px-4">
                    <h2 className="text-4xl font-bold text-white">
                      {sectionTitle}
                    </h2>
                    <p className="text-lg text-gray-300 mt-2">
                      {sectionDescription}
                    </p>
                  </div>
                  {firstItem.type === "video" ? (
                    <video
                      src={firstItem.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <img
                      src={firstItem.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* ✅ Modal */}
      {isModalOpen && category && (
        <Model
          category={category}
          setIsModalOpen={setIsModalOpen}
          handleModalBackgroundClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        />
      )}
    </div>
  );
};

export default HorizontalScrollGallery;
