'use client'

import { categories } from "@/constants";
import React from "react";
import NavLink from "./NavLink";
import {usePathname} from "next/navigation";

function Navlinks() {
    const pathName = usePathname();

    const isActive = (path : string) => {
        return pathName?.split('/').pop() === path;
    }


  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 py-10 max-w-6xl mx-auto border-b-2">

      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={isActive(category)} />
      ))}
      
    </nav>
  );
}

export default Navlinks;
