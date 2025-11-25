import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateService = () => {
  const { user } = use(AuthContext);
  const [updateServices, setUpdateServices] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(updateServices);
  useEffect(() => {
    axios
      .get(`https://homehero-api-project-server.vercel.app/myServicesUpdate/${id}`)
      .then((res) => {
        setUpdateServices(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const serviceName = e.target.serviceName.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const providerName = e.target.providerName.value;

    const updateData = {
      serviceName,
      category,
      price,
      description,
      imageUrl,
      providerName,
    };
    axios
      .put(`https://homehero-api-project-server.vercel.app/myServicesUpdate/${id}`, updateData)
      .then((res) => {
        console.log("Updated:", res.data);
        Swal.fire({
          title: "Success",
          text: "Update Successfully",
          icon: "success",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
        navigate("/myServices");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error",
          text: "Update get's Error!",
          icon: "error",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
      });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl backdrop-blur-lg border border-white/20 p-8"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
          }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Update Service
          </h2>

          <form onSubmit={handleUpdate} className="space-y-5">
             
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              defaultValue={updateServices?.serviceName}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <select
              name="category"
              defaultValue={updateServices?.category}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrician">Electrician</option>
              <option value="Gardening">Gardening</option>
              <option value="HVAC">HVAC</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Painting">Painting</option>
              <option value="Appliance Repair">Appliance Repair</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="number"
              name="price"
              placeholder="Price ($)"
              defaultValue={updateServices?.price}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="description"
              placeholder="Service Description"
              defaultValue={updateServices?.description}
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              defaultValue={updateServices?.imageUrl}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="text"
              name="providerName"
              placeholder="Provider Name"
              defaultValue={updateServices?.providerName}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full btn py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg transition-all"
            >
              Update Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
