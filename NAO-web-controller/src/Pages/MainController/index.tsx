import { useNavigate } from 'react-router-dom'

import './MainController.css'

function MainController() {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/sign-in");
  }

  const handleMenuClick = () => {
    navigate("/menu");
  }

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
        <button className="w-[55px] h-[55px] absolute top-8 bg-[#3C3C3C] text-white rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">↑</button>
        <button className="absolute bottom-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">↓</button>
        <button className="absolute left-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">←</button>
        <button className="absolute right-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">→</button>
        <button className="bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-full text-[20px] transition transform hover:scale-105 hover:bg-gray-700">↵</button>
      </div>


      {/* Right Joystick */}
      <div className="w-[250px] h-[250px] bg-[#D1D1D1] rounded-full absolute top-8 right-6"></div>

      <div className="w-[270px] h-[270px] flex justify-center items-center absolute top-6 right-[15px]">
        {/* Arrow Buttons */}
        <button className="w-[55px] h-[55px] absolute top-8 bg-[#3C3C3C] text-white rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">↑</button>
        <button className="absolute bottom-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">↓</button>
        <button className="absolute left-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">←</button>
        <button className="absolute right-8 bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-[3px] text-[20px] transition transform hover:scale-105 hover:bg-gray-700">→</button>
        <button className="bg-[#3C3C3C] text-white w-[55px] h-[55px] rounded-full text-[20px] transition transform hover:scale-105 hover:bg-gray-700">↵</button>
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
