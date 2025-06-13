import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const tabData = {
  Technical: [
    {
      question: 'Q. How do you drive sales in a competitive market?',
      answer:
        'I analyze market trends and customer needs to tailor sales strategies. Building strong client relationships and leveraging team strengths are key to outperforming competitors.',
    },
    {
      question: 'Q. What CRM tools have you used effectively?',
      answer:
        'I have extensively used Salesforce and Zoho CRM to track sales pipelines and customer interactions. These tools help optimize sales processes and improve customer engagement.',
    },
    {
      question: 'Q. How do you manage a large sales team?',
      answer:
        'I set clear goals, conduct regular training, and foster open communication. Empowering team members with resources and feedback drives performance and morale.',
    },
    {
      question: 'Q. Explain your approach to sales forecasting.',
      answer:
        'I combine historical data analysis with market insights to create accurate forecasts. Regular updates and adjustments ensure targets remain realistic and achievable.',
    },
  ],
  Behavioural: [
    {
      question: 'Q. Describe a time you led a sales turnaround.',
      answer:
        'Situation: Sales were declining in my region. Task: Reverse the negative trend. Action: Implemented targeted promotions and retrained the team. Result: Achieved a 20% sales increase within six months.',
    },
    {
      question: 'Q. How do you handle underperforming team members?',
      answer:
        'Situation: One team member missed targets consistently. Task: Improve their performance. Action: Provided coaching and set incremental goals. Result: They met targets within three months and improved confidence.',
    },
    {
      question: 'Q. Tell me about a conflict you resolved in your team.',
      answer:
        'Situation: Two team members disagreed on strategy. Task: Mediate and find resolution. Action: Facilitated open discussion and aligned goals. Result: Team collaboration improved, and sales increased.',
    },
    {
      question: 'Q. Give an example of meeting a tight sales deadline.',
      answer:
        'Situation: Needed to close deals before quarter-end. Task: Ensure timely sales closure. Action: Prioritized leads and motivated team for focused effort. Result: Exceeded sales targets despite tight deadline.',
    },
  ],
  'Mission-vision': [
    {
      question: 'Q. How do you align with ICICI Bank’s customer focus?',
      answer:
        'I prioritize understanding customer needs and delivering personalized solutions. This approach aligns with ICICI Bank’s commitment to customer-centric services and long-term relationships.',
    },
    {
      question: 'Q. What attracts you to ICICI Bank’s culture?',
      answer:
        'ICICI Bank’s emphasis on innovation, integrity, and teamwork resonates with me. I value a culture that encourages growth and ethical business practices.',
    },
    {
      question: 'Q. How would you contribute to ICICI Bank’s vision?',
      answer:
        'I aim to drive field sales growth by leveraging data-driven strategies and fostering strong client connections. This supports ICICI Bank’s vision of being a trusted financial partner.',
    },
    {
      question: 'Q. What does integrity mean in sales at ICICI Bank?',
      answer:
        'Integrity means being honest, transparent, and ethical in all transactions. It builds trust with customers and upholds ICICI Bank’s reputation in the market.',
    },
  ],
};

const InterviewPrepTabs = () => {
  const [activeTab, setActiveTab] = useState('Technical');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-[920px] ml-4 sm:ml-[23px] px-4 pt-0 pb-4">
      <div className="rounded-lg bg-purple-50 shadow-md p-4 sm:p-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null); // Reset on tab change
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-white text-purple-700 border-purple-500'
                  : 'bg-transparent text-gray-600 border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Question / Answer Accordion */}
        <div className="space-y-4">
          {tabData[activeTab].map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-sm border border-gray-200"
              >
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => toggleOpen(index)}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                    {item.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-purple-600" />
                  )}
                </div>
                {isOpen && (
                  <p className="mt-2 text-sm text-gray-700 transition-all duration-200 ease-in-out">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepTabs;
