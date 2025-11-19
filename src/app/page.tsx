"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useRouter();

  const handleSearchProduct = () => {
    if (searchValue.trim() !== "") {
      navigate.push("/search?query=" + searchValue);
    }
  };

  return (
    <div className="p-2 min-h-[60%] flex flex-col gap-10 items-center justify-center">
      <div
        className="text-4xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500"
      >
        Find the Best Prices Nearby
      </div>
      <div className="text-center flex flex-col gap-4">
        <div className="text-xl">Compare prices at local shops instantly.</div>
        <div className="text-xl">
          No shipping, no waiting - just the best deals around you.
        </div>
      </div>
      <div className="flex gap-6 justify-between">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchProduct();
            }
          }}
          placeholder="Search for products..."
          value={searchValue}
          className="h-12 p-3 w-sm border-white border rounded-lg"
        />
        <button
          onClick={handleSearchProduct}
          className="bg-red-950 hover:scale-105 hover:bg-red-900 px-6 py-3 rounded-lg cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
}
