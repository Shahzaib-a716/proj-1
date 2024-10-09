import React, { useState } from 'react';

function YourComponent() {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggle = (action) => {
    if (action === 'minimize') {
      setIsMinimized(true);
    } else {
      setIsMinimized(false);
    }
  };

  return (
    <div className={`min-h-screen bg-day bg-no-repeat bg-center bg-cover flex flex-col items-center gap-3 p-1 font-arial font-bold antialiased ${isMinimized ? 'scale-75' : 'scale-100'} transition-transform duration-300`}>
      {/* Language Selector */}
      <div className="dropdown flex items-center gap-3">
        <img
          data-te-toggle="tooltip"
          data-te-placement="bottom"
          data-te-ripple-init
          data-te-ripple-color="light"
          title="Select Your Language"
          src="/assets/images/en.png"
          className="w-8 rounded-3xl"
          alt="English"
        />
        <div className="dropdown-menu opacity-90">
          <div className="flex bg-white p-0 w-36 justify-start items-center text-xl rounded gap-3 hover:ml-3">
            <img src="/assets/images/de.png" className="w-8 rounded" alt="Deutsch" />
            <h1>Deutsch</h1>
          </div>
          <div className="flex bg-white p-0 w-36 justify-start items-center text-xl rounded gap-3 hover:ml-3">
            <img src="/assets/images/fr.png" className="w-8 rounded" alt="Française" />
            <h1>Française</h1>
          </div>
          <div className="flex bg-white p-0 w-36 justify-start items-center text-xl rounded gap-3 hover:ml-3">
            <img src="/assets/images/hu.png" className="w-8 rounded" alt="Magyar" />
            <h1>Magyar</h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center pl-1 pr-1 md:w-1/2 w-full bg-white rounded-full gap-1">
        <button className="shrink-0">
          <img
            data-te-toggle="tooltip"
            data-te-placement="bottom"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Type by voice"
            className="w-8 rounded-3xl"
            src="/assets/images/microphone.png"
            alt="Microphone"
          />
        </button>
        <input
          type="search"
          id="searchInput"
          className="rounded-3xl w-full border-none hover:border-transparent text-center text-xl text-sky-600"
          placeholder="Type In What You Are Looking For"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <img
          data-te-toggle="tooltip"
          data-te-placement="bottom"
          data-te-ripple-init
          data-te-ripple-color="light"
          title="Search"
          className="w-20 rounded hover:scale-110"
          src="/assets/images/search.png"
          alt="Search"
        />
      </div>

      {/* Zoom Controls */}
      <div className="flex gap-2">
        <img
          onClick={() => handleToggle('maximize')}
          data-te-toggle="tooltip"
          data-te-placement="bottom"
          data-te-ripple-init
          data-te-ripple-color="light"
          title="Increase Screen"
          src="/assets/images/plus.png"
          className="w-6 rounded-xl cursor-pointer"
          alt="Increase"
        />
        <img
          onClick={() => handleToggle('minimize')}
          data-te-toggle="tooltip"
          data-te-placement="bottom"
          data-te-ripple-init
          data-te-ripple-color="light"
          title="Decrease Screen"
          src="/assets/images/minus.png"
          className="w-6 rounded-xl cursor-pointer"
          alt="Decrease"
        />
      </div>

      {/* Sidebar Icons */}
      <div className="basis-28 flex flex-col gap-3">
        <img src="/assets/images/1.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 1" />
        <img src="/assets/images/2.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 2" />
        <img src="/assets/images/3.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 3" />
        <img src="/assets/images/4.png" className="opacity-90 hover:opacity-100" alt="Icon 4" />
        <img src="/assets/images/5.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 5" />
        <img src="/assets/images/6.png" className="mb-1 opacity-90 hover:opacity-100" alt="Icon 6" />
        {/* Additional Icons */}
        <img src="/assets/images/7.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 7" />
        <img src="/assets/images/8.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 8" />
        <img src="/assets/images/9.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 9" />
        <img src="/assets/images/10.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 10" />
        <img src="/assets/images/11.png" className="mb-3 opacity-90 hover:opacity-100" alt="Icon 11" />
        <img src="/assets/images/12.png" className="mb-1 opacity-90 hover:opacity-100" alt="Icon 12" />
      </div>

      {/* Image Map */}
      <div className="relative flex justify-center">
        <img
          useMap="#map"
          className="h-auto max-w-full"
          src="/assets/images/testhouse.jpg"
          alt="VH"
        />
        <map name="map">
          <area
            className="cursor-pointer"
            coords="2,23,12,30,11,38,20,38,20,24,30,26,42,14,54,12,66,18,66,29,75,38,82,44,78,53,67,64,54,63,49,55,43,51,34,45,25,44,15,39"
            href="#"
            alt="Area"
          />
        </map>
      </div>
    </div>
  );
}

export default YourComponent;
