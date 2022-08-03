import React from "react";
import FadeBox from "./FadeBox";

interface Props {
  text: string;
}

const Headings = ({ text }: Props) => {
  return (
    <FadeBox>
      <section className="py-10 flex justify-center item-center">
        <h1 className="text-[#1e3932] uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl">
          {text}
        </h1>
      </section>
    </FadeBox>
  );
};

export default Headings;
