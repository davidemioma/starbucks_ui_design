import React from "react";

interface Props {
  image: string;
  title: string;
  info: string;
  btnText: string;
  background?: string;
  color?: string;
}

const Info = ({ image, title, info, btnText, background, color }: Props) => {
  return (
    <div
      className={`${
        background ? `bg-[${background}]` : "bg-[#d4e9e4]"
      } text-[#1e3932] ${color ? `text-[${color}]` : "text-black"}`}
    >
      <img className="w-full" loading="lazy" src={image} alt="" />

      <div className="flex flex-col items-center p-7 space-y-5">
        <h2 className="text-xl font-medium">{title}</h2>

        <p className="text">{info}</p>

        <button className="btnBorder font-medium">{btnText}</button>
      </div>
    </div>
  );
};

export default Info;
