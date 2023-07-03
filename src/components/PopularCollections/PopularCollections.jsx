import React from "react";
import "./PopularCollections.css";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";
import popular5 from "../../assets/popular5.png";
import popular6 from "../../assets/popular6.png";
import popular7 from "../../assets/popular7.png";
import popular8 from "../../assets/popular8.png";
import popular9 from "../../assets/popular9.png";
import popular10 from "../../assets/popular10.png";
import popular11 from "../../assets/popular11.png";
import popular12 from "../../assets/popular12.png";
import man1 from "../../assets/livem1.png";
import man2 from "../../assets/livem2.png";
import man3 from "../../assets/livem3.png";

import { FaRegHeart } from "react-icons/fa";


const PopularCollections = () => {
  return (
    <div className="max-w-[1410px] mx-auto px-5 py-12">
      <div className="flex flex-col items-center pb-8">
        <h2 className="text-center font-bold text-2xl">Popular Collections</h2>
        <div className=" w-14 h-0.5 bg-[#5228e2]"></div>
      </div>

    <div className="md:flex justify-between gap-5">
        <div className="p-3 customShadow rounded-lg mb-5 md:mb-0">
            <div>
                <img src={popular1} className="rounded-lg" alt="" />
            </div>
            <div className="flex justify-between py-2">
                <img src={popular2} className="rounded-lg w-[90x] h-[90px] " alt="" />
                <img src={popular3} className="rounded-lg w-[90x] h-[90px]" alt="" />
                <img src={popular4} className="rounded-lg w-[90x] h-[90px]" alt="" />
            </div>
            <div className="flex justify-between py-2">
                <div className="flex items-center gap-1">
                    <img src={man1} className="rounded-lg" alt="" />
                    <div>
                        <p className="font-bold">Creative Art Collection</p>
                        <p className="text-gray-400 text-sm">Created by <span className=" text-black">Ralph Garraway</span></p>
                    </div>
                </div>
                <div className="flex items-center bg-black text-white h-6 p-2 rounded-full">
                    <FaRegHeart/>100
                </div>
            </div>
        </div>
        <div className="p-3 customShadow rounded-lg mb-5 md:mb-0">
            <div>
                <img src={popular5} className="rounded-lg" alt="" />
            </div>
            <div className="flex justify-between py-2">
                <img src={popular6} className="rounded-lg w-[90x] h-[90px]" alt="" />
                <img src={popular7} className="rounded-lg w-[90x] h-[90px]" alt="" />
                <img src={popular8} className="rounded-lg w-[90x] h-[90px]" alt="" />
            </div>
            <div className="flex justify-between py-2">
                <div className="flex items-center gap-1">
                    <img src={man3} className="rounded-lg" alt="" />
                    <div>
                        <p className="font-bold">Creative Art Collection</p>
                        <p className="text-gray-400 text-sm">Created by <span className=" text-black">Ralph Garraway</span></p>
                    </div>
                </div>
                <div className="flex items-center bg-black text-white h-6 p-2 rounded-full">
                    <FaRegHeart/>100
                </div>
            </div>
        </div>
        <div className="p-3 customShadow rounded-lg mb-5 md:mb-0">
            <div>
                <img src={popular9} className="rounded-lg" alt="" />
            </div>
            <div className="flex justify-between py-2">
                <img src={popular10} className="rounded-lg w-[90x] h-[90px]" alt="" />
                <img src={popular11} className="rounded-lg w-[90x] h-[90px]" alt="" />
                <img src={popular12} className="rounded-lg w-[90x] h-[90px]" alt="" />
            </div>
            <div className="flex justify-between py-2">
                <div className="flex items-center gap-1">
                    <img src={man2} className="rounded-lg" alt="" />
                    <div>
                        <p className="font-bold">Creative Art Collection</p>
                        <p className="text-gray-400 text-sm">Created by <span className=" text-black">Ralph Garraway</span></p>
                    </div>
                </div>
                <div className="flex items-center bg-black text-white h-6 p-2 rounded-full">
                    <FaRegHeart/>100
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default PopularCollections;
