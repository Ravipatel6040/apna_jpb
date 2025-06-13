import React from 'react';
import Navbar from './components/Navbar';
import JobCard from './components/JobCard';
import RatingsCard from './components/RatingsCard';
import AboutInterviewCard from './components/AboutInterviewCard';
import ShareCard from './components/ShareCard';
import LockedCheatsheets from './components/LockedCheatsheets';
import "./App.css"
import InterviewPrepTabs from './components/InterviewPrepTabs';
import InterviewBenefits from './components/InterviewBenefits';
import InterviewDisclaimer from './components/InterviewDisclaimer';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex flex-col lg:flex-row items-start mt-5 px-4 sm:px-6 lg:px-8 gap-4">
        <JobCard />
        <RatingsCard />
      </div>

      <div className="flex flex-col lg:flex-row items-start mt-4 px-4 sm:px-6 lg:px-8 gap-4">
        <AboutInterviewCard />
        <ShareCard />
      </div>

      <LockedCheatsheets />
      <InterviewPrepTabs/>
      <InterviewBenefits/>
      <InterviewDisclaimer/>
      <Footer/>

    </div>
  );
};

export default App;
