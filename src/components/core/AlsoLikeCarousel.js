import React from 'react'
import { useRef } from "react";

const AlsoLikeCarousel = ({stockData,text}) => {

    const carouselRef = useRef(null);
      
        const scrollLeft = () => {
          if (carouselRef.current) {
            carouselRef.current.scrollBy({
              left: -300, // Adjust scroll distance as needed
              behavior: "smooth",
            });
          }
        };
      
        const scrollRight = () => {
          if (carouselRef.current) {
            carouselRef.current.scrollBy({
              left: 300, // Adjust scroll distance as needed
              behavior: "smooth",
            });
          }
        };
    
  return (
    <div>
            <div className="flex gap-2">
                <h3 className="text-lg font-medium mb-4">{text}</h3>
            </div>
          
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
    
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
    
            {/* Carousel */}
            <div
              ref={carouselRef}
              className="flex overflow-x-scroll scrollbar-hide space-x-2"
            >
              {stockData.map((card) => (
                <div
                  key={card.item.coin_id}
                  className={`min-w-[200px] max-w-[200px] h-[130px] bg-white rounded-lg shadow-sm p-3 border-2 flex flex-col`}
                >
                    <div className="flex gap-1">
                        <img src={card.item.thumb} alt="" className="h-[25px] rounded-full"></img>
                        <p>{card.item.symbol}</p>
                        <p></p>
                    </div>
                    <h2>${parseFloat(card.item.data.price).toFixed(7)}</h2>
                    <img src={card.item.data.sparkline} alt=""></img>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default AlsoLikeCarousel