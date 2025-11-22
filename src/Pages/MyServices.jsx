import React, { use, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user, setServices, services } = use(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/myServices?email=${user.email}`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  const handleDelete = (id) => {
    console.log("Delete: ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/myServicesDelete?id=${id}`)
          .then((res) => {
            console.log(res.data);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setServices((prevServices) =>
              prevServices.filter((service) => service._id !== id)
            );
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          My Services
        </h2>

        <div
          className="rounded-2xl backdrop-blur-lg border border-white/20 overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            WebkitBackdropFilter: "blur(14px)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead className="bg-white/10 border-b border-white/20">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    image
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Service Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Description
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {/* If no services */}
                {services.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-10 text-center text-gray-300">
                      <p className="text-lg">No services added yet.</p>
                      <p className="text-sm text-gray-400">
                        Once you add a service, it will appear here.
                      </p>
                    </td>
                  </tr>
                ) : (
                  services.map((service) => (
                    <tr
                      key={service._id}
                      className="hover:bg-white/5 transition-colors"
                    >
                      {/* Image */}
                      <td className="px-6 py-4">
                        <img
                          src={service.imageUrl}
                          alt={service.serviceName}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </td>

                      {/* Service Name */}
                      <td className="px-6 py-4">
                        <p className="font-semibold">{service.serviceName}</p>
                      </td>

                      {/* Category */}
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm">
                          {service.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4">
                        <p className="text-xl font-bold">${service.price}</p>
                      </td>

                      {/* Description */}
                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {service.description}
                        </p>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg transition-all group">
                            <FiEdit className="text-blue-400 group-hover:scale-110 transition-transform" />
                          </button>

                          <button
                            onClick={() => handleDelete(service?._id)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/40 rounded-lg transition-all group"
                          >
                            <FiTrash2 className="text-red-400 group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Count */}
        <div className="mt-6 text-center">
          <p className="text-white text-lg">
            Total Services:{" "}
            <span className="font-bold text-purple-300">
              {services?.length || 0}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
