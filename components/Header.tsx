"use client";
import { FC } from "react";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className="m-2 flex flex-row justify-between border p-2">
      <span className="font-bold">Murat Can</span>

      <div className="flex flex-row gap-2">
        <a href="https://github.com/muratcankirdar">Github</a>

        <a href="https://linkedin.com/in/muratcank">Linkedin</a>
      </div>
    </header>
  );
};

export default Header;
