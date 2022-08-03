import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import menuList from "../../menulist.json";
import MenuItem from "../../components/MenuItem";
import MenuItemLg from "../../components/MenuItemLg";

const Menu = () => {
  return (
    <div className="relative">
      <Head>
        <title>Menu</title>

        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="md:sticky w-full md:top-0 md:z-40">
        <Header />

        <div className="bg-gray-100 w-full py-3 px-24 hidden sm:inline-flex space-x-5 text-sm tracking-wide">
          <Link href="/menu">
            <p className="cursor-pointer pb-1 border-b border-black">
              All products
            </p>
          </Link>

          <Link href="/menu/featured">
            <p className="cursor-pointer">Featured</p>
          </Link>

          <Link href="">
            <p className="cursor-pointer">Previous Orders</p>
          </Link>

          <Link href="">
            <p className="cursor-pointer">Favourite Products</p>
          </Link>
        </div>
      </header>

      <main className="my-10">
        <section className="pl-6 sm:pl-24 flex">
          <div className="hidden md:inline-flex flex-col space-y-7 max-w-[230px]">
            <MenuItem title="Drinks" menuList={menuList[0].drinks} />

            <MenuItem title="Food" menuList={menuList[0].food} />

            <MenuItem
              title="At Home Coffee"
              menuList={menuList[0].atHomeCoffee}
            />

            <MenuItem title="Merchandise" menuList={menuList[0].merchandise} />
          </div>

          <div className="flex-grow">
            <h1 className="font-bold text-3xl tracking-wider mb-10">Menu</h1>

            <div className="flex flex-col space-y-8">
              <MenuItemLg title="Drinks" menuList={menuList[0].drinks} />

              <MenuItemLg title="Food" menuList={menuList[0].food} />

              <MenuItemLg
                title="At Home Coffee"
                menuList={menuList[0].atHomeCoffee}
              />

              <MenuItemLg
                title="Merchandise"
                menuList={menuList[0].merchandise}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Menu;
