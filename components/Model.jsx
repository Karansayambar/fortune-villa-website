"use client";
import React, { useState, useEffect } from "react";

const Model = ({ category, setIsModalOpen, handleModalBackgroundClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemDimensions, setItemDimensions] = useState({});
  const [isMobile, setIsMobile] = useState(false); // 🔥 Mobile state

  if (!category || !Array.isArray(category)) {
    return null;
  }

  // 🔥 Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isReelsFormat = (index) => {
    const dimensions = itemDimensions[index];
    return dimensions && dimensions.height > dimensions.width;
  };

  const loadDimensions = (item, index) => {
    if (item?.type === "video") {
      const video = document.createElement("video");
      video.onloadedmetadata = () => {
        setItemDimensions((prev) => ({
          ...prev,
          [index]: { width: video.videoWidth, height: video.videoHeight },
        }));
      };
      video.src = item.src;
    } else {
      const img = new Image();
      img.onload = () => {
        setItemDimensions((prev) => ({
          ...prev,
          [index]: { width: img.width, height: img.height },
        }));
      };
      img.src = item?.src || item;
    }
  };

  useEffect(() => {
    category.forEach((item, index) => {
      loadDimensions(item, index);
    });
  }, [category]);

  const nextImage = () => {
    const currentIsReels = isReelsFormat(currentIndex);
    let nextIndex = currentIndex + 1;

    // 🔥 Only skip 2 if NOT mobile
    if (
      !isMobile &&
      currentIsReels &&
      currentIndex + 1 < category.length &&
      isReelsFormat(currentIndex + 1)
    ) {
      nextIndex = currentIndex + 2;
    }

    setCurrentIndex(nextIndex % category.length);
  };

  const prevImage = () => {
    let prevIndex = currentIndex - 1;

    // 🔥 Only go back by 2 if NOT mobile
    if (
      !isMobile &&
      prevIndex >= 0 &&
      isReelsFormat(prevIndex) &&
      prevIndex > 0 &&
      isReelsFormat(prevIndex - 1)
    ) {
      prevIndex = currentIndex - 2;
    }

    if (prevIndex < 0) {
      prevIndex = category.length - 1;
    }

    setCurrentIndex(prevIndex);
  };

  const currentItem = category[currentIndex];
  const nextItem = category[currentIndex + 1];
  const shouldShowTwoItems =
    !isMobile && // 🔥 Never show 2 items on mobile
    isReelsFormat(currentIndex) &&
    nextItem &&
    isReelsFormat(currentIndex + 1);

  const renderMediaItem = (item, index, className = "") => {
    if (!item) return null;

    if (item?.type === "video") {
      return (
        <video
          key={`video-${index}`}
          src={item.src}
          className={`max-h-[800px] object-contain rounded-xl shadow-md ${className}`}
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      );
    } else {
      return (
        <img
          key={`img-${index}`}
          src={item?.src || item}
          alt={`Gallery item ${index + 1}`}
          className={`max-h-[800px] object-contain rounded-xl shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
        />
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all duration-500"
      onClick={handleModalBackgroundClick}
    >
      <div className="relative max-w-7xl max-h-full transition-all duration-500">
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Main Content */}
        <div className="relative">
          <div className="flex items-center justify-center w-full h-full">
            {shouldShowTwoItems ? (
              // Two reels (desktop only)
              <div className="flex gap-4 items-center justify-center">
                {renderMediaItem(currentItem, currentIndex, "max-w-[400px]")}
                {renderMediaItem(nextItem, currentIndex + 1, "max-w-[400px]")}
              </div>
            ) : (
              // Single item (mobile or landscape)
              <div className="flex items-center justify-center w-full">
                {renderMediaItem(currentItem, currentIndex, "max-w-full")}
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {category.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
                           w-8 h-8 md:w-12 md:h-12 flex items-center justify-center 
                           rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
                           w-8 h-8 md:w-12 md:h-12 flex items-center justify-center 
                           rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {category.map((_, index) => {
                  const isActive = shouldShowTwoItems
                    ? index === currentIndex || index === currentIndex + 1
                    : index === currentIndex;

                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`transition-colors w-3 h-3 rounded-full ${
                        isActive ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Counter */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-center">
          <p className="text-sm opacity-70">
            {shouldShowTwoItems
              ? `${currentIndex + 1}-${currentIndex + 2} of ${category.length}`
              : `${currentIndex + 1} of ${category.length}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Model;
