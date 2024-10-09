import React from 'react';

const VirtualHouse = () => {
  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-0 text-center">
          {/* Left Section */}
          <div className="flex bg-orange-500 items-center">
            <img className="w-20 rounded-full" src="/img/new/back.png" alt="Back" />
            <div className="w-full">
              <h1 className="font-extrabold text-xl md:text-3xl">JUST LOOK AROUND</h1>
              <h1 className="m-0 pl-1 pr-1 text-white text-lg md:text-lg">
                IF YOU DO NOT SEE YOUR AREA, THEN{' '}
                <a
                  className="font-bold text-yellow-300 text-base md:text-xl cursor-pointer"
                  href="https://hm.ez123.eu/ContactUs"
                >
                  CLICK HERE
                </a>
              </h1>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="bg-blue-500 p-4">
            <h1 className="text-white text-lg md:text-xl m-0 p-0">
              When a <span className="text-md font-bold">Virtual House gets 75% full</span> of businesses, it automatically unlocks & everyone in it is informed that they can now see it online.
            </h1>
            <div className="ml-5 mr-5 grid grid-cols-3 gap-4 mt-4">
              <div className="w-full p-0.5 bg-yellow-200 rounded-xl">
                <div className="bg-red-400 rounded-xl p-1 text-center text-xs font-medium leading-none text-primary-100" style={{ width: '60%' }}>5-64%</div>
              </div>
              <div className="w-full p-0.5 bg-yellow-200 rounded-xl">
                <div className="bg-orange-400 rounded-xl p-1 text-center text-xs font-medium leading-none text-primary-100" style={{ width: '74%' }}>65-74%</div>
              </div>
              <div className="w-full p-0.5 bg-yellow-200 rounded-xl">
                <div className="bg-green-400 rounded-xl p-1 text-center text-xs font-medium leading-none text-primary-100" style={{ width: '80%' }}>75-100%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-1 flex justify-center">
          <div>
            <a
              className="flex flex-col mt-3 justify-center"
              href="https://hm.ez123.eu/VirtualHouses/GRAZ"
            >
              <span className="border-sky-600 border-2 text-3xl w-full rounded-full text-center bg-white text-sky-600 p-2">
                Experience <span className="text-[#FF00FE] font-bold">GRAZ's </span>VirtualHouse
              </span>
              <div className="flex justify-center flex-col items-center">
                <div className="flex justify-between w-full -mb-20 mt-2">
                  <img className="w-32 rotate-[35deg]" src="/img/lpg/arrow.gif" alt="Arrow" />
                  <img className="w-32 rotate-[135deg]" src="/img/lpg/arrow.gif" alt="Arrow" />
                </div>
                <img className="w-70" src="/img/lpg/vh.png" alt="VirtualHouse" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center pt-1 w-full text-xl text-white font-bold" style={{ textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px' }}>
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default VirtualHouse;
