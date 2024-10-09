import React from 'react';

const MyComponent = () => {
  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col md:p-4 w-full h-full items-center">
        <div className="bg-white p-1 md:p-2 text-2xl md:text-3xl text-center md:rounded-xl border-2 border-gray-700">
          <div className="flex justify-center">
            <img
              src="/assets/images/speaker.jpg"
              className="w-24 hover:scale-105"
              alt="Speaker"
            />
          </div>
          <h1>
            If you cannot see your country, province, or{' '}
            <span className="text-white px-2 hover:px-3 cursor-pointer hover:text-4xl bg-green-700 rounded-full">
              &gt;
            </span>
          </h1>
          <a
            className="flex justify-center items-center"
            href="https://hm.ez123.eu/VirtualHouse?country=en&vh_name=TestHouse"
          >
            <img src="/assets/images/arrow.gif" className="w-24" alt="Arrow" />
            <div className="tooltip-container">
              <img
                src="/assets/images/vh.png"
                className="w-40 hover:scale-105"
                alt="Virtual House"
              />
            </div>
            <img
              src="/assets/images/arrow.gif"
              className="w-24 rotate-180"
              alt="Arrow"
            />
          </a>
          <h1>
            CUSTOMERS FIND GOODS + SERVICES FAST +{' '}
            <span className="text-white px-2 hover:px-3 cursor-pointer hover:text-4xl bg-green-700 rounded-full">
              &gt;
            </span>
          </h1>
          <div className="flex pt-2 justify-evenly items-center">
            <div className="tooltip-container transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
              <img
                className="w-16 rounded-full"
                src="/assets/images/play_video.jpg"
                alt="Play Video"
              />
            </div>
            <div className="tooltip-container transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
              <img
                className="w-20 rounded-full"
                src="/assets/images/back.jpg"
                alt="Back"
              />
            </div>
            <div className="tooltip-container transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
              <img
                className="w-16 rounded-full"
                src="/assets/images/qmark.jpg"
                alt="Question Mark"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright ©
        2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default MyComponent;
