import React from "react";
import { Fade } from "react-awesome-reveal";

interface Props {
  children: React.ReactNode;
}

const FadeBox = ({ children }: Props) => {
  return <Fade>{children}</Fade>;
};

export default FadeBox;
