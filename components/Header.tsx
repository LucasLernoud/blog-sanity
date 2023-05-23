import Image from "next/image";
import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <>
      <header className=" flex items-center justify-between space-x-2 px-10 py-5 font-bold">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="https://links.papareact.com/1m8"
              width={50}
              className="rounded-full"
              height={50}
              alt="logo"
            />
          </Link>
          <h1>LUCAAAAS</h1>
        </div>
        <div className="flex">
          <DarkModeButton />
          {/* <Link
            href="google.com"
            className="bg-gray-900 flex items-center rounded-full px-5 py-3 text-sm text-[#F7AB0A] md:text-base"
          ></Link> */}
        </div>
      </header>
    </>
  );
}

export default Header;
