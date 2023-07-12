import Image from "next/image";
import React from "react";

export const CardNorthblue = () => {
  return (
    <div className="bg-akrepurple text-white w-full aspect-[4/3] grid grid-cols-2 p-3 pt-10 px-10">
      <div className="relative aspect-square">
        <Image src="/card-northblue.svg" fill alt="Kook" />
      </div>
      <div />
      <div className="flex gap-3 flex-col col-span-2 text-right justify-center">
        <div className="text-xl md:text-3xl tracking-widest">Northblue</div>
        <div className="text-sm md:text-xl flex flex-col tracking-widest font-light">
          <div>Maitselt magusaim & hea</div>
          <div>külmutamiseks</div>
        </div>
      </div>
    </div>
  );
};
