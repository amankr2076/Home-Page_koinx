import React from 'react'
import PerformaceData from './PerformanceData'

const Performance = () => {
  return (
    <div className='flex flex-col bg-[#EFF2F5]'>

        <div className="flex bg-[#EFF2F5] mb-1 lg:w-full sm:w-1/2">
            <div className='flex lg:gap-10 sm:gap-1 pb-6'>
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a
                    href="x"
                    className="inline-flex items-center border-b-[3px] border-indigo-500 px-1 pt-1 pb-1 text-lg font-medium text-blue-600"
                >
                    Overview
                </a>
                <a
                    href="y"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-black hover:border-gray-300"
                >
                    Fundamentals
                </a>
                <a
                    href="z"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-black hover:border-gray-300"
                >
                    New Insights
                </a>
                <a
                    href="a"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-black hover:border-gray-300"
                >
                    Sentiments
                </a>
                <a
                    href="b"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-black hover:border-gray-300"
                >
                    Team
                </a>
                <a
                    href="c"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-black hover:border-gray-300"
                >
                    Technicals
                </a>
                <a
                    href="d"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-black hover:border-gray-300"
                >
                    Tokenomics
                </a>
            </div>
        </div>

        <div className='rounded-lg overflow-hidden shadow-lg'>
            <PerformaceData></PerformaceData>
        </div>
        

    </div>
  )
}

export default Performance