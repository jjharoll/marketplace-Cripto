import React from 'react';
import { FaWallet,FaFileAlt,FaImages, FaListAlt } from "react-icons/fa";


const CreateAndSell = () => {
    return (
        <div className='max-w-[1410px] mx-auto px-5'>
            <div className='md:flex gap-5 py-5 text-center'>
                <div className='flex flex-col items-center mb-5 md:mb-0'>
                    <div className='bg-[#5228e2] p-3 text-white rounded-xl'>
                    <FaWallet/>
                    </div>
                    <h4 className='text-xl font-bold py-1'>Set Up Your Wallet</h4>
                    <p className='text-gray-400 text-sm'>Once you’ve set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the top right corner.</p>
                </div>
                <div className='flex flex-col items-center mb-5 md:mb-0'>
                    <div className='bg-green-600 p-3 text-white rounded-xl'>
                    <FaFileAlt/>
                    </div>
                    <h4 className='text-xl font-bold py-1'>Create your collection</h4>
                    <p className='text-gray-400 text-sm'>Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                </div>
                <div className='flex flex-col items-center mb-5 md:mb-0'>
                    <div className='bg-purple-600 p-3 text-white rounded-xl'>
                    <FaImages/>
                    </div>
                    <h4 className='text-xl font-bold py-1'>Add your NFTs</h4>
                    <p className='text-gray-400 text-sm'>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats</p>
                </div>
                <div className='flex flex-col items-center mb-5 md:mb-0'>
                    <div className='bg-orange-600 p-3 text-white rounded-xl'>
                    <FaListAlt/>
                    </div>
                    <h4 className='text-xl font-bold py-1'>SList them for sale</h4>
                    <p className='text-gray-400 text-sm'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!</p>
                </div>
            </div>
        </div>
    );
};

export default CreateAndSell;