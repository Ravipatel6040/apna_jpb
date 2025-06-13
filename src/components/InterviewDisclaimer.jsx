import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/outline';

const InterviewDisclaimer = () => {
  return (
    <div className="w-full bg-[#f7edff] px-4 pt-0 pb-8 flex justify-start items-start">
      <div className="w-full max-w-[893px] ml-4 sm:ml-[23px] text-sm sm:text-base">
        {/* Lock Disclaimer */}
        <div className="flex items-start gap-2 text-gray-800 font-medium mb-2">
          <LockClosedIcon className="w-6 h-6 mt-[2px] text-black" />

          <p>
            This is a mock interview for practice purposes only. Your responses and feedback won't be shared with any
            <br /> recruiters.
          </p>
        </div>

        {/* AI Disclaimer */}
        <div className="flex items-center justify-between flex-wrap gap-2 text-sm sm:text-base text-purple-700 mt-10">

          <p>This page contains AI-generated content, which may occasionally be inaccurate or irrelevant.</p>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold border-[4px] border-purple-600 px-2.5 py-0.5 rounded-md text-purple-800 text-base">
              AI
              
            </span>
            <SparklesIcon className="w-5 h-5 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewDisclaimer;
