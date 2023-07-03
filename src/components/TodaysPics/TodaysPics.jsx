import React from "react";
import "./TodaysPics.css";
import todays1 from "../../assets/todays1.png";
import todays2 from "../../assets/todays2.png";
import todays3 from "../../assets/todays3.png";
import todays4 from "../../assets/todays4.png";
import todays5 from "../../assets/todays5.png";
import todays6 from "../../assets/todays6.png";
import todays7 from "../../assets/todays7.png";
import todays8 from "../../assets/todays8.png";
import livem1 from "../../assets/livem1.png";
import livem2 from "../../assets/livem2.png";
import livem3 from "../../assets/livem3.png";
import livem4 from "../../assets/livem4.png";
import { FaShoppingBag, FaHistory } from "react-icons/fa";

const TodaysPics = () => {
  return (
    <div className="max-w-[1410px] mx-auto px-5 py-12">
      <div className="flex flex-col items-center pb-8">
        <h2 className="text-center font-bold text-2xl">TOday's Pics</h2>
        <div className=" w-14 h-0.5 bg-[#5228e2]"></div>
      </div>

      <div>
        <div className="md:grid grid-cols-4 gap-5">
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays1} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem1} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays2} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem2} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays3} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem3} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays4} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem4} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays5} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem1} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays6} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem2} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays7} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem3} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="customShadow p-3 rounded-2xl">
            <div className="">
              <img src={todays8} className="w-full rounded-lg" alt="" />
            </div>
            <div className="flex items-center justify-between py-3">
              <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
              <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                BSC
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src={livem4} className="rounded-lg" alt="" />
                <div>
                  <p className="text-gray-500">Creator</p>
                  <h5 className="font-bold text-lg">SalvadorDali</h5>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Current Bid</p>
                <h5 className="font-bold text-lg">4.89 ETH</h5>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <button className="flex items-center gap-2 border-2 border-[#5228e2] py-2 px-2 rounded-full text-[#5228e2] font-bold hover:bg-[#5228e2] hover:text-white">
                <FaShoppingBag /> Place Bid
              </button>
              <button className="flex items-center gap-2">
                <FaHistory /> View History
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
            <button className="bg-[#d7cef3] p-2 rounded-full text-[#5228e2] ">Lode More</button>
        </div>
      </div>
    </div>
  );
};

export default TodaysPics;
