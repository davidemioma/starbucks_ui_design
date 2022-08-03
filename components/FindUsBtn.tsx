import React from "react";

import { LocationMarkerIcon } from "@heroicons/react/solid";

const FindUsBtn = () => {
  return (
    <button className="flex text-sm items-center space-x-1.5 hover:text-[#008248]">
      <LocationMarkerIcon className="h-5" />

      <p className="font-medium whitespace-nowrap tracking-wider">
        Find a store
      </p>
    </button>
  );
};

export default FindUsBtn;
