"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Video / Fallback Image */}
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
          src="/assets/bannerImg.jpg"
          alt="Hero Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill
          priority
        />
      )}

      {/* Overlay & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-36 h-36 sm:w-64 sm:h-64 bg-amber-500/10 rounded-full blur-3xl animate-fadeIn"></div>
        <div className="absolute bottom-[10%] left-[5%] w-40 h-40 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-fadeIn delay-200"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Brand Badge */}
        <div
          className={`mb-6 sm:mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <h2 className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase">
              FORTUNE VILLA
            </h2>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
          <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 sm:mb-8 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="text-white">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Dream
            </span>{" "}
            Villa
          </span>
        </h1>

        {/* Description */}
        <p
          className={`text-sm sm:text-lg md:text-2xl text-gray-200 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Luxury villas in exclusive locations. Experience the pinnacle of
          comfort, privacy, and elegance.
        </p>

        {/* CTA Button */}
        <Link
          href="/bookings"
          className={`inline-flex items-center justify-center gap-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-6 sm:px-16 py-3 sm:py-5 rounded-xl shadow-2xl transition-transform duration-300 transform hover:scale-105 text-base sm:text-xl ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Book Your Stay
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mt-8 sm:mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "4", label: "Luxury Bedrooms" },
            { number: "15+", label: "Amenities" },
            { number: "24/7", label: "Premium Support" },
            { number: "5min", label: "Beach Access" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 border border-white/20 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 sm:mt-16 animate-bounce">
          <p className="text-white text-sm sm:text-md md:text-base font-medium mb-2 sm:mb-3">
            Scroll to Explore
          </p>
          <div className="w-4 sm:w-6 h-12 sm:h-14 border-2 border-amber-400/30 rounded-full flex justify-center mx-auto">
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-amber-300 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
