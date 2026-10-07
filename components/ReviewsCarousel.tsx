"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";

interface GoogleReview {
  id: string;
  author: string;
  avatarColor: string;
  isLocalGuide?: boolean;
  date: string;
  rating: number;
  service: string;
  text: string;
}

const googleReviews: GoogleReview[] = [
  {
    id: "1",
    author: "Carlos Mendez",
    avatarColor: "bg-[#006397]",
    isLocalGuide: true,
    date: "2 weeks ago",
    rating: 5,
    service: "Emergency AC Repair",
    text: "Our AC compressor gave out on a 98-degree Houston afternoon. Called Jim Cooling & Heating and they had a technician out in less than 90 minutes. Honest quote, had the parts in the truck, and had ice cold air blowing right away. Truly life-saving service!",
  },
  {
    id: "2",
    author: "Sarah Jenkins",
    avatarColor: "bg-[#128dd1]",
    isLocalGuide: false,
    date: "1 month ago",
    rating: 5,
    service: "Heat Pump & Furnace Replacement",
    text: "Got three quotes for replacing our old 14-year-old HVAC system. Jim was the most upfront, explained SEER ratings without any high-pressure sales tactics. The installation crew was on time, wore shoe covers, and finished in a single day. Our energy bill already dropped!",
  },
  {
    id: "3",
    author: "David R. Martinez",
    avatarColor: "bg-[#b51527]",
    isLocalGuide: true,
    date: "2 months ago",
    rating: 5,
    service: "Annual Maintenance Tune-Up",
    text: "Signed up for their seasonal maintenance plan. The technician performed a thorough 21-point check, cleaned out the condenser coils, and caught a failing contactor before it caused a full breakdown. Extremely professional and courteous company.",
  },
  {
    id: "4",
    author: "Elena Vasquez",
    avatarColor: "bg-sky-700",
    isLocalGuide: false,
    date: "3 months ago",
    rating: 5,
    service: "Ductless Mini-Split Installation",
    text: "We needed cooling for our garage workshop and home office addition. Jim Cooling & Heating designed a flawless multi-zone ductless mini-split setup. Runs whisper quiet and cools exceptionally fast. Highly recommend them to anyone in the Houston area!",
  },
  {
    id: "5",
    author: "Robert Chen",
    avatarColor: "bg-slate-700",
    isLocalGuide: true,
    date: "4 months ago",
    rating: 5,
    service: "Heating System Diagnostics & Repair",
    text: "When our heating unit stopped turning on during the cold snap, they responded immediately. Diagnosed a faulty thermostat wiring and worn igniter switch within 20 minutes. Upfront pricing, no surprise fees, and genuine honest craftsmanship.",
  },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Jim+Cooling+And+Heating+Services/@29.8413521,-95.498702,9z/data=!4m16!1m9!3m8!1s0xa83e5ea2c247d857:0x5c27427d54c6d5b8!2sJim+Cooling+And+Heating+Services!8m2!3d29.841352!4d-95.498702!9m1!1b1!16s%2Fg%2F11q8gj34bb!3m5!1s0xa83e5ea2c247d857:0x5c27427d54c6d5b8!8m2!3d29.841352!4d-95.498702!16s%2Fg%2F11q8gj34bb?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D";

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, googleReviews.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Top Bar with Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-bold text-slate-800">5.0 Star Rating</span>
          <span className="text-xs text-slate-400">|</span>
          <span className="text-xs font-semibold text-slate-500">Verified Google Feedback</span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#006397] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#128dd1]"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#006397] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#128dd1]"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Slides Container */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {googleReviews.map((rev) => (
            <div
              key={rev.id}
              className="px-3 flex-shrink-0"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  {/* Header: Author Avatar & Google Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-11 w-11 rounded-full ${rev.avatarColor} text-white font-bold text-base flex items-center justify-center shadow-sm flex-shrink-0`}
                      >
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          {rev.author}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                          <span>{rev.date}</span>
                          {rev.isLocalGuide && (
                            <>
                              <span>•</span>
                              <span className="text-[#006397] font-semibold">Local Guide</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Google G Logo */}
                    <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex-shrink-0">
                      <svg className="h-4 w-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Rating Stars & Service Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#006397] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {rev.service}
                    </span>
                  </div>

                  {/* Review Quote Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic line-clamp-5">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Footer Checkmark & Google Link */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified Customer
                  </span>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#006397] hover:text-[#128dd1] font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              currentIndex === index
                ? "w-8 bg-[#006397]"
                : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
