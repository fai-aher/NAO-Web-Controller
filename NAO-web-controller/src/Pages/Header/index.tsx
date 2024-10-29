function Header() {

  return (
    <div className="flex flex-col items-center justify-between">
      
      {/* Top Rectangle */}
      <div className="w-[408px] h-[37px] bg-[#3C3C3C] rounded-[3px] justify-start "></div>

      {/* Battery Control */}
      <div className="flex flex-row absolute top-[6px] left-[227px]">
        <div className="w-[8px] h-[25px] bg-[#7AFF05] rounded-[2px]"></div>
        <div className="w-[7px] h-[25px] bg-[#3C3C3C] rounded-[2px]"></div>
        <div className="w-[8px] h-[25px] bg-[#7AFF05] rounded-[2px]"></div>
        <div className="w-[7px] h-[25px] bg-[#3C3C3C] rounded-[2px]"></div>
        <div className="w-[8px] h-[25px] bg-[#7AFF05] rounded-[2px]"></div>
        <div className="w-[7px] h-[25px] bg-[#3C3C3C] rounded-[2px]"></div>
        <div className="w-[8px] h-[25px] bg-[#7AFF05] rounded-[2px]"></div>
      </div>

      {/* Robot Online Indicator */}
      <div className="w-[25px] h-[25px] bg-[#7AFF05] rounded-full absolute top-[6px] right-[232px]"></div>


    </div>
  )
}

export { Header }
