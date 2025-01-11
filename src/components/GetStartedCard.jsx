import React from 'react'
import Frame from "../assets/Frame.png"
import { FiArrowRight } from 'react-icons/fi';
const GetStartedCard = () => {
    return (
        <div className="bg-blue-600 w-[25rem] text-white rounded-3xl p-6 px-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold mb-2">Get Started with KoinX for FREE</h2>
            <p className="text-xs opacity-90">
              With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <img 
              src={Frame} 
              alt="Get Started" 
              className="w-48"
            />
          </div>
          <button className="w-full bg-white flex justify-center text-black font-bold py-3 px-2 rounded-lg">
            Get Started for FREE 
            <FiArrowRight className="ml-2 text-black mt-1 font-bold" />
          </button>
          
        </div>
      );
}

export default GetStartedCard