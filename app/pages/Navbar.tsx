"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, Search, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/shop" },
    { name: "Contact", href: "/about" },
  ];
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold text-primary">
          E-Com
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {/* Static Links */}
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="text-gray-700 hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Search and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="cursor-pointer">
            Login
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="absolute top-full left-0 w-full bg-white px-4 pb-4 space-y-2 z-50 shadow-md md:hidden">
            <Link href={"/"} className="block text-gray-700 = py-2 border-b">
              Shop
            </Link>
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="block text-gray-700 py-2 border-b"
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-2">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full"
              />
              <Button variant="outline" size="icon">
                <Search className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-6 w-6" />
              </Button>
              <Button variant="outline" className="cursor-pointer">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;