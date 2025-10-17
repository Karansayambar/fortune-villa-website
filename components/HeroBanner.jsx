"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Calendar,
  User,
  Mail,
  Phone,
  Users,
  Sparkles,
  Check,
  Shield,
  Lock,
  Clock,
  X,
  Bell,
} from "lucide-react";
import Link from "next/link";

export default function HeroWithPopup() {
  const [videoError, setVideoError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    customer_email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setHasSeenPopup(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: form.name,
      phone: form.phone,
      customer_email: form.email,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      occasion: form.occasion,
      specialRequests: form.specialRequests,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      alert("✅ Your booking request has been sent successfully!");
      alert("Our team will contact you shortly to confirm your booking!");

      setForm({
        name: "",
        phone: "",
        customer_email: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        occasion: "",
        specialRequests: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      alert("❌ Failed to send booking request. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-emerald-800
 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div className="space-y-8 animate-fadeIn">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-widest uppercase">
                FORTUNE VILLA
              </span>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
                <span className="text-white">
                  Discover Your{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                    Dream
                  </span>
                  <br />
                  Villa Experience
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                Luxury villas in exclusive locations. Experience the pinnacle of
                comfort, privacy, and elegance with world-class amenities.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link href={"/bookings"}>
                <button className="relative group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg overflow-hidden">
                  {!showPopup && hasSeenPopup && (
                    <>
                      <span className="absolute top-0 right-0 flex h-4 w-4 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                      </span>
                      <Bell className="w-5 h-5 animate-bounce" />
                    </>
                  )}
                  <span>Book Your Stay</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {[
                { number: "4", label: "Bedrooms" },
                { number: "10+", label: "Amenities" },
                { number: "24/7", label: "Support" },
                { number: "5min", label: "Beach" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Private Pool",
                "Ocean View",
                "Smart Home",
                "Luxury Interior",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white font-medium hover:bg-white/10 transition-all"
                >
                  <Check className="w-4 h-4 text-amber-400" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Video */}
          <div
            className="relative animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              {!videoError ? (
                <video
                  className="w-full h-[400px] lg:h-[550px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={() => setVideoError(true)}
                >
                  <source src="/assets/outdoor1.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-[400px] lg:h-[550px] bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Calendar className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-bold">Fortune Villa</p>
                    <p className="text-lg">Your Dream Destination</p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 shadow-2xl border-4 border-white/20 animate-bounce">
              <div className="text-white text-center">
                <p className="text-3xl font-bold">₹15K+</p>
                <p className="text-sm font-medium">Starting From</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-amber-200">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full shadow-lg transition-all duration-200 hover:rotate-90 group"
            >
              <X className="w-6 h-6 text-gray-600 group-hover:text-white" />
            </button>

            <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500"></div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-4 mx-auto mb-4 shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                  Book Your Stay
                </h3>
                <p className="text-slate-600 text-base md:text-lg">
                  Fill in your details and we'll get back to you shortly
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 border border-slate-300 pl-12 pr-4 py-3 sm:py-4 rounded-xl placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition appearance-none text-[16px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-800">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 border border-slate-300 pl-12 pr-4 py-3 sm:py-4 rounded-xl placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition appearance-none text-[16px]"
                      />
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-800">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 border border-slate-300 pl-12 pr-4 py-3 sm:py-4 rounded-xl placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition appearance-none text-[16px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Stay Duration */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">
                    Stay Duration <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Check-in */}
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="date"
                        name="checkIn"
                        value={form.checkIn}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 border border-slate-300 pl-12 pr-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition appearance-none [&::-webkit-calendar-picker-indicator]:opacity-70 text-[16px]"
                      />
                    </div>

                    {/* Check-out */}
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="date"
                        name="checkOut"
                        value={form.checkOut}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 border border-slate-300 pl-12 pr-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition appearance-none [&::-webkit-calendar-picker-indicator]:opacity-70 text-[16px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests & Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-800">
                      Number of Guests <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 border border-slate-300 pl-12 pr-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition appearance-none text-[16px]"
                      >
                        <option value="">Select guests</option>
                        {[...Array(15)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} guest{i + 1 > 1 ? "s" : ""}
                          </option>
                        ))}
                        <option value="15+">15+ guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-800">
                      Occasion Type
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <select
                        name="occasion"
                        value={form.occasion}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 border border-slate-300 pl-12 pr-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition appearance-none text-[16px]"
                      >
                        <option value="">Select occasion</option>
                        {[
                          "Family Vacation",
                          "Weekend Getaway",
                          "Celebration",
                          "Corporate Retreat",
                          "Honeymoon",
                          "Other",
                        ].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    placeholder="Any special requirements or preferences..."
                    rows="3"
                    value={form.specialRequests}
                    onChange={handleChange}
                    className="w-full bg-white text-slate-900 border border-slate-300 p-4 rounded-xl placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition resize-none appearance-none text-[16px]"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-5 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Your Request...
                    </>
                  ) : (
                    <>
                      <span>Secure My Dates</span>
                      <Check className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-200 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" /> SSL Secure
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-500" /> Privacy Protected
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" /> Quick Response
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
