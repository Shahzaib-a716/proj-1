import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Flag1 from './Flag1'; // Import the FlagDisplay component

function Home() {
  const [email, setEmail] = useState('');
  const [selectedFlag, setSelectedFlag] = useState({ code: 'en', name: 'English' });
  const navigate = useNavigate();

  // Handler to update selected flag
  const handleSelectFlag = (name, imagePath) => {
    setSelectedFlag({ name, imagePath });
  };

  useEffect(() => {
    const scrollToMiddle = () => {
      const middleOfPage = document.documentElement.scrollHeight / 2;
      window.scrollTo({
        top: middleOfPage,
        behavior: 'smooth',
      });
    };
    scrollToMiddle();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      navigate('/EmailNotRecognized', { state: { email } });
    }
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
      {/* Integrate FlagDisplay */}
      <FlagDisplay onSelect={handleSelectFlag} />

      <div className="flex flex-col gap-4 md:gap-3 justify-center items-center text-center">
        <h1 className="text-2xl text-white mt-4 mb-3 md:text-4xl font-extrabold w-full" style={{
          textShadow: 'rgba(0, 0, 0, 0.4) 0.08em 0.08em 0.08em',
          fontFamily: '"Exo 2", Helvetica, Arial, Lucida, sans-serif',
        }}>
          I am living proof: if you are organized &amp; you have my system, you can accomplish almost anything! Click on me to see the proof!
        </h1>

        <div className="flex flex-col w-full justify-center items-center relative">
          <div className="flex justify-center items-center gap-12 md:gap-32 absolute top-[41%] md:top-[56%] lg:top-[53%]">
            <a href="/LookAround">
              <img className="w-24 md:w-32 hover:-translate-y-1 hover:scale-110 duration-300" src="/assets/images/eyeballs.gif" alt="Eyeballs" />
            </a>
            <div className="w-16 md:w-24 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
              <img src={selectedFlag.imagePath} className="rounded-xl" alt={`${selectedFlag.name} Language Icon`} />
            </div>
            <a href="/FreeRegistration1">
              <img className="w-24 md:w-32 hover:-translate-y-1 hover:scale-110 duration-300" src="/assets/images/clipboard.webp" alt="Clipboard" />
            </a>
          </div>
          <img className="md:w-4/6" src="/assets/images/newlanding2.webp" alt="Landing Banner" />

          <a className="flex md:w-1/3 -mt-28 md:-mt-60 flex-col justify-center items-center hover:-translate-y-1 hover:scale-105 duration-300" href="">
            <img src="/assets/images/les.webp" alt="LesTheHandyman" />
          </a>
        </div>

        <div className="overflow-hidden flex flex-col md:gap-6 items-center">
          <form className="rounded-3xl" onSubmit={handleSubmit}>
            <div className="flex justify-center mb-2 items-center gap-2 border-6 border-yellow-500 bg-yellow-500 rounded-3xl">
              <input
                className="border-gray-300 w-full dark:border-gray-700 bg-yellow-400 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-3xl border-none p-2 focus:outline-none text-center placeholder:text-4xl"
                id="email"
                type="email"
                placeholder="@"
                style={{ fontSize: '1.5rem' }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="on"
                autoFocus
              />
            </div>
            <button type="submit" style={{ display: 'none' }}></button>
          </form>
        </div>
      </div>

      <div className="text-center pt-1 w-full text-xl text-white font-bold" style={{ textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px' }}>
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
}

export default Home;
