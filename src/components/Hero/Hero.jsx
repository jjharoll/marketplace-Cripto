// @ts-nocheck
import React from 'react';
import heroImg from '../../assets/hero.png'
import Navbar from '../Navbar/Navbar';
import { FaRocket, FaFile } from "react-icons/fa";
import './Hero.css'


const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className='h-[81vh] '>
            <div className='h-full w-full' style={heroStyle}>
                <div className=''>
                <Navbar/>
                </div>
                <div className='text-center pt-28'>
                    <div className='text-center'>
                    <h1 className=' text-3xl md:text-5xl font-bold text-white '>Discover, and collect <br /> <span className='text-transparent text-stroke-white'>extraordinary </span>Monster NFTs</h1>
                    </div>
                    <p className='text-white pt-4'>Marketplace for monster character cllections non fungible token NFTs</p>
                    <div className='flex items-center justify-center gap-5 pt-16 md:pt-20'>
                        <button className='flex items-center gap-3 text-white border-2 border-white py-3 px-5 rounded-full font-bold'><FaRocket/> Explore</button>
                        <button className='flex items-center gap-3 border-2 border-white py-3 px-6 rounded-full bg-white text-black font-bold'><FaFile className='text-blue-600'/>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;