import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { setTabAfter, setTabBefore } from '../store/features/UserManagament';
import { useDispatch } from 'react-redux';

const Tabs = () => {
  const [states, setStates] = useState(0);
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    // Component unmount olduğunda interval'i temizle
    return () => clearInterval(intervalId);
  }, []);

  const handleClickTab = (tabNumber) => {
    window.location.href = `${"#tab-" + parseInt(tabNumber)}`
  };

  const dispatch = useDispatch()
  return (
    <div className="w-2/5 max-lg:w-full h-full flex flex-col border-l border-[#000] border-opacity-10">
      <div className="
      mobileTabs 
      w-full 
      h-[50px] 
      grid 
      grid-cols-4 
      font-bold 
      p-2 
      text-white
      max-md:grid-cols-2
      max-md:mb-10
      max-sm:text-xs 
      ">
        <span
          onClick={() => {
            setStates(0)
            handleClickTab(0)
          }}
          className={`
          p-2 
          bg-[#333333] 
          tabs 
          text-center 
          flex 
          items-center 
          justify-center 
          border 
          cursor-pointer 
          shadow-md 
          active:scale-95
           ${states === 0 ? 'active' : ''}
           `}>Tab-1</span>
        <span
          onClick={() => {
            setStates(1)
            handleClickTab(15)
          }}
          className={`
          p-2 
          bg-[#333333] 
          tabs 
          text-center 
          flex 
          items-center 
          justify-center 
          border 
          cursor-pointer 
          shadow-md 
          active:scale-95
           ${states === 1 ? 'active' : ''}
           `}>Tab-2</span>
        <span
          onClick={() => {
            setStates(2)
            handleClickTab(30)
          }}
          className={`
          p-2 
          bg-[#333333] 
          tabs 
          text-center 
          flex 
          items-center 
          justify-center 
          border 
          cursor-pointer 
          shadow-md 
          active:scale-95
           ${states === 2 ? 'active' : ''}
           `}>Tab-3</span>
        <span
          onClick={() => {
            setStates(3)
            handleClickTab(45)
          }}
          className={`
          p-2 
          bg-[#333333] 
          tabs 
          text-center 
          flex 
          items-center 
          justify-center 
          border 
          cursor-pointer 
          shadow-md 
          active:scale-95
           ${states === 3 ? 'active' : ''}
           `}>Tab-4</span>
      </div>
      <div className="flex flex-col p-2 h-full justify-center">
        <ul className
          ='flex mobileFont max-lg:my-4 justify-around max-lg:text-center lg:ml-5 font-bold'>
          <div
            className="flex items-center text-rose-500">
            <li>Kapalı</li>
          </div>
          <div className="flex items-center text-orange-400">
            <li>Tanımsız</li>
          </div>
          <div className="flex items-center text-emerald-500">
            <li>Çalışıyor</li>
          </div>
          <div className="flex items-center text-amber-700">
            <li>Çözgü</li>
          </div>
          <div className="flex items-center text-gray-500">
            <li>Atkı</li>
          </div>
        </ul>
      </div>
      <div className="flex justify-between p-2 px-5 flex-wrap lg:flex-row-reverse">
        <span className='text-xs mobileFont flex text-xs text-orange-500 font-bold'>
          <p>{currentTime.format('HH')}</p>
          <p>:</p>
          <p className='mr-2'>{currentTime.format('mm')}</p>
          <p>{currentTime.format('DD')}</p>
          <p>/{currentTime.format('MM')}/</p>
          <p>{currentTime.format('YYYY')}</p>
        </span>
        <span className='text-xs mobileFont'>Copyright @ 2023 <span className='text-orange-500 mobileFont font-bold'>Hobala Ltd.Şti...</span> Tüm Hakları Saklıdır.</span>
      </div>
    </div>
  )
}

export default Tabs