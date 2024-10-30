import { useNavigate } from 'react-router-dom'

import axios from 'axios';

function MainController() {

  const API_URL = 'http://192.168.73.102:5000'; 
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/sign-in");
  }

  const handleMenuClick = () => {
    navigate("/menu");
  }

  // Move Robot Forward
  const handleMoveForward = async () => {
    try {
      const response = await axios.post(`${API_URL}/move_robot`, { x: parseFloat(0.1), y: parseFloat(0.0), theta: parseFloat(0.0) });
      console.log(response.data);
    } catch (error) {
      console.error('Error move robot:', error);
    }
  };

  
  // Move Robot to the Left
  const handleMoveToLeft = async () => {
    try {
      const response = await axios.post(`${API_URL}/move_robot`, { x: parseFloat(0.0), y: parseFloat(-0.1), theta: parseFloat(0.0) });
      console.log(response.data);
    } catch (error) {
      console.error('Error move robot:', error);
    }
  };
  
  // Move Robot to the Right
  const handleMoveToRight = async () => {
    try {
      const response = await axios.post(`${API_URL}/move_robot`, { x: parseFloat(0.0), y: parseFloat(0.1), theta: parseFloat(0.0) });
      console.log(response.data);
    } catch (error) {
      console.error('Error move robot:', error);
    }
  };

    // Move Robot Backward
    const handleMoveBackward = async () => {
      try {
        const response = await axios.post(`${API_URL}/move_robot`, { x: parseFloat(-0.1), y: parseFloat(0.0), theta: parseFloat(0.0) });
        console.log(response.data);
      } catch (error) {
        console.error('Error move robot:', error);
      }
    };

    // Rotate Robot Left
    const handleRotateLeft = async () => {
      try {
        const response = await axios.post(`${API_URL}/move_robot`, { x: parseFloat(0.3), y: parseFloat(0.0), theta: parseFloat(3.0) });
        console.log(response.data);
      } catch (error) {
        console.error('Error move robot:', error);
      }
    };

    // Rotate Robot Right
    const handleRotateRight = async () => {
      try {
        const response = await axios.post(`${API_URL}/move_robot`, { x: parseFloat(0.3), y: parseFloat(0.0), theta: parseFloat(-3.0) });
        console.log(response.data);
      } catch (error) {
        console.error('Error move robot:', error);
      }
    };


  return (
    <div className="flex flex-col items-center justify-between h-[353px]">
      
      {/* Back Button */}
      <div className="absolute top-5 left-5 z-50">
        <button className="bg-[#3C3C3C] w-[60px] h-[30px] rounded-[10px] text-white text-[20px]
         flex justify-center items-center transition transform hover:scale-105 hover:bg-gray-700"
         onClick={handleBackClick}>
          ←
        </button>
      </div>

      {/* Left Joystick */}
      <div className="w-[250px] h-[250px] bg-[#D1D1D1] rounded-full absolute top-8 left-6"> </div>

      <div className="w-[270px] h-[270px] flex justify-center items-center absolute top-6 left-[15px]">
        {/* Arrow Buttons */}
        <button className="w-[55px] h-[55px] absolute top-8 bg-[#3C3C3C] text-white rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         onClick={handleMoveForward}>
          <img src="svg/forward-arrow.svg" />
         </button>
        <button className="absolute bottom-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         onClick={handleMoveBackward}>
          <img src="svg/backward-arrow.svg" />
         </button>
        <button className="absolute left-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         onClick={handleMoveToLeft}>
          <img src="svg/left-arrow.svg" />
         </button>
        <button className="absolute right-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         onClick={handleMoveToRight}>
          <img src="svg/right-arrow.svg" />
         </button>
        <button className=" text-white w-[55px] h-[55px] rounded-full
         text-[20px] transition transform hover:scale-105">
          <img src="svg/robot-legs.svg" />
         </button>

        {/* Rotation Buttons */}
        <button className="absolute left-7 top-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] p-[10px] rounded-full
         text-[20px] transition transform hover:scale-105" onClick={handleRotateLeft}>
          <img src="svg/turn-left.svg" />
         </button>

         <button className="absolute right-7 top-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] p-[10px] rounded-full
         text-[20px] transition transform hover:scale-105" onClick={handleRotateRight}>
          <img src="svg/turn-right.svg" />
         </button>


      </div>


      {/* Right Joystick */}
      <div className="w-[250px] h-[250px] bg-[#D1D1D1] rounded-full absolute top-8 right-6"></div>

      <div className="w-[270px] h-[270px] flex justify-center items-center absolute top-6 right-[15px]">
        {/* Arrow Buttons */}
        <button className="w-[55px] h-[55px] absolute top-8 bg-[#3C3C3C] text-white rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         >
          <img src="svg/forward-arrow.svg" />
         </button>
        <button className="absolute bottom-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         >
          <img src="svg/backward-arrow.svg" />
         </button>
        <button className="absolute left-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         >
          <img src="svg/left-arrow.svg" />
         </button>
        <button className="absolute right-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px]
         text-[20px] transition transform hover:scale-105 hover:bg-gray-700"
         >
          <img src="svg/right-arrow.svg" />
         </button>
        <button className=" text-white w-[55px] h-[55px] rounded-full
         text-[20px] transition transform hover:scale-105">
          <img src="svg/robot-head.svg" />
         </button>
      </div>

      { /* Middle Buttons */ }
      <div className="mt-[-10px] flex flex-col justify-center items-center absolute top-[30px]">
        <img src="/nao-head.png" alt="NAO" className="w-[164px] h-[130px]" />

        <div className="mt-[-20px] flex flex-col justify-center items-center">

          <div className="relative flex flex-row space-x-[60px]">
            <button className="bg-[#3C3C3C] w-[72px] h-[72px] text-[40px] rounded-[10px]  transition transform hover:scale-105 hover:bg-gray-700">☀️</button>
            <button className="bg-[#3C3C3C] w-[72px] h-[72px] text-[40px] rounded-[10px] transition transform hover:scale-105 hover:bg-gray-700">🌙</button>
          </div>

          {/* Heart Button */}
          <button className="mt-[10px] bg-[#3C3C3C] w-[72px] h-[72px] rounded-[10px]  text-[40px] transition transform hover:scale-105 hover:bg-gray-700">💛</button>
        </div>
      </div>

      {/* Side Decoratos */}
      <div className="w-[40px] h-[104px] bg-[#3C3C3C] rounded-[3px] absolute top-[225px] left-[0px]"></div>
      <div className="w-[40px] h-[104px] bg-[#3C3C3C] rounded-[3px] absolute top-[225px] right-[0px]"></div>

      {/* Bottom Buttons */}
      <div className="flex flex-row w-[715px] h-[100px] space-x-[54px] absolute bottom-[0px]">
        {/* Left Video Camera */}
        <div className="w-[175px] h-[100px] bg-[#3C3C3C] rounded-[5px] flex justify-center items-center">
          <div className="w-[151px] h-[80px] bg-[#D1D1D1] rounded-[5px]">

          </div>
        </div>

        {/* Middle Button */}
        <div className="w-[251px] h-[75px] bg-[#3C3C3C] rounded-[5px] mt-[25px] flex justify-center items-center">
          <button className="w-[225px] h-[50px] bg-[#D9D9D9] rounded-[10px]
           transition transform hover:scale-105 hover:bg-gray-300 flex justify-center"
           onClick={handleMenuClick}>
            <img src="svg/menu-icon.svg" alt="NAO" className="w-[50px] h-[50px]" />
          </button>

        </div>

        {/* Right Video Camera */}
        <div className="w-[175px] h-[100px] bg-[#3C3C3C] rounded-[5px] flex justify-center items-center">
          <div className="w-[151px] h-[80px] bg-[#D1D1D1] rounded-[5px]">

          </div>
        </div>
      </div>
    </div>
  )
}

export { MainController }
