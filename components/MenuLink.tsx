import React from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

interface Props {
  name: string;
  path: string;
  icon?: boolean;
  goBackIcon?: boolean;
  onClick?: () => void;
  width?: boolean;
}

const MenuLink = ({ name, path, icon, goBackIcon, onClick, width }: Props) => {
  return (
    <Link href={path}>
      <div
        onClick={onClick}
        className={`${
          width ? `w-[60%]` : "w-full"
        } flex items-center justify-between cursor-pointer hover:scale-105 transition-all duration-300`}
      >
        {goBackIcon && <ChevronLeftIcon className="h-6" />}

        <p className="text-lg tracking-wide">{name}</p>

        {icon && <ChevronRightIcon className="h-6" />}
      </div>
    </Link>
  );
};

export default MenuLink;
