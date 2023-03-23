"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(currentTheme);



  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon className="h-8 w-8 cursor-pointer text-orange-400" onClick={() => setTheme("light")} />
      ) : (
        <MoonIcon className="h-8 w-8 cursor-pointer text-slate-700" onClick={() => setTheme("dark") }/>
      )}
    </div>
  );
}

export default DarkModeButton;
