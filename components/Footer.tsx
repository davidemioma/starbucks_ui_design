import React, { useState } from "react";
import Accordion from "./Accordion";

const Footer = () => {
  const [expanded, setExpanded] = useState();

  return (
    <>
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="About Us"
        i={0}
        link1="Our Heritage"
        link2="Our Coffee"
        link3="Stories and News"
        link4="Investor Relations"
        link5="Policies and Standards"
        link6="Customer Service"
      />

      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Careers"
        i={1}
        link1="Culture and Values"
        link2="Inclusion, Diversity, and Equity"
        link3="College Achievement Plan"
        link4="U.S. Careers"
        link5="International Careers"
      />

      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Social Impact"
        i={2}
        link1="Ethical Sourcing"
        link2="Leading in Sustainability"
        link3="Strengthening Communities"
        link4="Creating Oppurtunities"
        link5="Global Social Impact Report"
      />

      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="For Business Partners"
        i={3}
        link1="Landlord Support Center"
        link2="Suppliers"
        link3="Corporate Gift Card Sales"
        link4="Office and Foodservice Coffee"
      />

      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Order and Pickup"
        i={4}
        link1="Order on the App"
        link2="Order on the Web"
        link3="Delivery"
        link4="Order and Pickup Options"
        link5="Explore and Find Coffee for Home"
      />
    </>
  );
};

export default Footer;
