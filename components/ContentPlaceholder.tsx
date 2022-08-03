import React from "react";
import { motion } from "framer-motion";

interface WordProp {
  link?: string;
}

interface PProps {
  link1: string;
  link2?: string;
  link3?: string;
  link4?: string;
  link5?: string;
  link6?: string;
}

const Word = ({ link }: WordProp) => (
  <p className="text-black/50 font-medium">{link}</p>
);

const Paragraph = ({ link1, link2, link3, link4, link5, link6 }: PProps) => (
  <div className="mb-6 flex flex-col gap-6">
    <Word link={link1} />
    <Word link={link2} />
    <Word link={link3} />
    <Word link={link4} />
    <Word link={link5} />
    <Word link={link6} />
  </div>
);

const ContentPlaceholder = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}: PProps) => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="pb-4 px-10"
    >
      <Paragraph
        link1={link1}
        link2={link2}
        link3={link3}
        link4={link4}
        link5={link5}
        link6={link6}
      />
    </motion.div>
  );
};

export default ContentPlaceholder;
