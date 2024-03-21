"use client";
import Image from "next/image";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(0);
  return (
    <header className={`sticky top-0 header ${menuOpen ? "menu-open" : "menu-closed"}`}>
      <nav className="nav container  mx-auto flex justify-between items-center  container">
        <div className="logo inline-block">
          <Image
            src={"/logo.png"}
            alt={"Souptopia, A soup company"}
            width={140}
            height={140}
          ></Image>
        </div>
        <input
          value={menuOpen}
          onChange={() => setMenuOpen((prevMenuOpen) => +!menuOpen)}
          type="checkbox"
          id="menu-toggle"
          className="hidden"
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          <CgMenu size={"33px"} />
        </label>
        
      </nav>
      <div className={`menu container mx-auto flex items-center justify-between mt-8 min-h-full`}>
        <div className="">
          <ul className="menu-items">
            <li className="py-4">
              <a href="#" className="text-4xl">Home</a>
            </li>
            <li className="py-4">
              <a href="#" className="text-4xl">Menu</a>
            </li>
            <li className="py-4">
              <a href="https://order.cuboh.com/store/grocery-garden-waterloo/souptopia?isSandbox=false&menuID=b91040e0-2e63-4cba-8489-d2cdfee8941c&companyName=grocery-garden-waterloo&merchantName=grocery-garden-waterloo" className="text-4xl">Shop</a>
            </li>
            <li className="py-4">
              <a href="#" className="text-4xl">About Us</a>
            </li>
          </ul>
        </div>
        <div className="menu-desc hidden md:block">
          <h1>The soup company</h1>
          <p className="text-2xl">The container class sets the max-width of an element to match the min-width of the current breakpoint. </p>
        </div>
        </div>

    </header>
  );
}
