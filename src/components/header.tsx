import React from "react";
import { Link } from "react-router-dom";
import Container from "./container";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between gap-2 h-20 py-5 px-[300px]">
      <div className="flex flex-row justify-left font-semibold font-inter gap-16">
        <Link to={"/"} className="text-black">
          <img src="/logo.png" alt="logo" className="w-[122px]" />
        </Link>

        <div className="flex justify-left gap-5">
          <Link to={"/"} className="text-black">
            Главная
          </Link>
          <Link to={"/about"} className="text-black">
            О нас
          </Link>
          <Link to={"/contacts"} className="text-black">
            Контакты
          </Link>
        </div>
      </div>
      <div className="flex  gap-5">
        <div className="flex flex-row gap-2">
          <Link to={"/login"} className="text-black">
            Вход
          </Link>
          <Link to={"/registration"} className="text-black">
            Регистрация
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
