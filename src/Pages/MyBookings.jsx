import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";

const MyBookings = () => {
  const { loading } = use(AuthContext);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get("https://homehero-api-project-server.vercel.app/myBookings")
      .then((res) => {
        console.log("get ALL mybooking Data seccessfull", res.data);
        setBooking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setBooking]);
  console.log(booking);
  const handleCancel = (id) => {
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
          .delete(`https://homehero-api-project-server.vercel.app/myBookings?id=${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setBooking((prevBook) =>
              prevBook.filter((book) => book._id !== id)
            );
          })
          .catch((err) => console.log(err));
      }
    });
  };
  if (loading) {
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
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          My Bookings
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
                    Service Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    User Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Booking Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Price
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {booking.map((book) => (
                  <tr
                    key={book._id}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        className="w-10 h-10 rounded-lg"
                        src={book.serviceDetails.imageUrl}
                        alt=""
                      />
                      <p className="font-semibold">
                        {book.serviceDetails.serviceName}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-300 text-sm">{book.userEmail}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-300">{book.bookingDate}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xl font-bold">${book.price}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleCancel(book._id)}
                          className="p-2 bg-red-500/20 hover:bg-red-500/40 rounded-lg transition-all group"
                        >
                          <FiTrash2 className="text-red-400 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-white text-lg">
            Total Bookings:{" "}
            <span className="font-bold text-purple-300">{booking.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
