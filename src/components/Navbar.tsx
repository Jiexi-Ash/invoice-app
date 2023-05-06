import React from "react";

import Image from "next/image";

import { SunIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <header className="w-full max-w-8xl bg-primaryDarkBlue">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-between border-r  border-r-[#494E6E] pr-6">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-r-[20px] bg-primaryPurple">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
              />
            </svg>
          </div>
          <div className="">
            <SunIcon className="h-6 w-6 text-[#858BB2]" />
          </div>
        </div>
        <div className="px-6">
          <Image
            src="/assets/images/image-avatar.jpg"
            alt="image avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
