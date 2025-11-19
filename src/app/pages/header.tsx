"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { ROUTES } from "../../../util/routes";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const navigate = useRouter();

  const handleNavigate = (path: string) => {
    navigate.push(path);
  };

  return (
    <header className="flex items-center justify-between p-5">
      <div
        onClick={() => handleNavigate(ROUTES.HOME)}
        className="cursor-pointer"
      >
        LOGO
      </div>
      <div className="flex gap-10">
        <button
          onClick={() => handleNavigate(ROUTES.LOGIN)}
          className="cursor-pointer font-bold"
        >
          Login
        </button>
        <button onClick={() => setTheme(!theme)} className={"cursor-pointer"}>
          {theme ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
