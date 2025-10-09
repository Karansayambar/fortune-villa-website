"use client";
import { motion } from "framer-motion"; // Inside your component
import "../../app/globals.css";

// import bancany from "../../public/assets/balcany/balcanyIMG2.JPG";
// import bedroom from "../../public/assets/bathroom/bedroomIMG5.JPG";
// import outdoor from "../../public/assets/outdoor/outdoorIMG4.JPG";
// import outdoor from "../../public/assets/outdoor/outdoorIMG5.JPG";

import { useState, useEffect } from "react";
import {
  Waves,
  Trees,
  Wifi,
  Users,
  MapPin,
  Phone,
  ChefHat,
  Sparkles,
  Star,
  Check,
  Calendar,
  User,
  Clock,
  Shield,
  Lock,
} from "lucide-react";
import Image from "next/image";

export default function Bookings() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    occasion: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Our team will contact you shortly to confirm your booking!");
    setIsSubmitting(false);

    // Reset form
    setForm({
      name: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      occasion: "",
    });
  };

  const villaImages = [
    {
      url: "/assets/swimming/poolIMG3.JPG",
      alt: "Luxury Villa Pool",
    },
    {
      url: "./assets/bedroom/bedroomIMG5.JPG",
      alt: "Modern Bedroom",
    },

    {
      url: "./assets/livingRoom.png",
      alt: "Living Area",
    },

    {
      url: "./assets/balcany/balcanyIMG2.JPG",
      alt: "Balcony Area",
    },
    {
      url: "./assets/outdoor.JPG",
      alt: "Luxury Kitchen",
    },
    {
      url: "./assets/outdoor/outdoorIMG4.JPG",
      alt: "Bathroom",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-teal-600/20 animate-pulse"></div>

          {/* Floating Particles */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-300 rounded-full animate-float delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-300 rounded-full animate-float delay-2000"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-300 rounded-full animate-float delay-1500"></div>
          </div>

          {/* Enhanced Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse-slow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-pulse-slow delay-500"></div>
          </div>

          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rotate-12"></div>
            <div className="absolute top-1/2 right-40 w-16 h-16 border border-white rotate-45"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto w-full">
          {/* Premium Badge */}
          <div
            className={`mb-6 md:mb-8 inline-block transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-amber-400/20 to-teal-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-3">
              <span className="text-amber-300 text-sm md:text-base font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></span>
                ✨ Premium Luxury Villa
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-ping delay-700"></span>
              </span>
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1
            className={`text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-amber-400 via-white to-teal-400 bg-clip-text text-transparent">
              Fortune Villa
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-3xl text-white/90 mb-4 md:mb-6 font-light transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Your Private{" "}
            <span className="text-amber-300 font-semibold">
              4BHK Luxury Retreat
            </span>
          </p>

          {/* Features */}
          <p
            className={`text-lg md:text-xl text-blue-100/80 mb-10 md:mb-12 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-amber-400/20 to-teal-400/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              🏖️ 5 Min to Beach • 🏊 Private Pool • 🎯 15+ Amenities
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#booking-form"
              className="group relative bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 font-bold px-8 md:px-12 py-4 md:py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-lg md:text-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <span>Book Your Luxury Stay</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </a>

            <a
              href="tel:+918425842855"
              className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-bold px-8 md:px-12 py-4 md:py-5 rounded-2xl transition-all transform hover:scale-105 active:scale-95 text-lg md:text-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 84258 42855</span>
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Stats */}
      <section className="w-full py-16 px-4 md:px-6 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { number: "4", label: "Bedrooms" },
            { number: "15+", label: "Amenities" },
            { number: "24/7", label: "Support" },
            { number: "5min", label: "To Beach" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-40 md:w-48 text-center transform transition-all duration-500 hover:-translate-y-3 hover:scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg text-white font-extrabold text-xl md:text-2xl">
                {stat.number}
              </div>
              <p className="mt-10 text-gray-700 text-sm md:text-base font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 md:mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Take a visual tour of our luxury villa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {villaImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <Image
                  height={100}
                  width={100}
                  src={image.url}
                  alt={image.alt}
                  unoptimized={true}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 md:mb-4">
            Premium Features
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Everything you need for an unforgettable stay
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {[
            {
              icon: Waves,
              title: "Private Pool",
              desc: "Sparkling pool with lounge area",
            },
            {
              icon: Trees,
              title: "4 AC Bedrooms",
              desc: "Spacious & luxuriously furnished",
            },
            {
              icon: Wifi,
              title: "High-Speed WiFi",
              desc: "Seamless connectivity",
            },
            {
              icon: ChefHat,
              title: "In-House Chef",
              desc: "Authentic local cuisine",
            },
            {
              icon: Users,
              title: "Housekeeping",
              desc: "Daily professional cleaning",
            },
            {
              icon: Sparkles,
              title: "Premium Services",
              desc: "Concierge support 24/7",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 group"
              >
                <div className="mb-3 md:mb-4 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-200 to-blue-200 group-hover:from-teal-300 group-hover:to-blue-300 transition-all duration-500">
                  <Icon className="w-6 md:w-8 h-6 md:h-8 text-teal-700 group-hover:text-teal-900 transition-all duration-500" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* Amenities Section */}
      <section className="relative w-full py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Subtle glowing background accents */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-teal-400">
            Every Comfort, Thoughtfully Included
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-16">
            From morning swims to cozy nights — everything you need for a
            perfect stay.
          </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              "4 Fully Air-Conditioned Bedrooms (1 Ground + 3 First Floor)",
              "Private Swimming Pool with Lounge Area",
              "Landscaped Garden & Sit-Out Terrace",
              "Modern, Fully Equipped Kitchen",
              "Indoor Games: Carrom, Chess, Cards",
              "Outdoor Games: Badminton & Sports",
              "Smart TV with Streaming & High-Speed WiFi",
              "Power Backup & 24/7 Electricity",
              "Daily Professional Housekeeping",
              "In-House Chef & Local Meals",
              "Secure 4-Car Parking",
              "Security & CCTV Surveillance",
            ].map((amenity, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-800 bg-opacity-60 hover:bg-opacity-90 border border-slate-700 hover:border-teal-400/50 transition-all duration-500 shadow-md hover:shadow-teal-500/20"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-amber-400 flex items-center justify-center text-slate-900 font-bold text-lg transform group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
                <p className="text-gray-100 text-base md:text-lg text-left leading-relaxed">
                  {amenity}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="mt-16 h-[2px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60"></div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="w-full py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg md:text-2xl text-gray-600">
              Transparent pricing with no hidden charges
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
            {/* Weekdays Card */}
            <div className="flex-1 bg-white p-10 md:p-12 rounded-3xl shadow-lg border-2 border-gray-200 hover:border-teal-400 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Weekdays
              </h3>
              <div className="mb-10">
                <p className="text-6xl md:text-7xl font-extrabold text-green-600">
                  ₹20,000
                </p>
                <p className="text-lg md:text-xl text-gray-600 mt-2">
                  Per Night (Mon-Thu)
                </p>
              </div>
              <ul className="space-y-6 text-gray-700 text-lg md:text-xl">
                {[
                  "Perfect for getaways",
                  "Extended stay discounts",
                  "Special group rates",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2"
                  >
                    <span className="text-teal-600 font-bold text-2xl">✓</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekends Card */}
            <div className="flex-1 relative bg-gradient-to-br from-amber-400 to-orange-500 p-10 md:p-12 rounded-3xl shadow-2xl border-2 border-amber-300 transform hover:scale-105 hover:-translate-y-3 transition-all duration-500">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg md:text-xl animate-pulse shadow-lg">
                MOST POPULAR
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 mt-2">
                Weekends
              </h3>
              <div className="mb-10">
                <p className="text-6xl md:text-7xl font-extrabold text-white">
                  ₹30,000
                </p>
                <p className="text-amber-50 text-lg md:text-xl mt-2">
                  Per Night (Fri-Sun)
                </p>
              </div>
              <ul className="space-y-6 text-white text-lg md:text-xl">
                {[
                  "Premium experience",
                  "Full house exclusivity",
                  "Celebration packages",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2"
                  >
                    <span className="font-bold text-2xl">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-700 text-lg md:text-xl mb-3">
              💎 <span className="font-bold">Special Packages Available</span>
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              Corporate retreats • Family celebrations • Group events • Extended
              stays
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
              Strategic Location
            </h2>
            <p className="text-lg md:text-2xl text-gray-600">
              Close to attractions, far from the hustle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Location Highlights */}
            <div className="space-y-8">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Located in the scenic Awas area of Alibaug, surrounded by
                coconut palms, pristine beaches, and authentic local charm. Your
                perfect escape from urban life while remaining well-connected.
              </p>

              <div className="space-y-4">
                {[
                  { place: "Awas Beach", time: "5 mins", icon: "🏖️" },
                  { place: "Mandwa Jetty", time: "15 mins", icon: "🚤" },
                  {
                    place: "Local Cafes & Restaurants",
                    time: "10 mins",
                    icon: "🍽️",
                  },
                  { place: "Karmarkar Museum", time: "20 mins", icon: "🏛️" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100 shadow-md transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="text-4xl md:text-5xl transition-transform duration-500 hover:scale-125">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-base md:text-lg">
                        {item.place}
                      </p>
                      <p className="text-sm md:text-base text-gray-600">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Fortune Villa Card */}
            <div className="bg-gradient-to-br from-teal-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white flex flex-col justify-center shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6">
                <MapPin className="w-12 md:w-14 h-12 md:h-14 text-amber-300 mb-5 transition-transform duration-500 hover:scale-125" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                Why Fortune Villa?
              </h3>
              <ul className="space-y-5 text-lg md:text-xl">
                {[
                  "Unbeatable beach proximity with pristine surroundings",
                  "Complete privacy and enhanced security",
                  "Experienced hospitality team",
                  "All-inclusive luxury amenities",
                  "Perfect for families, groups & celebrations",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2"
                  >
                    <span className="text-amber-300 font-bold text-2xl md:text-3xl mt-1">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Booking Form Section */}
      <section
        id="booking-form"
        className="w-full py-12 md:py-20 px-4 md:px-6 bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="mb-8">
                <span className="text-teal-400 text-sm font-bold tracking-widest uppercase">
                  RESERVE YOUR STAY
                </span>
                <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                  Ready for Your
                  <span className="text-amber-400 block">Luxury Escape?</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Experience unparalleled luxury at Fortune Villa. Fill out the
                  form and our dedicated team will personally assist you in
                  creating unforgettable memories.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: "⚡",
                    title: "Instant Confirmation",
                    desc: "Get booking confirmation within 2 hours",
                  },
                  {
                    icon: "💰",
                    title: "Best Price Guarantee",
                    desc: "We match any lower price you find",
                  },
                  {
                    icon: "🛡️",
                    title: "Flexible Cancellation",
                    desc: "Free cancellation up to 7 days before",
                  },
                  {
                    icon: "👑",
                    title: "VIP Treatment",
                    desc: "Personalized service from start to finish",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-2xl">
                <h3 className="font-bold text-white text-xl mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+918425842855"
                    className="flex items-center gap-3 text-white hover:text-amber-200 transition"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+91 84258 42855</span>
                  </a>
                  <p className="text-teal-100 text-sm">
                    Available 24/7 for your convenience
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              {/* Floating Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 transform hover:scale-[1.02] transition-all duration-500">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Book Your Stay
                  </h3>
                  <p className="text-gray-600">
                    Complete this form to secure your dates
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition text-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition text-base"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Stay Duration *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="checkIn"
                          value={form.checkIn}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition text-base"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="checkOut"
                          value={form.checkOut}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition text-base"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests & Occasion */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Number of Guests *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="guests"
                          value={form.guests}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition text-base appearance-none bg-white"
                          required
                        >
                          <option value="">Select guests</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                            (num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "guest" : "guests"}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Occasion Type
                      </label>
                      <div className="relative">
                        <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="occasion"
                          value={form.occasion}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition text-base appearance-none bg-white"
                        >
                          <option value="">Select occasion</option>
                          <option value="Family Vacation">
                            Family Vacation
                          </option>
                          <option value="Weekend Getaway">
                            Weekend Getaway
                          </option>
                          <option value="Celebration">Celebration</option>
                          <option value="Corporate Retreat">
                            Corporate Retreat
                          </option>
                          <option value="Honeymoon">Honeymoon</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      placeholder="Any special requirements or preferences..."
                      rows="3"
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition text-base resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-slate-900 font-bold py-5 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                        Processing Your Request...
                      </>
                    ) : (
                      <>
                        <span>Secure My Dates</span>
                        <div className="group-hover:translate-x-1 transition-transform">
                          <Check className="w-5 h-5" />
                        </div>
                      </>
                    )}
                  </button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>SSL Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Lock className="w-4 h-4 text-blue-500" />
                      <span>Privacy Protected</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>Quick Response</span>
                    </div>
                  </div>
                </form>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400 rounded-full opacity-20 blur-xl z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Have Questions?
          </h3>
          <p className="text-teal-200 text-base md:text-lg mb-6 md:mb-8">
            Get in touch with our dedicated team for any inquiries
          </p>
          <a
            href="tel:+918425842855"
            className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold px-6 md:px-10 py-3 md:py-4 rounded-full hover:from-amber-500 hover:to-orange-600 transition-all transform hover:scale-105 text-base md:text-lg"
          >
            📞 Call +91 84258 42855
          </a>
        </div>
      </section>
    </main>
  );
}
