import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function MovementOptions() {

  const API_URL = 'http://192.168.73.102:5000'; 
  const navigate = useNavigate();

    // Función para Toggle Awareness
    const handleToggleAwareness = async (enable: boolean) => {
      try {
        const response = await axios.post(`${API_URL}/toggle_awareness`, {
          enable: enable,
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error al hacer toggle awareness:', error);
      }
    };
  
    // Función para Stand Up
    const handleStandUp = async () => {
      try {
        const response = await axios.post(`${API_URL}/stand_up`);
        console.log(response.data);
      } catch (error) {
        console.error('Error al hacer stand up:', error);
      }
    };
  
    // Función para Set Posture
    const handleSetPosture = async (postureName: string) => {
      try {
        const response = await axios.post(`${API_URL}/set_posture`, {
          posture_name: postureName,
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error al establecer postura:', error);
      }
    };

  const handleBackClick =() => {

    navigate("/menu");
  }

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
        onClick={() =>handleToggleAwareness(true)}>
          Awareness ON
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px]
        bg-[#585757] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700"
        onClick={handleStandUp}>
          Stand Up
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px]
        bg-[#3C3C3C] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700"
        onClick={() =>handleSetPosture('Sit')}>
          Sit Down
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px] 
        bg-[#585757] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700"
        onClick={() =>handleToggleAwareness(false)}>
          Awareness OFF
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px] 
        bg-[#3C3C3C] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">
          Movement 5
        </button>

        <button className="flex flex-col justify-center items-center text-[12px] font-bold w-[130px] h-[80px] 
        bg-[#585757] text-white rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">
          Movement 6
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
  
  export { MovementOptions }
  