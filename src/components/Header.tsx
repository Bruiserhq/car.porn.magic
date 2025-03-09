import React, { useState } from "react";
import { MenuIcon, XIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Navigation } from "./Navigation";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-0" />
      <header className="py-4 px-6 md:px-8 lg:px-12 w-full z-10 absolute">
        <div className="relative flex justify-between items-center">
          <button onClick={() => setIsMenuOpen(true)} className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-colors" aria-label="Open menu">
            <MenuIcon size={20} />
          </button>
          <div className="text-xl md:text-2xl font-bold tracking-tighter">
            <a href="/" className="flex items-center px-4 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
              <span className="text-white">car</span>
              <span className="text-red-500">.</span>
              <span className="text-white">porn</span>
            </a>
          </div>
          <div className="px-4 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-sm text-white">
            A new exceptional car, daily.
          </div>
        </div>
        <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>
    </>;
}