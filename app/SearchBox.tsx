"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    // it stops from redireting 
    e.preventDefault();

    if(!input) return;

    router.push(`/search?term=${input}`)
  };

  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="flex-1 outline-none w-full h-14 placeholder-gray-400 text-gray-900 dark:text-orange-400 bg-transparent  "
      />

      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
