import React, { useState, useEffect } from 'react';

const CustomLayout = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  // Format the date
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',  // "Friday"
    year: 'numeric',  // "2024"
    month: 'long',    // "October"
    day: 'numeric',   // "22"
  });

  // Format the time
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="bg-black min-h-screen flex flex-col items-center p-5">
      {/* Top Logo and Title */}
      <div className="text-center mb-10">
        <img src="/assets/images/logo.webp" alt="Logo" className="w-50 h-52 mx-auto" />
        <h1 className="text-white text-4xl font-bold mb-8">Trades Persons Perfect Business System</h1>
      </div>

      {/* New Icons Container */}
      <div className="flex space-x-4 mb-1">
      <img src="/assets/images/button bottom 9.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/icon2.webp" alt="Icon 2" className="w-16 h-16" />
        <img src="/assets/images/icon3.webp" alt="Icon 3" className="w-16 h-16" />
      </div>

      {/* Main Content Area */}
      <div className="relative bg-gray-500 p-4 border-4 border-gray-300">
        {/* Left Side Icons */}
        <div className="absolute left-[-65px] top-[-20px] ">
          <img src="/assets/images/button right blank.webp" alt="Icon 1" className="w-16 h-60" />
          <img src="/assets/images/button right blank.webp" alt="Icon 2" className="w-16 h-52" />
          <img src="/assets/images/button right blank.webp" alt="Icon 3" className="w-16 h-56" />
          <img src="/assets/images/button virtual house back.webp" alt="Icon 3" className="w-17 h-16" />
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-[-65px] top-[-70px]">
          <button onClick={() => handleClick('/home')}>
            <img src="/assets/images/button right call.webp" className="w-16 h-16" />
            <img src="assets/images/button right pizza.webp" alt="Icon 4" className="w-16 h-32" />
          </button>
          <img src="/assets/images/button right countdown.webp" className="w-16 h-32" />
          <img src="/assets/images/button right brain.webp" className="w-16 h-32" />
          <img src="assets/images/button right training.webp" className="w-16 h-32" />
          <img src="/assets/images/button right blank.webp" className="w-14 h-32" />
          <img src="/assets/images/button help dark yellow.webp" className="w-16 h-17" />
        </div>

        {/* Display Area */}
        <div className="bg-gray-200 h-[400px] w-[800px] border-4 border-gray-300 relative">
          <img
            src="/assets/images/background.webp"
            alt="Your Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Date and Time */}
      <div className="text-white text-2xl text-bold mt-5">
        {currentTime.toLocaleString()}
      </div>

      {/* Bottom Icons */}
      <div className="grid grid-cols-8 gap-4 mt-5">
        {/* First row of icons */}
        <img src="/assets/images/button bottom 1.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button2.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 3.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 4.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 5.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 6.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 7.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 8.webp" alt="Icon 9" className="w-17 h-16" />
        {/* Add other icons */}
      </div>

      <div className="grid grid-cols-8 gap-4 mt-3">
        {/* Second row of icons */}
        <img src="/assets/images/button bottom 9.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 10.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 11.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 12.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 13.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 14.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 15.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom 16.webp" alt="Icon 9" className="w-17 h-16" />
        {/* Add other icons */}
      </div>

      <div className="grid grid-cols-6 mt-2">
        {/* Footer row of icons */}
        <img src="/assets/images/button bottom setup.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button bottom web.webp" alt="Icon 9" className="w-18 h-16" />
        <img src="/assets/images/button bottom movie maker.webp" alt="Icon 9" className="w-18 h-16" />
        <img src="/assets/images/button bottom graphic designer.webp" alt="Icon 9" className="w-18 h-16" />
        <img src="/assets/images/button bottom parcel.webp" alt="Icon 9" className="w-18 h-16" />
        <img src="/assets/images/button bottom financial result.webp" alt="Icon 9" className="w-18 h-16" />
      </div>
    </div>
  );
};

export default CustomLayout;
