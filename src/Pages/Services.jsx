import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router";

const AllServices = () => {
  const { services, setServices } = use(AuthContext);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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

  const filteredServices = services?.filter((service) => {
    const price = service.price;
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;
    return price >= min && price <= max;
  });
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            All Services
          </h1>
          <p className="text-gray-300 text-lg">
            Browse our professional home services
          </p>
        </div>
        <div className="flex items-center justify-end gap-4 mb-8">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-32 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
          />
          <span className="text-white">to</span>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-32 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices && filteredServices.length > 0 ? (
            filteredServices.map((service) => (
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

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                    {service?.serviceName}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
                    {service?.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {service?.providerName?.charAt(0)}
                    </div>
                    <span className="text-gray-300 text-sm truncate">
                      {service?.providerName}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-3">
                      <p className="text-gray-400 text-xs mb-1">
                        Starting from
                      </p>
                      <p className="text-2xl font-bold text-white">
                        ${service?.price}
                      </p>
                    </div>

                    <Link to={`/servicesDetails/${service?._id}`} className="w-full btn py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg transition-all hover:shadow-xl">
                      Service Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-white text-xl">No services found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
