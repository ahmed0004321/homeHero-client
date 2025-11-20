import Marquee from "react-fast-marquee";

const ScrollBar = () => {
  const MarqueeComponent = Marquee.default || Marquee;
  
  const companies = [
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
  ];

  return (
    <div className="w-full py-8">
      <h3 className="text-center text-white/70 text-sm font-medium mb-6 tracking-wider uppercase">
        Trusted by Industry Leaders
      </h3>
      
      <MarqueeComponent speed={60} gradient={false} pauseOnHover={true}>
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center group mx-12"
          >
            <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 w-40 h-28 flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-16 max-w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </MarqueeComponent>
    </div>
  );
};

export default ScrollBar;