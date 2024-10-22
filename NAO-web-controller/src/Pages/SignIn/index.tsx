import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './SignIn.css'

function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/');
  }

  const handleSignInClick = () => {

    if (username === 'nao' && password === 'nao') {
      navigate('/main-controller');
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-100">

      {/* Top Rectangle */}
      <div className="w-[408px] h-[37px] bg-[#3C3C3C] rounded-[3px] justify-start "></div>

      {/* Content */}
      <div className="flex flex-row w-[510px] h-[200px] ml-20 mb-4 mt-10">
        <img className="w-[170px] h-[130px] mt-3" src="nao-head.png" alt="NAO-Web-Controller Logo" />

        <div className="flex flex-col ml-4 mt-4">

          { /* Sign In Forms */}

          <p className="text-[14px] font-bold mb-[1px]">Username</p>
          <input type="text" placeholder="Please enter a registered username" 
          className="w-[245px] h-[25px] text-[11px] mb-[13px] rounded-[3px]
          border-[1px] border-black text-[#3C3C3C] px-1"
          onChange={(e) => {setUsername(e.target.value)}}></input>

          <p className="text-[14px] font-bold mb-[1px]">Password</p>
          <input type="password" placeholder="Please enter the given password" 
          className="w-[245px] h-[25px] text-[11px] rounded-[3px]
          border-[1px] border-black text-[#3C3C3C] px-1"
          onChange={(e) => {setPassword(e.target.value)}}></input>
          

          { /* Buttons */ }
          <div className="flex flex-row space-x-[15px]">
            <button className="w-[105px] h-[28px] mt-[26px] px-0 py-[1px] bg-[#D9D9D9] text-[#3C3C3C] rounded-[10px] font-bold
            border-[1px] border-black text-[14px]" onClick={handleCancelClick} >Cancel</button>

            <button className="w-[105px] h-[28px] mt-[26px] px-0 py-[1px] bg-[#3C3C3C] text-[#D9D9D9] rounded-[10px] font-bold
            text-[14px]" onClick={handleSignInClick}>Sign in</button>
          </div>
      
        </div>

      </div>  

      {/* The three astethic rounded squares */}
      <div className="flex flex-row space-x-[28px] justify-end mb-[24px]">

        <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-[10px]"></div>

      </div>

      {/* Credits section */}
      <div className="absolute bottom-0 right-0 p-4" >

        <p className="text-[10px] text-right leading-[1.2] font-bold" >Made by: Alonso Hernandez Tavera <br/> @fai-aher (GitHub) </p>

      </div>

    </div>

  )
}

export { SignIn }
