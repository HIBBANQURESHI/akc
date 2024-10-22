import React, { useState } from 'react';

const Content = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(0);

  const isMultipleSections = sections.length > 1;

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white shadow-lg mb-20 sm:p-6 md:p-8">
      <div className="w-full p-4 space-y-8 bg-white rounded-lg shadow-lg max-w-7xl">
        {/* Tabs Section */}
        {isMultipleSections && (
          <div className="flex justify-center space-x-4 overflow-x-auto whitespace-nowrap">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`py-2 px-4 rounded-lg text-white ${
                  activeTab === index ? 'bg-yellow-400' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-1 p-10 flex items-center gap-8 lg:grid-cols-2">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-2xl font-bold text-black sm:text-3xl">{sections[activeTab].title}</h2>
            <h3 className="mt-2 text-lg text-gray-700 sm:text-xl">{sections[activeTab].subtitle}</h3>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">{sections[activeTab].content}</p>

            <ul className="mt-6 space-y-2">
              {sections[activeTab].listItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  - {item}
                </li>
              ))}
            </ul>

            <button className="px-3 py-4 mx-3 mt-6 text-black bg-yellow-400 rounded-lg hover:bg-yellow-500">
              {sections[activeTab].buttonText}
            </button>
          </div>

          {/* Right side - Image */}
          <div className="flex w-100 items-center justify-center">
            <img
              src={sections[activeTab].image}
              alt={sections[activeTab].title}
              className="w-100 h-70 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
