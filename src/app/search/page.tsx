"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    handleSearchProduct(query);
  }, [query]);

  const handleSearchProduct = (value: string = searchValue) => {
    console.log("searchValue----", value);
    if (value) {
      setSearchResults(value);
    }
  };

  type Product = {
    id: number;
    name: string;
    location: string;
  };
  const results: Product[] = [];

  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col gap-10">
      <div className="flex gap-6">
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
          onClick={() => handleSearchProduct()}
          className="bg-red-950 hover:scale-105 hover:bg-red-900 px-6 py-3 rounded-lg cursor-pointer"
        >
          Search
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-4">
          Search results for:{" "}
          <span className="text-blue-600">
            <b>{searchResults}</b>
          </span>
        </h1>

        {results.length > 0 ? (
          <ul className="space-y-3">
            {results.map((item) => (
              <li
                key={item.id}
                className="border rounded-xl p-4 hover:bg-gray-50 transition"
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500">
            No results found for <b>{searchResults}</b>.
          </div>
        )}
      </div>
    </div>
  );
}
