import React, { SetStateAction, Dispatch } from "react";
import Image from "next/image";
import Link from "next/link";
import FindUsBtn from "./FindUsBtn";
import LogoutBtn from "./LogoutBtn";
import { MenuIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../store/store";

const Header = () => {
  const [user] = useAuthState(auth);

  const dispatch = useDispatch();

  return (
    <header className="flex sticky bg-white top-0 z-40 items-center justify-between p-6 shadow-lg">
      <div className="flex items-center space-x-7">
        <Link href="/">
          <div className="relative w-12 h-12 cursor-pointer">
            <Image
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5 font-bold">
          <Link href="/menu">
            <p className="link">Menu</p>
          </Link>

          <Link href="">
            <p className="link">Rewards</p>
          </Link>

          <Link href="">
            <p className="link">Gift Cards</p>
          </Link>
        </div>
      </div>

      <div className="hidden md:inline-flex items-center space-x-5 text-sm ">
        <FindUsBtn />

        {user && <LogoutBtn />}
      </div>

      <button
        onClick={() => dispatch(setSidebarOpen(true))}
        className="md:hidden iconBtn"
      >
        <MenuIcon className="h-8 w-8" />
      </button>
    </header>
  );
};

export default Header;
