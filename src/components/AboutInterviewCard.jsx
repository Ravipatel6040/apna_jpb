import React from 'react';

const AboutInterviewCard = () => {
  return (
    <div className="w-full flex justify-start px-4 pt-4">
      <div className="w-full max-w-[893px] ml-4 sm:ml-[23px] rounded-xl p-6 sm:p-8 bg-white shadow-sm border border-gray-100">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          About this interview
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Get an opportunity to get interviewed for ICICI Bank’s Head of Field Sales.
          Together with technical questions, get insights about company values and culture.
        </p>
      </div>
    </div>
  );
};

export default AboutInterviewCard;
