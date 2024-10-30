import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';

function SpeechOptions() {

  const navigate = useNavigate();
  const [speechText, setSpeechText] = useState('');

  const handleBackClick = () => {

    const API_URL = 'http://192.168.73.102:5000';
    navigate("/menu");
  } 

  const handleTextToSpeechClick = async () => {
    if (!speechText.trim()) {
      console.error('El texto está vacío');
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/speak`, {
        text: speechText,
        animated: true, // Opcional: cambia según necesidad
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error speak:', error);
    }
  };

  const handleHelloClick = async () => {
    try {
      const response = await axios.post(`${API_URL}/speak`, {
        text: "こんばんは、ル！おやすみなさい",
        animated: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error speak:', error);
    }
  };

    return (
      <div className="flex flex-col items-center h-[353px]">

      {/* Back Button */}
      <div className="absolute top-5 left-5 z-50">
        <button className="bg-[#3C3C3C] w-[60px] h-[30px] rounded-[10px] text-white text-[20px]
          flex justify-center items-center transition transform hover:scale-105 hover:bg-gray-700"
          onClick={handleBackClick}>
            ←
        </button>
      </div>

      {/* Page Title */}
      <div className="flex flex-row mt-[15px] ml-[30px] items-center">
        <h1 className="font-bold text-[24px]">Explore NAO's Functionalities</h1>
        <img src="/nao-head.png" alt="NAO" className="w-[72px] h-[55px]" />
      </div>

      {/* Menu Option Buttons Grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[30px] mt-[10px] ">
        
        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px]
        bg-[#3C3C3C] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700"
        onClick={handleHelloClick}>
          Good night
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px]
        bg-[#585757] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">
          Speech 2
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px]
        bg-[#3C3C3C] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">
          Speech 3
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px] 
        bg-[#585757] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">
          Speech 4
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px] 
        bg-[#3C3C3C] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">
          Speech 5
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px] 
        bg-[#585757] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">
          Speech 6
        </button>

      </div>

      {/* The three astethic rounded squares */}
      <div className="flex flex-row space-x-[28px] mt-[23px]">

        <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-[10px]"></div>

      </div>
        
    </div>
    )
  }
  
  export { SpeechOptions }
  