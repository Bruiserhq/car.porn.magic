import React, { useState } from "react";
import { MenuIcon, XIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Navigation } from "./Navigation";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="py-4 px-6 md:px-8 lg:px-12 w-full z-10 absolute">
      <div className="flex justify-between items-center">
        <button onClick={() => setIsMenuOpen(true)} className="text-white hover:opacity-75 transition-opacity" aria-label="Open menu">
          <MenuIcon size={24} />
        </button>
        <div className="text-xl md:text-2xl font-bold tracking-tighter">
          <a href="/" className="flex items-center">
            <span className="text-white">car</span>
            <span className="text-red-500">.</span>
            <span className="text-white">porn</span>
          </a>
        </div>
        <div className="text-sm opacity-75">A new exceptional car, daily.</div>
      </div>
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>;
}