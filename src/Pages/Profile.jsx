import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div
        className="w-full max-w-sm p-8 rounded-3xl shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          My Profile
        </h2>

        {/* User Image */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User"
            className="w-24 h-24 rounded-full border border-white/20 shadow-sm object-cover"
          />
        </div>

        {/* User Info */}
        <div className="space-y-4">
          <div className="text-white">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>

          <div className="text-white">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
