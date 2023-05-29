/* This example requires Tailwind CSS v2.0+ */
"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import zeroPad from "../../utils/zeroPad";
import { useEffect, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const sections = ["about", "projects", "contact"];

export default function Example() {
  const [show, setShow] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY == 0) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }

      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Disclosure
      as="nav"
      className={`transition duration-300 w-screen md:py-4 px-2 md:px-24 top-0 fixed bg-donker/80 backdrop-blur ${
        show && "-translate-y-24"
      } ${showShadow && "shadow-lg"}`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="#" className="text-[34px] font-roboto">
                  mcdanang
                </a>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {sections.map((section, index) => {
                    return (
                      <a
                        key={section}
                        href={`#${section}`}
                        className="group px-4 cursor-pointer"
                      >
                        <text className="font-roboto-mono">
                          {zeroPad(index + 1, 2)}.
                        </text>
                        <text className="text-white group-hover:text-teal pl-2 font-roboto-mono capitalize">
                          {section}
                        </text>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition ease duration-500 transform"
            enterFrom="opacity-100 translate-x-96"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-500 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-100 translate-x-96"
          >
            <Disclosure.Panel
              className={`transition duration-300 sm:hidden absolute bg-donker shadow-xl ${
                show && "-translate-y-24"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 w-screen">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {sections.map((section, index) => {
                  return (
                    <Disclosure.Button
                      as="a"
                      href={`#${section}`}
                      key={section}
                      className="group block py-2 px-4 cursor-pointer capitalize"
                    >
                      <text className="font-roboto-mono">
                        {zeroPad(index + 1, 2)}.
                      </text>
                      <text className="text-white group-hover:text-teal pl-2 font-roboto-mono">
                        {section}
                      </text>
                    </Disclosure.Button>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
