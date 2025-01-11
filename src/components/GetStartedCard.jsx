import React from 'react'
import Frame from "../assets/Frame.png"
import { FiArrowRight } from 'react-icons/fi';

const GetStartedCard = () => {
    return (
        <div className="bg-blue-600 w-full sm:w-[25rem] text-white rounded-3xl p-4 sm:p-6 sm:px-8">
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Get Started with KoinX for FREE</h2>
            <p className="text-xs sm:text-sm opacity-90">
              With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
            </p>
          </div>
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src={Frame} 
              alt="Get Started" 
              className="w-36 sm:w-48"
            />
          </div>
          <button className="w-full bg-white flex justify-center items-center text-black font-bold py-2 sm:py-3 px-2 rounded-lg text-sm sm:text-base">
            Get Started for FREE 
            <FiArrowRight className="ml-2 text-black mt-0.5 sm:mt-1 font-bold" />
          </button>
        </div>
    );
}

export default GetStartedCard
