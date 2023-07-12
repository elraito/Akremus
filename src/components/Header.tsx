import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col pt-28 pb-14 gap-4 items-center text-cente">
      <div className="text-akrebrown text-xl">AkreMus</div>
      <div className="text-xl md:text-3xl lg:text-6xl">
        Magusad kultuurmustikad
      </div>
      <div className="text-xl md:text-3xl lg:text-6xl">
        Tartumaa metsaveerelt
      </div>
    </div>
  );
};
