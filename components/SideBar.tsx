import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import FindUsBtn from "./FindUsBtn";
import MenuLink from "./MenuLink";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "../store/store";
import LogoutBtn from "./LogoutBtn";

const SideBar = () => {
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);

  const sidebarOpen = useSelector((state: any) => state.ui.sidebarOpen);

  const [showMenuCategories, setShowMenuCategories] = useState(false);

  return (
    <div
      className={`${
        sidebarOpen ? "opacity-100 z-50" : "opacity-0 -z-10"
      } bg-white px-4 py-6 shadow-lg md:hidden fixed top-0 right-0 h-screen w-[70%] transition-opacity duration-[1.5s] `}
    >
      <div className="flex justify-end mb-8">
        <button
          className="iconBtn"
          onClick={() => dispatch(setSidebarOpen(false))}
        >
          <XIcon className="h-7" />
        </button>
      </div>

      <div className="pb-7 border-b-2">
        {showMenuCategories ? (
          <div className="flex flex-col space-y-5">
            <MenuLink
              path=""
              name="Menu"
              width
              goBackIcon
              onClick={() => setShowMenuCategories(false)}
            />

            <MenuLink
              path="/menu"
              name="All Products"
              onClick={() => dispatch(setSidebarOpen(false))}
            />

            <MenuLink
              path="/menu/featured"
              name="Featured"
              onClick={() => dispatch(setSidebarOpen(false))}
            />

            <MenuLink
              path=""
              name="Previous Orders"
              onClick={() => dispatch(setSidebarOpen(false))}
            />

            <MenuLink
              path=""
              name="Favorite Products"
              onClick={() => dispatch(setSidebarOpen(false))}
            />
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <MenuLink
              path=""
              name="Menu"
              icon
              onClick={() => setShowMenuCategories(true)}
            />

            <MenuLink
              path=""
              name="Rewards"
              onClick={() => dispatch(setSidebarOpen(false))}
            />

            <MenuLink
              path=""
              name="Gift Cards"
              onClick={() => dispatch(setSidebarOpen(false))}
            />
          </div>
        )}
      </div>

      <div className="my-7">
        <div className="flex items-center space-x-5">
          {user && <LogoutBtn />}
        </div>
      </div>

      <FindUsBtn />
    </div>
  );
};

export default SideBar;
