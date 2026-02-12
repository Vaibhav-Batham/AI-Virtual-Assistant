import React, { useContext, useState } from "react";
import bg from "../assets/bg.jpeg";
import { userDataContext } from "../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { serverUrl,userData, setUserData} = useContext(userDataContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/signin`,
        formData
      );

      if (response.data.success) {
        setSuccess("Login successful!");
                
        setTimeout(() => navigate("/"), 1500);
      } else {
        setError(response.data.message || "Login failed.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error.");
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/40 backdrop-blur-lg p-14 rounded-3xl shadow-2xl w-[95%] max-w-3xl border border-white/20">
        <h2 className="text-5xl font-bold text-white text-center mb-10">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-5 text-lg rounded-xl bg-white/20 text-white placeholder-white outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-5 text-lg rounded-xl bg-white/20 text-white placeholder-white outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white py-5 rounded-xl font-semibold text-xl"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-white mt-8 text-lg">
          Don’t have an account?
          <span
            className="text-cyan-400 cursor-pointer ml-1"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
