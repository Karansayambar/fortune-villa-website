"use client";
import { useState } from "react";
import Image from "next/image";
// import bannerImg from "/assets/bannerImg.JPG";
// import bb from "/assets/bb.mp4 ";

export default function HeroBanner() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {!videoError ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
        >
          <source src="/assets/outdoor1.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/assets/bannerImg.JPG"
          alt="Hero Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill
          priority
        />
      )}

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-light tracking-widest mb-2 text-white">
          FORTUNE VILLA
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Discover Your{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Dream
          </span>{" "}
          Property
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Luxury homes in the most desirable locations. Experience the
          difference of premium real estate service.
        </p>

        <div className="animate-bounce">
          <p className="text-gray-100 mb-2 text-lg">Scroll Listings</p>
          <svg
            className="w-8 h-8 mx-auto text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
