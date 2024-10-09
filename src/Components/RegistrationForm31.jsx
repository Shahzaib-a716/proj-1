import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RegistrationForm31 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { country, province, city } = location.state || {};

  const [services, setServices] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddService = () => {
    if (inputValue && !services.includes(inputValue)) {
      setServices([...services, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveService = (service) => {
    setServices(services.filter(s => s !== service));
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
    >
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-0 text-center">
          <div className="flex bg-orange-500 items-center">
            <img className="w-20 rounded-full cursor-pointer" src="/assets/images/back.png" alt="Back" onClick={handleBackClick} />
            <div className="w-full">
              <h1 className="font-bold text-xl md:text-2xl">FREE BUSINESS REGISTRATION</h1>
              <h1 className="m-0 pl-1 pr-1 text-white text-sm md:text-base">
                IF YOU DO NOT SEE YOUR AREA, THEN{' '}
                <a className="font-bold text-yellow-300 text-base md:text-xl cursor-pointer" href="https://hm.ez123.eu/ContactUs">
                  CLICK HERE
                </a>
              </h1>
            </div>
          </div>
          <h1 className="flex font-extrabold justify-center items-center text-center bg-yellow-500 text-4xl">
            NO CREDIT CARD INFORMATION WILL BE ASKED
          </h1>
        </div>

        <div className="bg-white ml-10 pl-[1] bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-5xl font-bold text-white bg-gradient-to-r from-red-500 to-red-800 py-3 rounded-lg">
              FREE BUSINESS REGISTRATION
            </h1>
          </div>

          <form className="space-y-4">
            {/* Email Input */}
            <div className="relative group flex items-center">
              <span className="font-bold text-4xl mx-2">A</span>
              <input
                type="email"
                placeholder="@"
                style={{ fontSize: '1.5rem' }} 
                className="flex-1 p-6 pl-6 rounded-3xl bg-white bg-opacity-[0.2] border border-x-4 border-y-4 border-yellow-500 focus:outline-none placeholder-black font-extrabold text-center placeholder:font-extrabold placeholder:text-5xl"
              />
              <span className="absolute hidden group-hover:flex mt-3 group-hover:items-center -top-2 left-full w-full px-6 py-6 bg-yellow-500 rounded-3xl text-center font-extrabold text-black !text-3xl">
                Enter your email address
              </span>
            </div>

            {/* Country Input */}
            <div className="relative group flex items-center">
              <span className="font-bold text-4xl mx-2">B</span>
              <input
                type="text"
                value={country || ''} // Use state to fill country
                placeholder="Country"
                style={{ fontSize: '1.5rem' }} 
                className="flex-1 p-6 pl-6 rounded-3xl bg-white bg-opacity-[0.2] border border-x-4 border-y-4 border-yellow-500 focus:outline-none placeholder-black placeholder:font-bold placeholder:text-3xl"
                readOnly // Make it read-only if you want to prevent changes
              />
              <span className="absolute hidden group-hover:flex mt-3 group-hover:items-center -top-2 left-full w-full px-6 py-6 bg-yellow-500 rounded-3xl text-center font-extrabold text-black !text-3xl">
                Enter your country
              </span>
            </div>

            {/* Province Input */}
            <div className="relative group flex items-center">
              <span className="font-bold text-4xl mx-2">C</span>
              <input
                type="text"
                value={province || ''} // Use state to fill province
                placeholder="Province or State"
                style={{ fontSize: '1.5rem' }} 
                className="flex-1 p-6 pl-6 rounded-3xl bg-white bg-opacity-[0.2] border border-x-4 border-y-4 border-yellow-500 focus:outline-none placeholder-black placeholder:font-bold placeholder:text-3xl"
                readOnly // Make it read-only if you want to prevent changes
              />
              <span className="absolute hidden group-hover:flex mt-3 group-hover:items-center -top-2 left-full w-full px-6 py-6 bg-yellow-500 rounded-3xl text-center font-extrabold text-black !text-3xl">
                Enter your Province or State
              </span>
            </div>

            {/* City Input */}
            <div className="relative group flex items-center">
              <span className="font-bold text-4xl mx-2">D</span>
              <input
                type="text"
                value={city || ''} // Use state to fill city
                placeholder="City"
                style={{ fontSize: '1.5rem' }} 
                className="flex-1 p-6 pl-6 rounded-3xl bg-white bg-opacity-[0.2] border border-x-4 border-y-4 border-yellow-500 focus:outline-none placeholder-black placeholder:font-bold placeholder:text-3xl"
                readOnly // Make it read-only if you want to prevent changes
              />
              <span className="absolute hidden group-hover:flex mt-3 group-hover:items-center -top-2 left-full w-full px-6 py-6 bg-yellow-500 rounded-3xl text-center font-extrabold text-black !text-3xl">
                Enter your city
              </span>
            </div>

            {/* Service Input */}
            <div className="relative group flex items-center">
              <span className="font-bold text-4xl mx-2">H</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddService();
                    e.preventDefault();
                  }
                }}
                placeholder="Your Service"
                style={{ fontSize: '1.5rem' }} 
                className="flex-1 p-6 pl-6 rounded-3xl bg-white bg-opacity-[0.2] border border-x-4 border-y-4 border-yellow-500 focus:outline-none placeholder-black placeholder:font-bold placeholder:text-3xl"
              />
              <span className="absolute hidden group-hover:flex mt-3 group-hover:items-center -top-2 left-full w-full px-6 py-6 bg-yellow-500 rounded-3xl text-center font-extrabold text-black !text-3xl">
                Enter the service you offer
              </span>
            </div>

            <div className="relative group flex items-center">
              <span className="font-bold text-4xl mx-2">I</span>
              <input
                type="text"
                placeholder="Username"
                style={{ fontSize: '1.5rem' }} 
                className="flex-1 p-6 pl-6 rounded-3xl bg-white bg-opacity-[0.2] border-x-4 border-y-4 border-yellow-500  placeholder-black placeholder:font-bold placeholder:text-3xl"
              />
              <span className="absolute hidden group-hover:flex mt-3 group-hover:items-center -top-2 left-full w-full px-6 py-6 bg-yellow-500 rounded-3xl text-center font-extrabold text-black !text-3xl">
                Enter your username
              </span>
            </div>

            <div className="relative group flex items-center">
              <span className="font-bold text-4xl mx-2">J</span>
              <input
                type="password"
                placeholder="PIN Code"
                style={{ fontSize: '1.5rem' }} 
                className="flex-1 p-6 rounded-3xl bg-white bg-opacity-[0.2] border-x-4 border-y-4 border-yellow-500 focus:outline-none placeholder-black placeholder:font-bold placeholder:text-3xl"
              />
              <span className="absolute hidden group-hover:flex mt-3 group-hover:items-center -top-2 left-full w-full px-8 py-6 bg-yellow-500 rounded-3xl  text-center font-extrabold text-black !text-3xl">
                Enter your PIN code
              </span>
            </div>



            {/* Service Display Section */}
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                  <span>{service}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveService(service)}
                    className="text-white font-bold"
                  >
                    x
                  </button>
                </span>
              ))}
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-between items-center mt-6">
              <img src="/assets/images/back.png" alt="Back" className="w-21 h-20 cursor-pointer" onClick={handleBackClick} />
              <img src="/assets/images/ok.png" alt="OK" className="w-21 h-20 cursor-pointer" />
              <img src="/assets/images/reject.png" alt="Reject" className="w-21 h-20 cursor-pointer" />
            </div>
          </form>
        </div>

        <footer className="text-center pt-1 w-full text-xl text-white font-bold" style={{ textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px' }}>
          All Rights Reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
        </footer>
      </div>
    </div>
  );
};

export default RegistrationForm31;
