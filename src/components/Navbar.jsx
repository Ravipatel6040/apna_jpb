import React, { useState } from 'react';
import { FiChevronDown, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-4 flex items-center justify-between flex-wrap relative">
      {/* Left Side: Hamburger + Logo */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="md:hidden text-2xl"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
        <img
          src="/Images/apna-time-icon.png"
          alt="apna logo"
          className="w-14 h-14 rounded-xl mr-4"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium">


        <div className="relative group">
          {/* Trigger */}
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="hover:text-green-600 text-base sm:text-lg">Jobs</span>
            <FiChevronDown className="text-[18px] mt-0.5" />
          </div>

          {/* Dropdown menu */}
          <div className="absolute left-0 top-full mt-2 w-[500px] bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
            <div className="grid grid-cols-2 divide-x divide-gray-300 text-[15px] sm:text-base text-gray-800">

              {/* Left column */}
              <div className="space-y-2 px-6 py-5">
                <div className="hover:text-green-600 cursor-pointer">Work From Home Jobs</div>
                <div className="hover:text-green-600 cursor-pointer">Part Time Jobs</div>
                <div className="hover:text-green-600 cursor-pointer">Freshers Jobs</div>
                <div className="hover:text-green-600 cursor-pointer">Jobs for women</div>
                <div className="hover:text-green-600 cursor-pointer">Full Time Jobs</div>
                <div className="hover:text-green-600 cursor-pointer">Night Shift Jobs</div>
              </div>

              {/* Right column */}
              <div className="space-y-2 px-6 py-5">
                <div
                  className="relative group"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {/* Trigger */}
                  <div className="flex items-center justify-between cursor-pointer group-hover:text-green-600 text-lg">
                    <span>Jobs By City</span>
                    <FiChevronRight className="text-[20px] group-hover:text-green-600 ml-1" />
                  </div>


                  {/* Dropdown */}
                  {isOpen && (
                    <div className="absolute top-full left-[50px] bg-white shadow-lg rounded-xl p-6 w-[500px] h-[370px] z-50 grid grid-cols-2 gap-x-8 text-base overflow-auto">
                      <div className="space-y-2">
                        <p>Jobs in Agra</p>
                        <p>Jobs in Ahmednagar</p>
                        <p>Jobs in Aligarh</p>
                        <p>Jobs in Asansol</p>
                        <p>Jobs in Bareilly</p>
                        <p>Jobs in Bengaluru</p>
                        <p>Jobs in Bhilai</p>
                        <p>Jobs in Bhubaneswar</p>
                      </div>
                      <div className="space-y-2">
                        <p>Jobs in Ahmedabad</p>
                        <p>Jobs in Ajmer</p>
                        <p>Jobs in Amritsar</p>
                        <p>Jobs in Aurangabad</p>
                        <p>Jobs in Belagavi</p>
                        <p>Jobs in Bhavnagar</p>
                        <p>Jobs in Bhopal</p>
                        <p>Jobs in Bikaner</p>
                      </div>
                      <div className="col-span-2 pt-4">
                        <button className="border border-green-600 text-green-600 rounded-md px-4 py-2 text-base hover:bg-green-100">
                          View All 74 Cities
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between cursor-pointer group hover:text-green-600">
                  <span>Jobs By Department</span>
                  <FiChevronRight className="text-[16px] group-hover:text-green-600" />
                </div>
                <div className="flex items-center justify-between cursor-pointer group hover:text-green-600">
                  <span>Jobs By Company</span>
                  <FiChevronRight className="text-[16px] group-hover:text-green-600" />
                </div>
                <div className="flex items-center justify-between cursor-pointer group hover:text-green-600">
                  <span>Jobs By Qualification</span>
                  <FiChevronRight className="text-[16px] group-hover:text-green-600" />
                </div>
                <div className="flex items-center justify-between cursor-pointer group hover:text-green-600">
                  <span>Others</span>
                  <FiChevronRight className="text-[16px] group-hover:text-green-600" />
                </div>
              </div>


            </div>
          </div>
        </div>


        <span className="text-green-600 hover:text-green-700 flex items-center gap-1 cursor-pointer">
          Job Prep
          <span className="text-xs bg-orange-500 text-white px-1.5 rounded">NEW</span>
        </span>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Contests</span>
          <span className="text-xs bg-orange-500 text-white px-1.5 rounded">NEW</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Degree</span>
          <span className="text-xs bg-orange-500 text-white px-1.5 rounded">NEW</span>
        </div>
        <div className="group flex items-center gap-1 cursor-pointer">
          <span className="hover:text-green-600">Resume Tools</span>
          <FiChevronDown className="text-[18px] mt-0.5" />
        </div>
      </div>

      {/* Right Side: Search (Desktop) + Login */}
      <div className="flex items-center space-x-2 shrink-0 min-w-fit">
        {/* Desktop Search */}
        <div className="hidden md:block relative mr-2">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search jobs by title, company..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-[20px] text-sm focus:outline-none"
          />
        </div>

        <span className="text-green-700 text-xs md:text-sm cursor-pointer hover:text-green-800">
          Employer Login
        </span>
        <button className="bg-green-700 text-white px-4 py-1.5 md:px-5 md:py-2 rounded text-xs md:text-sm border-2 border-green-700 hover:bg-white hover:text-green-700 transition duration-200">
          Candidate Login
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden z-50">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="hover:text-green-600">Jobs</span>
            <FiChevronDown className="text-[18px]" />
          </div>
          <span className="text-green-600 hover:text-green-700 flex items-center gap-1 cursor-pointer">
            Job Prep
            <span className="text-xs bg-orange-500 text-white px-1.5 rounded">NEW</span>
          </span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Contests</span>
            <span className="text-xs bg-orange-500 text-white px-1.5 rounded">NEW</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Degree</span>
            <span className="text-xs bg-orange-500 text-white px-1.5 rounded">NEW</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="hover:text-green-600">Resume Tools</span>
            <FiChevronDown className="text-[18px]" />
          </div>

          {/* Search Bar (Mobile) */}
          <div className="relative mt-2">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search jobs by title, company..."
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-[20px] text-sm focus:outline-none"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
