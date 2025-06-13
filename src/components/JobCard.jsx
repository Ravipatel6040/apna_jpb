import React from 'react';

const JobCard = () => {
  return (
    <div className="w-full max-w-[893px] mt-1 ml-4 sm:ml-6 lg:ml-8 pr-4">
      <div
        className="rounded-2xl p-6 min-h-[250px] flex items-center bg-gradient-to-r from-green-700 via-blue-600 to-purple-700 relative overflow-hidden"
      >
        {/* SVG curved white lines */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="waveLines"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 20 Q10 0 20 20"
                  stroke="white"
                  strokeWidth="0.1"
                  fill="transparent"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waveLines)" />
          </svg>
        </div>

        {/* Content */}
        <img
          src="/Images/icici-bank.webp"
          alt="ICICI Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-contain bg-white p-2 mr-4 relative z-10"
        />
        <div className="text-white relative z-10">
          <h2 className="text-xl sm:text-2xl font-semibold">Head of Field Sales</h2>
          <p className="text-sm sm:text-base mt-1 opacity-90">at ICICI Bank</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
