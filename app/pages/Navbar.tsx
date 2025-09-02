"use client"
import React from "react";
import Link from "next/link";
import { link } from "fs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Menu,ShoppingCart,Search,X} from 'lucide-react'

const Navbar = () =>{
    const navLinks =[
        {name:"Home",href:'/'},
        {name:"About",href:"/about"},
        {name:"Contact",href:"/contact"}
    ]
    return(
        <header className='w-full bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
                {/* {Logo} */}
                <Link href={'/'} className='text 2xl font-bold text-primary'>
                Shop Ease
                </Link>
                {/* {Desktop Nav} */}
                <nav className="hidden md:flex items-center space-x-6 relative">
                    
                    {navLinks.map((link)=>(
                        <Link href={link.href}
                        key={link.name} className="text-gray-700 hover:text-primary transition">
                            {link.name}

                        </Link>
                    ))}
                </nav>
                {/* {Search and Cart} */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <Input type="text" placeholder="Search" className="pl-10"/>
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    </div>
                    <Button variant="outline" size="icon">
                        <ShoppingCart className="h-5 w-5"/>
                    </Button>
                    <Button variant="outline" className="cursor-pointer">
                        Login
                    </Button>

                </div>

            </div>
        </header>
    ) 
};

export default Navbar;