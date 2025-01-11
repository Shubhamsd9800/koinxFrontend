import React from 'react'

const TabNavigation = () => {
  return (
    <div className="border-b-2 border-gray-300 overflow-x-auto">
      <nav className="-mb-px flex space-x-8 min-w-max px-1">
        <a href="#" className="whitespace-nowrap border-b-2 border-blue-600 pb-4 px-1 text-blue-600">
          Overview
        </a>
        <a href="#" className="whitespace-nowrap border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
          Fundamentals
        </a>
        <a href="#" className="whitespace-nowrap border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
          News Insights
        </a>
        <a href="#" className="whitespace-nowrap border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
          Sentiments
        </a>
        <a href="#" className="whitespace-nowrap border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
          Team
        </a>
        <a href="#" className="whitespace-nowrap border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
          Technicals
        </a>
        <a href="#" className="whitespace-nowrap border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700 hover:border-gray-300">
          Tokenomics
        </a>
      </nav>
    </div>
  )
}

export default TabNavigation;
