import React from 'react';

const Step3 = () => {
  return (
    <div id="step3" className="p-1 md:p-4 w-full min-h-screen">
      <div className="flex  gap-4 items-end border-b-2">
        <a href="#step2" className="flex flex-col gap-2 justify-center items-center">
          <img className="w-10" src="/assets/images/arrow.webp" alt="" />
          <h1 className="border-2 text-center border-b-0 rounded-t-xl w-16 h-10 bg-gradient-to-b from-[#FFCC00] to-[#FF6600] md:text-3xl font-extrabold text-white">
            3
          </h1>
        </a>
        <div className="flex justify-center items-center">
          <h1 className="md:text-3xl font-extrabold text-yellow-500">
            SEND UP TO 4 DIFFERENT TYPES OF MESSAGES AND
          </h1>
        </div>
      </div>

      <div className="grid grid-rows-2 gap-3 w-full py-3">
        <div className="grid grid-cols-3 gap-3">
          <img className="cursor-none" src="/assets/images/photo.webp" alt="" />
          <img className="cursor-none" src="/assets/images/video.webp" alt="" />
          <img className="cursor-none" src="/assets/images/voice.webp" alt="" />
        </div>
        <div>
          <img className="cursor-none" src="/assets/images/text.webp" alt="" />
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="flex bg-white items-center px-4 py-2 rounded-t-xl bg-opacity-80 bg-gradient-to-b from-[#A3A3A3] to-[#636363]">
          <h1 className="text-2xl md:text-3xl font-bold">Type What You Need !</h1>
        </div>
        <div>
          <input
            multiple
            type="file"
            className="hidden"
            accept="video/*,image/*"
          />
          <div className="flex flex-col justify-center items-center">
            <textarea
              autoFocus
              className="resize rounded-3xl m-2 mx-4 w-full border-4 border-blue-500 text-3xl hover:text-4xl text-sky-600"
              placeholder="Type Here !"
              aria-label="Search"
              aria-describedby="search-addon"
            ></textarea>
            <div className="flex md:mb-5 md:mt-10 w-full md:w-auto gap-4 md:gap-14 justify-center items-center md:rounded-xl bg-yellow-400 text-white">
              <div className="tooltip-container">
                <img className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-20 rounded-full" src="/assets/images/upload.png" alt="" />
              </div>
              <div className="tooltip-container">
                <img className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-20 rounded-full" src="/assets/images//microphone.png" alt="" />
              </div>
              <div className="tooltip-container">
                <img className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-20 rounded-full" src="/assets/images/rec2.png" alt="" />
              </div>
              <div className="tooltip-container">
                <img className="opacity-20 cursor-not-allowed w-20 rounded-full" src="/assets/images/ok.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-2 mt-3 md:flex-row justify-center gap-2 mx-2 mb-24 md:mb-0"></div>
            <canvas className="hidden w-full rounded-full border-2 border-blue-600" id="audioStream"></canvas>
            <div className="hidden">
              <video id="videoStream" className="min-h-full" autoPlay>
                Your browser does not support this feature
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
