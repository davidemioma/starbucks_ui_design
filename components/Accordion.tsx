import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import ContentPlaceholder from "./ContentPlaceholder";

interface Props {
  i: number;
  expanded: any;
  setExpanded: any;
  linkHeading: string;
  link1: string;
  link2?: string;
  link3?: string;
  link4?: string;
  link5?: string;
  link6?: string;
}

const Accordion = ({
  i,
  expanded,
  setExpanded,
  linkHeading,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}: Props) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        className="cursor-pointer flex justify-between items-center mb-10 px-10"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <p className="text-lg tracking-wider">{linkHeading}</p>

        <div>
          {isOpen ? (
            <ChevronUpIcon className="h-7 cursor-pointer" />
          ) : (
            <ChevronDownIcon className="h-7 cursor-pointer" />
          )}
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="overflow-hidden"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder
              link1={link1}
              link2={link2}
              link3={link3}
              link4={link4}
              link5={link5}
              link6={link6}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
