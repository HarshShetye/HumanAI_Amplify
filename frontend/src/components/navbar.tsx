import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar fixed top-0 flex w-full justify-center font-bold text-xl px-10">
      <div className="flex  justify-between border-b-2 border-gray-500 w-3/4 py-4">
        <span className="font-bold text-3xl text-white">Aiclassify.io</span>
        <Image src="/menu.png" width="40" height="30" alt="menu image" />
      </div>
    </div>
  );
}

export default Navbar;
