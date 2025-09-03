"use client";
import React from 'react'
import {motion} from "motion/react"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () =>{
    return(
        <section className='relative bg-white py-20 md:py-32 px-6 lg:px-16 overflow-hidden'>
            {/* Floating Blobs */}
            <div className='absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-100 rpunded-full-blur-3xl z-0' />
            <div className='absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-blue-100 rounded-full blur-3xl z-0'/>
            <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
                {/* text */}
                <motion.div
                initial={{opacity:0,x:-40}}
                animate={{opacity:1,x:0}}
                transition={{duration:1}}
                className="space-y-6"
                >
                    <h1 className='text-4xl md:text-6xl font-bold text-gray-900 leading-tight'>
                        Redifine Your <span className='text-primary'>Wardrobe</span>
                    </h1>
                    <p className='text-lg md:text-xl text-gray-600'>
                        Step into a world of minimalist luxury. Discover styles that speak confidence,class and comfort -- all in one place.
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <Link href={"/"}>
                        <Button size="lg">
                            Shop the collection
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                        </Link>
                    </div> 
                </motion.div>
                <motion.div
                initial={{opacity:0,x:-40}}
                animate={{opacity:1,x:0}}
                transition={{duration:1}}
                className="relative w-full h-96 md:h-[500px]">
                    <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80" alt="luxury fashion" fill className="object-cover rounded-xl shadow-md" priority/>

                </motion.div>
            </div>
        </section>
    )
}
export default HeroSection