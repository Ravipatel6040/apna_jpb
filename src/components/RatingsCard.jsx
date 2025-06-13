import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaHeart, FaStar } from 'react-icons/fa';

const RatingsCard = () => {
  return (
    <div className="max-w-xs w-full bg-white rounded-2xl shadow-md border border-purple-100 p-4 ml-0 lg:ml-[50px]">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Ratings & Reviews</h3>

      {/* Ratings Row */}
      <div className="flex justify-between items-center text-center mb-4">
        {/* Preps */}
        <div className="flex flex-col items-center text-sm text-gray-800">
          <div className="flex items-center gap-1 text-purple-600">
            <FiPhoneCall className="text-lg" />
            <span className="font-semibold text-black">246</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Preps</span>
        </div>

        {/* Helpful */}
        <div className="flex flex-col items-center text-sm text-gray-800">
          <div className="flex items-center gap-1 text-purple-600">
            <FaHeart className="text-lg" />
            <span className="font-semibold text-black">82%</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Found helpful</span>
        </div>

        {/* Reviews */}
        <div className="flex flex-col items-center text-sm text-gray-800">
          <div className="flex items-center gap-1 text-purple-600">
            <FaStar className="text-lg" />
            <span className="font-semibold text-black">81</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Reviews</span>
        </div>
      </div>

      <hr className="border-t border-gray-200 mb-3" />

      {/* Slot Info */}
      <p className="text-center text-sm text-purple-600 mb-3">10 mins interview slot available</p>

      {/* Button */}
      <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:brightness-110 transition duration-200">
        Start Interview
      </button>
    </div>
  );
};

export default RatingsCard;
