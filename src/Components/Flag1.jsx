import React, { useState } from 'react';

const FlagDisplay = ({ onSelect }) => {
  const [tooltip, setTooltip] = useState('');

  const flags = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'tr', name: 'Turkish' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'fi', name: 'Finnish' },
    { code: 'el', name: 'Greek' },
    { code: 'it', name: 'Italian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ro', name: 'Romanian' },
    { code: 'sr', name: 'Serbian' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sv', name: 'Swedish' },
    { code: 'no', name: 'Norwegian' },
  ];

  const handleFlagClick = (flag) => {
    onSelect(flag.name, `/assets/images/flags/${flag.code}.webp`);
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
    >
      <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col gap-4 md:gap-3 justify-center items-center text-center">
          <div className="mt-16 mb-20 mx-6 grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-14 justify-center">
            {flags.map((flag, index) => (
              <div key={index} className="rounded-2xl">
                <div
                  className="tooltip-container relative"
                  onMouseEnter={() => setTooltip(flag.name)}
                  onMouseLeave={() => setTooltip('')}
                  onClick={() => handleFlagClick(flag)}
                >
                  <img
                    src={`/assets/images/flags/${flag.code}.webp`}
                    alt={`Flag of ${flag.name}`}
                    className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-32"
                  />
                  {tooltip === flag.name && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max bg-yellow-500 text-black rounded-2xl font-bold p-4 text-center">
                      {flag.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagDisplay;
