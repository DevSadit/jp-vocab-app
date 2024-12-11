"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  // console.log(process.env.IMGBB_API_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handlePhotoUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.data.url; // This is the URL of the uploaded image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload photo to imgbb
    const photoUrl = await handlePhotoUpload(photo);

    const userDetail = { ...formData, photo: photoUrl };

    // Send data to API
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(userDetail),
    });

    const data = await response.json();
    if (response) {
      toast.success("Registration Completed Succesfully!");
    } else {
      toast.error("An Error Occured!");
    }
  };

  return (
    <div className="bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5AC767] transition duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5AC767] transition duration-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5AC767] transition duration-300"
          />

          <input
            type="file"
            onChange={handleFileChange}
            required
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#5AC767] file:text-white hover:file:opacity-90 transition duration-300"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#5AC767] text-white rounded-lg hover:opacity-90 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
