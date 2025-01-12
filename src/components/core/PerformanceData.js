// PerformanceAndFundamentals.jsx
import { IoMdArrowDropup } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function PerformaceData() {

    const data={
        tLow:"46,930.22",
        tHigh:"49,343.83",
        curr: "48,637.83",
        wLow:"16,930.22",
        wHigh:"49,743.83",
    }

    const fundamental = {
        bitcoinPrice: "16,815.46",
        marketCap: "323,507,290,047",
        low24H: "16,382.07",
        high24H: "16,874.12",
        marketCapDominance: "38.343%",
        low7D: "16,382.07",
        high7D: "16,874.12",
        volumeMarketCap: "0.0718",
        tradingVolume: "23,249,202,782",
        allTimeHigh_value: "69,044.77",
        allTimeHigh_percentageChange: -75.6,
        marketCapRank: "1",
        allTimeLow_value:"67.81",
        allTimeLow_percentageChange: 24729.1,
      };
      
    const x=75;
  return (
    <div className="p-6 bg-white rounded-lg overflow-hidden pb-12">
      {/* Performance Section */}
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">Performance</h1>
        {/* todays */}
        <div className="flex gap-2 mt-10 ml-[-25px]">
            <div className="flex flex-col gap-2 w-1/6 items-center">
                <div>Todays Low</div>
                <div className="font-semibold">{data.tLow}</div>
            </div>
            <div className="flex flex-col w-4/6">
                <div className="h-[5px] rounded-full bg-custom-gradient4 w-full mt-6"></div>
                <div className="flex flex-col mt-[-4px]" style={{ transform: `translateX(${x}%)` }}>
                    <div className="text-2xl"><IoMdArrowDropup /></div>
                    <p className="ml-[-18px] mt-[-6px]">${data.curr}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-1/6 items-center">
                <div>Today's High</div>
                <div className="font-semibold">{data.tHigh}</div>
            </div>
        </div>

        {/* 52W */}
        <div className="flex gap-2 mt-10 ml-[-25px]">
            <div className="flex flex-col gap-2 w-1/6 items-center">
                <div>52W Low</div>
                <div className="font-semibold">{data.wLow}</div>
            </div>
            <div className="flex flex-col items-center w-4/6">
                <div className="h-[5px] rounded-full bg-custom-gradient4 w-full mt-6"></div>
            </div>
            <div className="flex flex-col gap-2 w-1/6 items-center">
                <div>52W High</div>
                <div className="font-semibold">{data.wHigh}</div>
            </div>
        </div>
      </div>






      {/* Fundamentals Section */}
      <div className="mt-12">
        <div className="flex gap-2">
            <h2 className="text-xl font-semibold mb-4">Fundamentals</h2>
            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ABB9BF" }} className="mt-[8px] text-[18px]" />
        </div>

        <div className="lg:flex sm:flex-wrap lg:gap-36 sm:gap-4 md:gap-8  pl-4 pr-6 mt-6 w-full">


            <div className="lg:w-1/2 sm:w-full flex flex-col gap-3 flex-1">
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">Bitcoin Price</span>
                    <span className="text-md font-semibold">${fundamental.bitcoinPrice}</span>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">24h Low / 24h High</span>
                    <span className="text-md font-semibold">${fundamental.low24H} / ${fundamental.high24H}</span>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">7d Low / 7d High</span>
                    <span className="text-md font-semibold">${fundamental.low7D} / ${fundamental.high7D}</span>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">Trading Volume</span>
                    <span className="text-md font-semibold">${fundamental.tradingVolume}</span>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">Market Cap Rank</span>
                    <span className="text-md font-semibold">#{fundamental.marketCapRank}</span>
                </div>
                <div className="border"></div>
                

            </div>

            <div className="lg:w-1/2 sm:full flex flex-col gap-3 flex-1">
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">Market Cap</span>
                    <span className="text-md font-semibold">${fundamental.marketCap}</span>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">Market Cap Dominance</span>
                    <span className="text-md font-semibold">{fundamental.marketCapDominance}</span>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">Volume / Market Cap</span>
                    <span className="text-md font-semibold">{fundamental.volumeMarketCap}</span>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">All-Time High</span>
                    <div className="text-md font-semibold">${fundamental.allTimeHigh_value}
                        <span className={`${fundamental.allTimeHigh_percentageChange > 0 ? "text-green-500" : "text-red-500"}`}> {fundamental.allTimeHigh_percentageChange}%</span></div>
                </div>
                <div className="border"></div>
                <div className="flex justify-between">
                    <span className="text-md font-semibold text-gray-500">All-Time Low</span>
                    <div className="text-md font-semibold">${fundamental.allTimeLow_value}
                        <span className={`${fundamental.allTimeLow_percentageChange > 0 ? "text-green-500" : "text-red-500"}`}> {fundamental.allTimeLow_percentageChange}%</span>
                    </div>
                </div>
                <div className="border"></div>
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default PerformaceData;
