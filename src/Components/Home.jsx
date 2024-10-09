import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // useNavigate replaces useHistory

  // Scroll down to the middle of the page when the component loads
  useEffect(() => {
    const scrollToMiddle = () => {
      // Calculate the middle of the document and scroll there
      const middleOfPage = document.documentElement.scrollHeight / 2;
      window.scrollTo({
        top: middleOfPage,
        behavior: 'smooth',
      });
    };

    // Trigger the scroll as soon as the component mounts
    scrollToMiddle();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form behavior (page refresh)

    // Only navigate if an email is entered
    if (email.trim()) {
      console.log('Navigating to EmailNotRecognized page');
      navigate('/EmailNotRecognized', { state: { email } });
    } else {
      console.log('Email is empty');
    }
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
      <div className="flex flex-col gap-4 md:gap-3 justify-center items-center text-center">
        <h1
          className="text-2xl text-white mt-4 mb-3 md:text-4xl font-extrabold w-full"
          style={{
            textShadow: 'rgba(0, 0, 0, 0.4) 0.08em 0.08em 0.08em',
            fontFamily: '"Exo 2", Helvetica, Arial, Lucida, sans-serif',
          }}
        >
          I am living proof: if you are organized &amp; you have my system, you can accomplish almost anything! Click on me to see the proof!
        </h1>

        <div className="flex flex-col w-full justify-center items-center relative">
          <div className="flex justify-center items-center gap-12 md:gap-32 absolute top-[41%] md:top-[56%] lg:top-[53%]">
            <a href="/LookAround">
              <div className="tooltip-container">
                <img
                  className="w-24 md:w-32 hover:-translate-y-1 hover:scale-110 duration-300"
                  src="/assets/images/eyeballs.gif"
                  alt="Eyeballs"
                />
              </div>
            </a>
            <a href="/Flag1">
              <div className="w-16 md:w-24 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 tooltip-container">
                <img src="/assets/images/en.png" className="rounded-xl" alt="Language Icon" />
              </div>
            </a>

            <a href="/FreeRegistration1">
              <div className="tooltip-container">
                <img
                  className=" w-24 md:w-32 hover:-translate-y-1 hover:scale-110 duration-300"
                  src="/assets/images/clipboard.webp"
                  alt="Clipboard"
                />
              </div>
            </a>
          </div>

          <img className="md:w-4/6" src="/assets/images/newlanding2.webp" alt="Landing Banner" />

          <a
            className="flex md:w-1/3 -mt-28 md:-mt-60 flex-col justify-center items-center hover:-translate-y-1 hover:scale-105 duration-300"
            href=""
          >
            <div className="tooltip-container">
              <img src="/assets/images/les.webp" alt="LesTheHandyman" />
            </div>
          </a>
        </div>

        {/* Input Field */}
        <div className="overflow-hidden flex flex-col md:gap-6 items-center">
          {/* Add the form submit handler here */}
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
            {/* Hidden submit button to allow form submission on "Enter" press */}
            <button type="submit" style={{ display: 'none' }}></button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center pt-1 w-full text-xl text-white font-bold" style={{ textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px' }}>
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
}

export default Home;
