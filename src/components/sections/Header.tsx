"use client";

import zeroPad from "../../utils/zeroPad";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [showShadow, setShowShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY == 0) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }

      if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  

  return (
    <header className={`transition bg-donker/80 backdrop-blur w-screen fixed top-0 h-24 flex justify-between px-24 items-center ${show && '-translate-y-24'} ${showShadow && 'shadow-lg'}`}>
      <div>
        <a href="#" className="text-[34px] font-roboto">
          mcdanang
        </a>
      </div>
      <div>
        {["About", "Projects", "Contact"].map((section, index) => {
          return (
            <a key={section} className="group px-4 cursor-pointer">
              <text className="font-roboto-mono">{zeroPad(index + 1, 2)}.</text>
              <text className="text-white group-hover:text-teal pl-2 font-roboto-mono">
                {section}
              </text>
            </a>
          );
        })}
      </div>
    </header>
  );
}
