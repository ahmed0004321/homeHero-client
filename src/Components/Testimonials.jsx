import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      service: "Plumbing Service",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Found an amazing plumber through HomeHero within minutes! The booking process was seamless, and the service quality exceeded my expectations. Highly recommend this platform for anyone needing reliable home services."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Manager",
      service: "Electrical Work",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "As a property manager, I need quick and reliable service providers. HomeHero has become my go-to platform. The electrician I hired was professional, punctual, and solved the issue efficiently."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Apartment Owner",
      service: "Deep Cleaning",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The cleaning service I booked was phenomenal! The team was thorough, respectful of my space, and left everything spotless. The rating system helped me choose the best provider with confidence."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Business Owner",
      service: "HVAC Maintenance",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "HomeHero made it so easy to find and book an HVAC specialist for my office. The transparent pricing and verified reviews gave me peace of mind. Will definitely use this service again!"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Trusted by thousands of homeowners who found their perfect service provider
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-20">
              <Quote className="w-16 h-16 text-purple-400" />
            </div>

            <div className="relative z-10">
              {/* Testimonial Content */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>

                {/* User Info */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-white/60 mb-3">{testimonials[activeIndex].role}</p>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <span className="text-sm text-white/80">Service Used:</span>
                    <span className="text-sm font-semibold text-purple-300">
                      {testimonials[activeIndex].service}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Service Providers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "50K+", label: "Services Completed" }
          ].map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {stat.number}
              </h4>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;