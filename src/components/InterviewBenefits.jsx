import React from 'react';

const InterviewBenefits = () => {
  return (
    <div className="w-full flex justify-start px-4 py-6">
      <div className="w-full max-w-[893px] ml-4 sm:ml-[23px] rounded-xl p-6 sm:p-8 bg-gradient-to-r from-[#f9eaff] via-[#e8f4ff] to-[#d2efff] shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          After this interview, You'll get
        </h2>

        <div className="space-y-3">
          <div className="bg-white text-sm sm:text-base text-gray-800 px-4 py-3 rounded-lg shadow-sm">
            Get an Interview Score and Rating amongst all the candidates
          </div>
          <div className="bg-white text-sm sm:text-base text-gray-800 px-4 py-3 rounded-lg shadow-sm">
            Detailed Analysis and Feedback on how the interview went
          </div>
          <div className="bg-white text-sm sm:text-base text-gray-800 px-4 py-3 rounded-lg shadow-sm">
            Question wise tips to improve your answers and deliver next time
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewBenefits;
