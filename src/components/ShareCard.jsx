import React from 'react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const ShareCard = () => {
  const shareLink = 'https://l.apna.co/nmtJXAoeaUb';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl p-4 shadow-sm border border-gray-200 text-center ml-auto">
      <h1 className="text-sm font-semibold text-gray-900 mb-3">Share with Friends</h1>

      <div className="flex justify-center items-center gap-5 mb-4 text-[32px] text-gray-800">
        <FaWhatsapp className="text-green-500 hover:scale-110 transition" />
        <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
        <FaLinkedinIn className="text-blue-700 hover:scale-110 transition" />
        <FaXTwitter className="hover:scale-110 transition" />
      </div>

      <hr className="mb-3 border-t border-gray-200" />

      <p className="text-xs text-blue-600 mb-2 font-medium">or copy link</p>

      <div className="flex items-center justify-between gap-3 border border-purple-300 rounded-lg px-3 py-1 bg-white">
        <input
          type="text"
          readOnly
          value={shareLink}
          className="flex-1 text-sm text-gray-700 bg-white outline-none"
        />
        <button
          onClick={handleCopy}
          className="text-purple-600 font-semibold px-4 py-1 text-sm hover:bg-purple-50"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShareCard;
