import React from "react";
import seller1 from "../../assets/seller1.png";
import seller2 from "../../assets/seller2.png";
import seller3 from "../../assets/seller3.png";
import seller4 from "../../assets/seller4.png";
import seller5 from "../../assets/seller5.png";
import seller6 from "../../assets/seller6.png";
import seller7 from "../../assets/seller7.png";
import seller8 from "../../assets/seller8.png";
import seller9 from "../../assets/seller9.png";
import seller10 from "../../assets/seller10.png";
import seller11 from "../../assets/seller11.png";
import seller12 from "../../assets/seller12.png";
import './TopSeller.css'

const TopSeller = () => {
    
  return (
    <div className="max-w-[1410px] mx-auto px-5 py-10">
      <div className="flex flex-col items-center pb-8">
        <h2 className="text-center font-bold text-2xl">Top Seller</h2>
        <div className=" w-14 h-0.5 bg-[#5228e2]"></div>
      </div>
      <div className="grid  md:grid-cols-4 gap-5">
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller1} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Crispin Berry</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller2} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Windsor Lane</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller3} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Andy Hurlbutt</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller4} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Blake Banks</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller5} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Monica Lucas</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller6} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Crispin Berry</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller7} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Harper Wilcher</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller8} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Crispin Berry</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller9} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Monica Lucas</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller10} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Crispin Berry</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller11} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Harper Wilcher</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center customShadow p-3 rounded-full">
          <img src={seller12} className="rounded-full" alt="" />
          <div>
            <p className="font-bold">Crispin Berry</p>
            <p className="text-gray-500">
              <small>214.2 ETH</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
