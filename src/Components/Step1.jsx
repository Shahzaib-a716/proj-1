import React from 'react';

const BookingStep1 = () => {
  return (
    <div id="step1" className="p-1 bg-gray-900 md:p-4 w-full min-h-screen">
      <div className="flex w-full gap-4 items-end border-b-2">
        <a href="#" className="flex flex-col gap-2 justify-center items-center">
          <img className="w-10" src="/assets/images/arrow.webp" alt="Arrow" />
          <h1 className="border-2 text-center border-b-0 rounded-t-xl w-16 h-10 bg-gradient-to-b from-[#ff8282] to-[#ff0000] md:text-3xl font-extrabold text-white">1</h1>
        </a>
        <div className="flex shrink-0 justify-center items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-red-500">SELECT A DAY</h1>
        </div>
        <div className="flex shrink-0 -mb-2 justify-center items-center">
          <img className="w-20" src="/assets/images/calendar-icon.webp" alt="Calendar Icon" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="flex flex-col text-white">
          <div className="flex gap-2">
            <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#ff8282] to-[#ff0000]"></div>
            <h1>DAY IS BOOKED</h1>
          </div>
          <div className="flex gap-2">
            <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#4d9535] to-[#3E6B2B]"></div>
            <h1>AVAILABLE</h1>
          </div>
          <div className="flex gap-2">
            <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#FFCC00] to-[#FF6600]"></div>
            <h1>STILL AVAILABLE</h1>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <div className="flex gap-2">
            <img src="/assets/images/morning.webp" className="shrink-0 w-10" alt="Morning" />
            <h1>12:00AM - 11-59AM</h1>
          </div>
          <div className="flex gap-2">
            <img src="/assets/images/afternoon.webp" className="shrink-0 w-12 -ml-1" alt="Afternoon" />
            <h1 className="-ml-1">12:00PM - 05-59AM</h1>
          </div>
          <div className="flex gap-2">
            <img src="/assets/images/evening.webp" className="shrink-0 w-10" alt="Evening" />
            <h1>06:00PM - 11-59PM</h1>
          </div>
        </div>
        <div className="flex flex-col justify-end text-white">
          <h1 className="text-center text-resp rounded-t-xl bg-gradient-to-b from-[#FFCC00] to-[#FF6600] p-2">October</h1>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-12">
        <div className="flex justify-center items-center text-3xl hover:text-6xl rounded-l-xl mr-2 bg-gradient-to-r from-[#F5F5F5] to-[#DADADA]">
          <img src="/assets/images/arrow.webp" className="-rotate-90" alt="Arrow" />
        </div>
        <div className="col-span-10 grid grid-cols-7">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="flex justify-center text-white items-center rounded-t-lg text-xl bg-gradient-to-b from-[#A3A3A3] to-[#636363] font-bold border-2 border-white">{day}</div>
          ))}
          <a className="group bg-white border-2 border-white cursor-not-allowed"></a>
          {[...Array(23)].map((_, index) => (
            <a key={index} className="group bg-white border-2 border-white cursor-not-allowed">
              <h1 className="text-white text-center rounded-t-lg text-3xl bg-gradient-to-b from-[#F5F5F5] to-[#DADADA] font-bold">{index + 1}</h1>
              <div className="flex flex-col h-10">
                <div className="basis-1/3 bg-gradient-to-b from-[#F5F5F5] to-[#DADADA]"></div>
                <div className="basis-1/3 bg-gradient-to-b from-[#F5F5F5] to-[#DADADA]"></div>
                <div className="basis-1/3 bg-gradient-to-b from-[#F5F5F5] to-[#DADADA]"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingStep1;
