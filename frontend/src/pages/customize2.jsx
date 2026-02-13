import React, { useContext, useState } from 'react';
import { userDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Customize2() {

  const { 
    userData,
    backendImage,
    selectedImage,
    frontendImage,   // ✅ FIXED
    serverUrl,
    setUserData
  } = useContext(userDataContext);

  const [assistantName, setAssistantName] = useState(userData?.AssistantName || "");
  const navigate = useNavigate();

  const handleNext = async () => {
    try {
      let formData = new FormData();
      formData.append("assistantName", assistantName);

      if (backendImage) {
        formData.append("assistantImage", backendImage);
      } else {
        formData.append("imageUrl", selectedImage);
      }

      const result = await axios.post(
        `${serverUrl}/api/user/update`,
        formData,
        { withCredentials: true }
      );

      console.log(result.data);
      setUserData(result.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-black to-[#030353] flex flex-col items-center justify-center p-6 gap-6">

      {/* Top Heading */}
      <h1 className="text-white text-[40px] text-center mb-8">
        Enter your <span className="text-blue-400">Assistant Name</span>
      </h1>

      {/* Selected Image Preview */}
      {frontendImage && (
        <div className="w-[150px] h-45 overflow-hidden rounded-2xl border-2 border-white mb-6">
          <img src={frontendImage} alt="Selected Assistant" className="h-full w-full object-cover" />
        </div>
      )}

      {/* Assistant Name Input */}
      <input
        type="text"
        value={assistantName}
        onChange={(e) => setAssistantName(e.target.value)}
        placeholder="Type your assistant name..."
        className="w-[320px] lg:w-[420px] p-5 rounded-xl text-white bg-black border-2 border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
      />

      {/* Buttons */}
      <div className="flex gap-6 mt-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/customize")}
          className="px-16 py-5 bg-gray-600 text-white text-lg rounded-full hover:bg-gray-700 transition-all"
        >
          Back
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-20 py-5 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-all"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Customize2;
