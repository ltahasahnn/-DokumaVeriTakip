import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { setTabAfter } from '../store/features/UserManagament';

const Tab1 = () => {

  const { tabAfter, tabBefore } = useSelector((state) => state.userManagament);

  const apiUrl = 'http://kumca.urgeyazilim.net/api/getlive';
  const [state, setState] = useState()

  const [tabsBefore, setTabsBefore] = useState(tabBefore)
  const [tabsAfter, setTabsAfter] = useState(tabAfter)

  useEffect(() => {
    setTabsBefore(tabBefore);
    setTabsAfter(tabAfter);
  }, [tabBefore, tabAfter]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setState(data);
        })
        .catch(error => {
          console.error('Veri çekme hatası:', error);
        });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])

  return (
    // <div className="md:container max-md:w-full h-full grid grid-cols-5 max-sm:grid-cols-2 max-sm:grid-rows-[300px] max-sm:px-4 max-md:grid-cols-3 max-md:pr-4 max-md:pl-2 max-lg:pr-4 max-lg:grid-cols-4 grid-rows-3 mobileGrid max-lg:grid-rows-none gap-3 mx-auto overflow-scroll">
    //   {state && state.map(({ STATUS, MNO, VSAY }, index) => {
    //     if (index < 15) {
    //       return (
    //         <div
    //           key={index}
    //           className={`max-h-[125px] MobilCard max-sm:max-h-[200px] text-white font-bold flex-col max-sm:justify-between shadow rounded-md ${STATUS === "RUN" ? 'bg-green-500' : ''} ${STATUS === "TSTP" ? 'bg-orange-500' : ''} ${STATUS === "ASTP" ? 'bg-gray-500' : ''} ${STATUS === "CSTP" ? 'bg-amber-700' : ''} ${STATUS === "STOP" ? 'bg-rose-500' : ''}`}>
    //           <div className="flex mobile w-full h-[74px] max-sm:h-[135px] max-sm:p-4 rounded-tr-md rounded-tl-md">
    //             <div className="w-[60%] mobilContentDiv rounded-tl-md max-sm:w-full flex items-center justify-start md:pl-6 max-md:justify-start">
    //               <span className='text-2xl max-lg:text-3xl text-center max-sm:text-2xl max-sm:tracking-widest rounded-full bg-[#333333] max-md:w-[60px] max-md:h-[60px] w-[50px] h-[50px] max-lg:w-[55px] max-lg:h-[55px] ball flex items-center justify-center max-md:ml-4'>{MNO}</span>
    //             </div>
    //             <div className="w-[40%] max-sm:mt-2 max-sm:mb-6 rounded-tr-md max-sm:w-full max-sm:h-[85px] flex items-center justify-center py-2">
    //               <div className="relative flex percentDiv h-full mt-2">
    //                 <img src="images/heart.png" className='h-full heart opacity-75' alt="" />
    //                 <div className="percent">
    //                   <span className='text-sm max-xl:text-xs'>%44</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex mobilVurus w-full h-[40px] max-sm:h-[60px] items-center max-sm:justify-center rounded-br-md rounded-tb-md rounded-bl-md">
    //             <div className="w-[60%] rounded-bl-md px-6 max-md:px-8 max-sm:px-3 max-sm:px-0 max-md:h-fit max-sm:w-full max-sm:flex max-sm:justify-center">
    //               <img src="images/charts.png" className='w-full max-sm:w-6/12 h-full' alt="" />
    //             </div>
    //             <div className="w-[40%] max-md:h-fit max-sm:h-fit max-md:my-auto rounded-br-md flex justify-center max-sm:w-full items-center">
    //               <p className='text-sm max-xl:text-xs max-md:text-xs max-sm:text-sm max-sm:mt-2'>{VSAY}</p>
    //             </div>
    //           </div>
    //         </div>)
    //     }
    //   })}
    // </div>
    <div
      className='
      content
      md:container
      m-auto
      h-full 
      grid
      grid-cols-5 
      max-lg:grid-cols-4
      max-md:grid-cols-3
      max-sm:grid-cols-2
      gap-3
      max-lg:grid-rows-none
      overflow-scroll
      '>
      {state && state.map(({ STATUS, MNO, VSAY, VSUR }, index) => {
        if (index <= index) {
          const saniyeBasinaVurus = VSAY / VSUR;
          const saatBasinaVurus = saniyeBasinaVurus * 3600;

          const gunlukVurus = saniyeBasinaVurus * 3600 * 24;
          const gunlukYuzde = (VSAY / gunlukVurus) * 100;

          return (
            <div
              className='w-full'
              id={"tab-" + index}
              key={index}>
              <div
                className={`
                card
                flex
                flex-col 
                w-full 
                h-full 
                shadow-md 
                rounded-md 
                px-2 
                py-1 
                max-md:max-h-[165px] 
                max-md:h-[165px]
                max-lg:max-h-[125px] 
                max-lg:h-[125px]
                ${STATUS === 'RUN' ? 'bg-green-500' : ''}
                ${STATUS === 'STOP' ? 'bg-rose-500' : ''}
                ${STATUS === 'ASTP' ? 'bg-gray-500' : ''}
                ${STATUS === 'TSTP' ? 'bg-orange-400' : ''}
                ${STATUS === 'CSTP' ? 'bg-amber-700' : ''}
                `}>
                <div className="flex w-full h-2/4 text-white font-bold text-xl">
                  <div className="w-3/5 h-full flex items-center">
                    <div className="
                    mBall
                    bg-gray-700
                    rounded-full 
                    w-[55px]
                    h-[55px]
                    flex 
                    items-center
                    justify-center 
                    shadow-md
                    max-md:w-[60px]
                    max-md:h-[60px]
                    max-lg:w-[45px]
                    max-lg:h-[45px]
                    max-xl:w-[45px]
                    max-xl:h-[45px]
                    ">
                      <span>
                        {MNO}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/5 h-full flex items-center justify-center">
                    <div className="
                    relative 
                    flex 
                    items-center 
                    justify-center
                    pt-4 
                    max-md:w-4/5
                    xl:w-4/5
                    max-xl:w-5/5
                    ">
                      <img
                        src="images/heart.png"
                        className='
                        opacity-50
                        heart
                        w-5/5
                        '
                        alt=""
                      />
                      <div
                        className="
                        absolute 
                        font-bold
                        text
                        text-xs
                        top-8
                        recent
                        "
                      >
                        {gunlukYuzde && gunlukYuzde !== null ? gunlukYuzde.toFixed(2) + '%' : '0%'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full h-2/4">
                  <div className="w-3/5 h-full flex items-center">
                    <img
                      src="images/charts.png"
                      className='
                     w-3/5 
                     chart
                     opacity-50
                     '
                      alt=""
                    />
                  </div>
                  <div className="w-2/5 h-full flex items-center justify-center">
                    <span className='text-white font-bold'>
                      {VSAY}
                    </span>
                  </div>
                </div>
              </div>
            </div>)
        }
      })}
    </div>

  )
}

export default Tab1