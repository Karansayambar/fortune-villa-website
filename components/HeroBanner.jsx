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
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
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
          <source
            src="https://res.cloudinary.com/dmmjvjjeg/video/upload/v1759926668/outdoor1_pfmcn3.mp4"
            type="video/mp4"
          />
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

      {/* Overlay & Gradient Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-fadeIn"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-fadeIn delay-200"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Brand Badge */}
        <div
          className={`mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <h2 className="text-white text-sm md:text-base font-semibold tracking-widest uppercase">
              FORTUNE VILLA
            </h2>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl md:text-7xl font-extrabold leading-tight mb-8 transition-all duration-1000 delay-200 ${
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
          className={`text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
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
          className={`inline-flex items-center justify-center gap-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-16 py-5 rounded-xl shadow-2xl transition-transform duration-300 transform hover:scale-105 text-xl ${
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
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 transition-all duration-1000 delay-600 ${
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
              className="group relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-gray-300 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <p className="text-white text-md md:text-base font-medium mb-3">
            Scroll to Explore
          </p>
          <div className="w-6 h-14 border-2 border-amber-400/30 rounded-full flex justify-center mx-auto">
            <div className="w-2 h-8 bg-amber-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
