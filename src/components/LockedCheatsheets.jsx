import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/solid';

const LockedCheatsheets = () => {
  return (
    <div className="px-4 pt-0 pb-4 flex items-start justify-start">
      <div className="w-full max-w-[893px] ml-4 sm:ml-[23px] rounded-xl shadow-xl p-4 sm:p-6 relative bg-gradient-to-r from-[#f9eaff] via-[#e8f4ff] to-[#d2efff]">

        {/* Overlay Lock */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-none">
          <LockClosedIcon className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600 mb-2" />
          <p className="text-base sm:text-lg font-semibold text-purple-700">Locked</p>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            This will get unlocked after your interview is completed.
          </p>
        </div>

        {/* Header */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
          Personalised Interview Cheatsheets
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">Based on your profile</p>

        {/* Card Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 filter blur-sm pointer-events-none">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 h-[160px] overflow-hidden flex flex-col justify-between">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
              Question: Tell me about a time when you had to solve a compl...
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-snug">
              In my previous role at XYZ Corp, I was tasked with optimizing our onboarding process... Read more
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 h-[160px] overflow-hidden flex flex-col justify-between">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
              Question: How would you design a distributed cache system?
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-snug">
              Focus on key aspects like consistency, availability, and partition tolerance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 h-[160px] overflow-hidden flex flex-col justify-between">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
              Question: How would you design a distributed cache system?
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-snug">
              When designing a distributed cache system, I would focus on key aspects like consistency, availability...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockedCheatsheets;
