import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

const Slider = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80",
      title: "Expert Electricians at Your Service",
      text: "Connect with certified electricians for safe, reliable electrical repairs and installations.",
    },
    {
      img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=80",
      title: "Professional Plumbing Solutions",
      text: "Get fast, dependable plumbing services from trusted local professionals.",
    },
    {
      img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1400&q=80",
      title: "Premium Cleaning Services",
      text: "Book experienced cleaners to keep your home or office spotless and fresh.",
    },
    {
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
      title: "Skilled Handyman Services",
      text: "From repairs to installations, find trusted handymen for all your household needs.",
    },
  ];

  return (
    <div className="w-full h-[85vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Glassmorphism Card */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Background Image with Overlay - More Transparent */}
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-30"
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-blue-900/40"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
                  {/* Glass Card for Text */}
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl shadow-xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 leading-relaxed">
                      {slide.text}
                    </p>
                    <Link to='/services' className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: rgba(255, 255, 255, 0.2);
        }

        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 20px;
        }

        :global(.swiper-pagination-bullet) {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
          background: linear-gradient(to right, #9333ea, #3b82f6);
        }
      `}</style>
    </div>
  );
};

export default Slider;