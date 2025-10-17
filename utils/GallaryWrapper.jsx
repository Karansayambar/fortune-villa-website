"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const HorizontalScrollGallery = dynamic(
  () => import("@/components/HorizontalScrollGallery"),
  { ssr: false }
);

export default function GalleryWrapper() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setLoad(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById("gallery-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery-section" className="min-h-[60vh]">
      {load ? <HorizontalScrollGallery /> : null}
    </section>
  );
}
