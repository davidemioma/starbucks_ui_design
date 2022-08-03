import React from "react";

interface Props {
  title: string;
  menuList: { path: string; type: string; image: string }[];
}

const MenuItem = ({ title, menuList }: Props) => {
  return (
    <div className="">
      <h2 className="font-bold text-lg tracking-wider mb-5">{title}</h2>

      <div className="flex flex-col space-y-3 text-sm text-gray-500 tracking-wider">
        {menuList.map((item: any, i) => (
          <p key={i}>{item.type}</p>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
