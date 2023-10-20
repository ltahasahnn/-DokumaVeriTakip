import React from 'react'

const Header = () => {
  return (
    <header className='w-full select-none max-h-[50px] min-h-[50px] h-full p-2 shadow-md'>
      <div className="container m-auto h-full flex items-center">
        <div className="brand h-[32.5px] flex items-center">
          <img src="images/logo.png" className='h-full' alt="" />
          <div className="flex flex-col">
            <span className='text-xs ml-2 font-bold'>URGE</span>
            <span className='text-xs ml-2 font-bold'>YAZILIM</span>
          </div>
        </div>
        <span className='font-bold text-[#333333] text-xl max-lg:ml-auto lg:mx-auto max-lg:text-sm max-md:text-xs'>Dokuma Veri Toplama Sistemi</span>
      </div>
    </header>
  )
}

export default Header