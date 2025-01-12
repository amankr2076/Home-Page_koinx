// SentimentComponent.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import CardCarousel from "./CardCarousel";

function Sentiment() {
    const data = [
        { label: "Buy", percentage: 76, color: "bg-[#00B386]" },
        { label: "Hold", percentage: 8, color: "bg-[#C7C8CE]" },
        { label: "Sell", percentage: 16, color: "bg-[#F7324C]" },
      ];
      
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg pb-16">
      {/* Sentiment Header */}
        <h2 className="text-xl font-bold mb-4">Sentiment</h2>
      

      {/* Key Events Section */}
        <CardCarousel></CardCarousel>

      {/* Analyst Estimates Section */}
      <div className="mt-12">
        <div className="flex gap-2">
            <h3 className="text-md font-medium mb-3">Analyst Estimates</h3>
            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#73777d" }} className="mt-[8px] text-[12px]" />
        </div>
        
        <div className="flex items-center lg:gap-12 sm:gap-28 mt-4">
          {/* Pie Chart Section */}
          <div className="relative w-28 h-28  flex items-center justify-center">
                <div className="absolute sm:w-24 sm:h-24 inset-0 rounded-full bg-[#EBF9F4] flex items-center justify-center">
                <span className="flex text-3xl font-semibold text-[#0FBA83]">76<span className="text-lg mt-1">%</span></span>
                </div>

            </div>

          {/* Estimates Details */}
          <div className="flex flex-col">
                <div className="flex mb-2 gap-6">
                    <span className="text-md font-semibold text-[#7C7E8C] w-[35px]">Buy</span>
                    <div className="bg-white rounded-full h-2 w-[400px] flex gap-3 mt-3">
                        <div className={`${data[0].color} h-2 rounded-full`} style={{ width: `${data[0].percentage}%` }}></div>
                        <span className="text-sm font-semibold text-[#7C7E8C] mt-[-7px]">{data[0].percentage}%</span>
                    </div>
                </div>
                <div className="flex mb-2 gap-6">
                    <span className="text-md font-semibold text-[#7C7E8C] w-[35px]">Hold</span>
                    <div className="bg-white rounded-full h-2 w-[400px] flex gap-3 mt-3">
                        <div className={`${data[1].color} h-2 rounded-full`} style={{ width: `${data[1].percentage}%` }}></div>
                        <span className="text-sm font-semibold text-green-600 mt-[-7px]">{data[1].percentage}%</span>
                    </div>
                </div>
                <div className="flex mb-2 gap-6">
                    <span className="text-md font-semibold text-[#7C7E8C] w-[35px]">Sell</span>
                    <div className="bg-white rounded-full h-2 w-[400px] flex gap-3 mt-3">
                        <div className={`${data[2].color} h-2 rounded-full`} style={{ width: `${data[2].percentage}%` }}></div>
                        <span className="text-sm font-semibold text-green-600 mt-[-7px]">{data[2].percentage}%</span>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
