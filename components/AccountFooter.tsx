import React from "react";
import FindUsBtn from "./FindUsBtn";

const AccountFooter = () => {
  return (
    <div className="max-w-[310px] md:max-w-[450px] flex flex-col items-start">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16">
        <FindUsBtn />

        <div className="flex-col text-sm sm:text-base tracking-wider space-y-3">
          <p className="cursor-pointer">Responsibility</p>

          <p className="cursor-pointer">Web Accessibility</p>

          <p className="cursor-pointer">Privacy Policy</p>

          <p className="cursor-pointer">Terms of Use</p>

          <p className="cursor-pointer">Cookie Preferences</p>
        </div>
      </div>

      <p className="mt-6 text-sm sm:text-base tracking-wider">
        © 2021 Starbucks
      </p>
    </div>
  );
};

export default AccountFooter;
