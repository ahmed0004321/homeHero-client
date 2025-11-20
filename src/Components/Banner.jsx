import React, { useState, useEffect } from 'react';
import { Wrench, Zap, Sparkles, Star, Shield, TrendingUp } from 'lucide-react';

const Banner = () => {
  const [counts, setCounts] = useState({
    services: 0,
    customers: 0,
    providers: 0,
    rating: 0
  });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      services: 500,
      customers: 10000,
      providers: 250,
      rating: 4.8
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        services: Math.floor(targets.services * progress),
        customers: Math.floor(targets.customers * progress),
        providers: Math.floor(targets.providers * progress),
        rating: (targets.rating * progress).toFixed(1)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(15deg); }
        }
        @keyframes particle {
          0%, 100% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-30px); opacity: 0.5; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float2 { animation: float2 5s ease-in-out infinite 0.5s; }
        .animate-float3 { animation: float3 4.5s ease-in-out infinite 1s; }
        .animate-particle { animation: particle 3s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
        .animate-shine { animation: shine 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .preserve-3d { transform-style: preserve-3d; }
        .glass-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.1),
            0 0 60px rgba(255, 255, 255, 0.1);
        }
        .glass-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white z-10 animate-fadeInLeft">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fadeInUp opacity-0 delay-200">
              <span className="text-sm font-medium">🏆 Trusted by 10,000+ Customers</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeInUp opacity-0 delay-300">
              Your Home,
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Our Heroes
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeInUp opacity-0 delay-400">
              Connect with verified local service providers for all your household needs. 
              Quality service, trusted professionals, seamless booking.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp opacity-0 delay-500">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fadeInUp opacity-0 delay-600">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-purple-300">{counts.services}+</div>
                <div className="text-sm text-gray-300 mt-1">Services</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-blue-300">{counts.customers.toLocaleString()}+</div>
                <div className="text-sm text-gray-300 mt-1">Customers</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-pink-300">{counts.providers}+</div>
                <div className="text-sm text-gray-300 mt-1">Providers</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-bold text-yellow-300">{counts.rating}</span>
                  <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />
                </div>
                <div className="text-sm text-gray-300 mt-1">Rating</div>
              </div>
            </div>
          </div>

          {/* Right - 3D Floating Elements */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Center Glassmorphism Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass-card backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-8 animate-fadeInScale opacity-0 delay-500 relative overflow-hidden group hover:border-white/60 transition-all duration-500">
              {/* Shine effect overlay */}
              <div className="glass-shine absolute inset-0 rounded-3xl"></div>
              
              {/* Shimmer top highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shimmer"></div>
              
              {/* Shimmer side highlights */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 animate-shimmer"></div>
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 animate-shimmer" style={{animationDelay: '1s'}}></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
              
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 transform group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">100% Verified</h3>
                  <p className="text-gray-200 drop-shadow-md">All service providers are thoroughly vetted and verified</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-green-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-400/30 shadow-lg shadow-green-500/20">
                      <span className="text-green-300 font-bold">✓</span>
                    </div>
                    <span className="text-sm font-medium drop-shadow-md">Background Check</span>
                  </div>
                  <div className="flex items-center gap-3 text-white transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-green-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-400/30 shadow-lg shadow-green-500/20">
                      <span className="text-green-300 font-bold">✓</span>
                    </div>
                    <span className="text-sm font-medium drop-shadow-md">Insured & Licensed</span>
                  </div>
                  <div className="flex items-center gap-3 text-white transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-green-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-400/30 shadow-lg shadow-green-500/20">
                      <span className="text-green-300 font-bold">✓</span>
                    </div>
                    <span className="text-sm font-medium drop-shadow-md">Customer Rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icon 1 - Wrench */}
            <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl border-2 border-white/30 animate-float preserve-3d">
              <Wrench className="w-12 h-12 text-white" />
            </div>

            {/* Floating Icon 2 - Zap */}
            <div className="absolute bottom-32 right-20 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl border-2 border-white/30 animate-float2 preserve-3d">
              <Zap className="w-10 h-10 text-white" />
            </div>

            {/* Floating Icon 3 - Sparkles */}
            <div className="absolute top-40 left-10 w-28 h-28 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl border-2 border-white/30 animate-float3 preserve-3d">
              <Sparkles className="w-14 h-14 text-white" />
            </div>

            {/* Small floating badge */}
            <div className="absolute bottom-20 left-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-xl animate-pulse-slow">
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="white" fillOpacity="0.1" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;