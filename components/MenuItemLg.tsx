import React from "react";

interface Props {
  title: string;
  menuList: { path: string; type: string; image: string }[];
}

const MenuItemLg = ({ title, menuList }: Props) => {
  return (
    <div>
      <h2 className="font-bold text-2xl tracking-wider mb-5">{title}</h2>

      <div className="w-full border-t pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-y-7">
        {menuList.map((item) => (
          <div key={item.type} className="flex items-center space-x-3">
            <img
              className="rounded-full w-[120px] h-[120px]"
              loading="lazy"
              src={item.image}
              alt=""
            />

            <p className="text-lg max-w-[150px] font-medium tracking-wider">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemLg;
