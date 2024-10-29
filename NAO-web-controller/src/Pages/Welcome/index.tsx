import { useNavigate } from 'react-router-dom'

function Welcome() {

  const navigate = useNavigate();

  const handleSignInClick = () => {

    console.log('Sign in clicked');
    navigate('/sign-in');

  }

  return (

    <div className="flex flex-col items-center justify-between h-[353px]">

      {/* Content */}
      <div className="flex flex-row mt-[85px] w-[510px] h-[100px] ml-20">
        <img className="w-[170px] h-[130px]" src="nao-head.png" alt="NAO-Web-Controller Logo" />

        <div className="flex flex-col ml-4 mt-4">
          <h1 className="text-3x1 font-bold text-[24px] leading-[1.2]">Welcome to the <br/> NAO Web Remote Controller</h1>
          <button className="w-[120px] h-[35px] mt-4 px-0 py-1.5 bg-[#3C3C3C] text-[#D9D9D9] rounded-[10px] font-bold
           transition transform hover:scale-105" onClick={handleSignInClick}>Sign in</button>
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

export { Welcome }
