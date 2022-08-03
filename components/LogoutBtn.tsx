import React from "react";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const LogoutBtn = () => {
  const router = useRouter();

  const logoutHandler = async () => {
    await auth.signOut().then(() => router.push("/"));
  };

  return (
    <button
      className="py-1.5 px-4 border text-sm border-black rounded-full font-medium hover:bg-gray-100 tracking-wider"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
