import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TradingViewWidget from '../components/core/TradingViewWidget'
import Performance from '../components/core/Performance'
import Sentiment from '../components/core/Sentiment'
import About from '../components/core/About'
import Tokenomics from '../components/core/Tokenomics'
import TeamSection from '../components/core/TeamSection'
import AlsoLike from '../components/core/AlsoLike'
import GetStarted from '../components/core/GetStarted'
import TrendingCoins from '../components/core/TrendingCoins'

const Homepage = () => {
  return (
    <div className='bg-[#EFF2F5]'>
       <div className=' flex gap-4 lg:pr-10 lg:pl-10 sm:pl-4 sm:pr-2 pt-4 flex-wrap'>
            {/* left */}
            <div className='flex flex-col flex-1'>
                <div className='flex gap-1 mb-3 ml-1'>Cryptocurrencies  <span className='mt-1 text-lg'><MdKeyboardDoubleArrowRight /></span>  <span className='font-semibold'>Bitcoin</span></div>
                <div className='w-[950px] h-[600px] md:w-[800px] md:h-[550px] sm:w-[600px] sm:h-[500px] lg:w-[950px] lg:h-[600px] rounded-lg shadow-lg'>
                    <TradingViewWidget></TradingViewWidget>
                </div>
                <div className='bg-white mt-6 w-[950px] md:w-[800px] sm:w-[600px] lg:w-[950px]'>
                    <Performance></Performance>
                </div>
                <div className='mt-6 w-[950px] md:w-[800px] sm:w-[600px] lg:w-[950px]'>
                    <Sentiment></Sentiment>
                </div>
                <div className='mt-6 w-[950px] md:w-[800px] sm:w-[600px] lg:w-[950px]'>
                    <About></About>
                </div>
                <div className='mt-6 w-[950px] md:w-[800px] sm:w-[600px] lg:w-[950px]'>
                    <Tokenomics></Tokenomics>
                </div>
                <div className='mt-6 w-[950px] md:w-[800px] sm:w-[600px] lg:w-[950px]'>
                    <TeamSection></TeamSection>
                </div>
            </div>
            {/* right */}
            <div className='flex flex-col flex-1 mt-9'>
                <div className='lg:w-[445px] sm:w-[590px]'>
                    <GetStarted></GetStarted>
                </div>
                <div className=' mt-6 lg:w-[445px] sm:w-[590px]'>
                    <TrendingCoins></TrendingCoins>
                </div>
            </div>
       </div>
       <div className='mt-6 w-full'>
            <AlsoLike></AlsoLike>
        </div>
    </div>
  )
}

export default Homepage