import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";

const ServicesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user, setUser, loading } = use(AuthContext);

  console.log(details);
  console.log(user);

  useEffect(() => {
    axios
      .get(`https://homehero-api-project-server.vercel.app/servicesDetails/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const serviceId = e.target.serviceId.value;
    const bookingDate = e.target.bookingDate.value;
    const price = e.target.price.value;

    const bookingData = {
      userEmail,
      serviceId,
      bookingDate,
      price,
    };
    console.log(bookingData);
    axios
      .post("https://homehero-api-project-server.vercel.app/bookings", bookingData)
      .then((res) => {
        console.log("booking SuccessFull", res.data);
        Swal.fire({
          title: "Success",
          text: `Login Successfull`,
          icon: "success",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
        navigate("/myBookings");
      })
      .catch((err) => {
        console.error(err);
      });

    //     console.log(bookingData);

    //     // Send to backend
    //     axios
    //       .post("https://homehero-api-project-server.vercel.app/bookings", bookingData)
    //       .then((res) => {
    //         console.log("Booking successful:", res.data);
    //         setShowModal(false);
    //         alert("Booking successful!");
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //         alert("Booking failed!");
    //       });
  };
  if(loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <p>Loading...</p> */}
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all"
        >
          ← Back to Services
        </button>

        <div
          className="rounded-xl backdrop-blur-lg border border-white/20"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
          }}
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-t-xl">
            <img
              src={details?.imageUrl}
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-12">
            <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/20">
              <div className="flex-1">
                <h1 className="text-5xl font-bold text-white mb-4">
                  {details?.serviceName}
                </h1>
                <div className="flex items-center gap-4 text-gray-300">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-md text-sm">
                    {details?.category}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm mb-1">Starting from</p>
                <p className="text-4xl font-bold text-white">
                  {details?.price}$
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className=" text-white">{details?.description}</h2>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    What's Included
                  </h2>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Professional service delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Quality materials and tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Service Provider
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-2xl">
                      P
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">
                        {details?.providerName}
                      </p>
                      <p className="text-gray-400 text-sm">Professional</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleModal}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold text-lg rounded-lg shadow-lg transition-all"
                >
                  Book Now
                </button>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-gray-400 text-sm text-center">
                    Available for booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className="w-full max-w-lg rounded-2xl backdrop-blur-lg border border-white/20 p-8"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Book Service</h2>
              <button
                onClick={handleModal}
                className="text-white hover:text-gray-300 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">
                {details?.serviceName}
              </h3>
              <p className="text-gray-400 text-sm mb-1">
                Category: {details?.category}
              </p>
              <p className="text-white font-bold text-xl">
                Price: ${details?.price}
              </p>
            </div>
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                {/* <label className="block text-white text-sm font-semibold mb-2">
                  Your Email
                </label> */}
                <input
                  type="hidden"
                  name="userEmail"
                  value={user?.email}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-gray-400 cursor-not-allowed"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  ServiceId
                </label>
                <input
                  type="text"
                  name="serviceId"
                  value={details?._id}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-gray-400 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Booking Date
                </label>
                <input
                  type="date"
                  name="bookingDate"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Total Price
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={details?.price}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-gray-400 cursor-not-allowed"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-lg shadow-lg transition-all"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDetails;
