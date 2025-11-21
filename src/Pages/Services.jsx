import React, { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const AllServices = () => {
  const { services, setServices } = use(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allServices")
      .then((res) => {
        setServices(res.data);  
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [setServices]);


  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            All Services
          </h1>
          <p className="text-gray-300 text-lg">
            Browse our professional home services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services && Array.isArray(services) && services?.length > 0 ? (
            services.map((service) => (
              <div
                key={service._id}
                className="group w-full rounded-2xl shadow-xl relative backdrop-blur-lg border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  WebkitBackdropFilter: "blur(14px)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service?.imageUrl}
                    alt={service?.serviceName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                    {service?.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Service Name */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                    {service?.serviceName}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
                    {service?.description}
                  </p>

                  {/* Provider Info */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {service?.providerName?.charAt(0)}
                    </div>
                    <span className="text-gray-300 text-sm truncate">
                      {service?.providerName}
                    </span>
                  </div>

                  {/* Price & Button */}
                  <div className="mt-auto">
                    <div className="mb-3">
                      <p className="text-gray-400 text-xs mb-1">
                        Starting from
                      </p>
                      <p className="text-2xl font-bold text-white">
                        ${service?.price}
                      </p>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg transition-all hover:shadow-xl">
                      Service Details
                    </button>
                  </div>
                </div>

                {/* Glass Reflection Effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  }}
                ></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-white text-xl">No services available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
