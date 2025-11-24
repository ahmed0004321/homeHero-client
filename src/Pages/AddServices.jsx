import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddService = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const inputClasses =
    "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all";

  const textareaClasses =
    "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none";

  const handleAddService = (e) => {
    e.preventDefault();

    const serviceName = e.target.serviceName.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const providerName = e.target.providerName.value;
    const email = e.target.email.value;

    const addServiceData = {
      serviceName,
      category,
      price,
      description,
      imageUrl,
      providerName,
      email,
    };
    console.log(addServiceData);

    //sending data to the backend::
    axios
      .post("http://localhost:3000/addServices", addServiceData)
      .then((res) => {
        console.log("Response:", res.data);
        navigate("/services");
        Swal.fire({
          title: "Success",
          text: "Services Added Successfully",
          icon: "success",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div
        className="w-full max-w-2xl p-8 rounded-2xl shadow-xl relative backdrop-blur-lg border border-white/20"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          WebkitBackdropFilter: "blur(14px)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Add New Service
        </h2>

        <form onSubmit={handleAddService} className="flex flex-col gap-4">
          {/* Service Name */}
          <input
            type="text"
            name="serviceName"
            placeholder="Service Name"
            className={inputClasses}
            required
          />
          <select name="category" className={inputClasses} required>
            <option value="" disabled selected>
              Select Category
            </option>
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
            className={inputClasses}
            min="0"
            step="0.01"
            required
          />
          <textarea
            name="description"
            placeholder="Service Description"
            className={textareaClasses}
            rows="4"
            required
          />
          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            className={inputClasses}
            required
          />

          {/* Provider Name */}
          <input
            type="text"
            name="providerName"
            placeholder="Provider Name"
            className={inputClasses}
            required
          />
          <input
            type="hidden"
            name="email"
            defaultValue={user?.email}
            placeholder="Provider Email"
            className={inputClasses}
            required
          />
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
