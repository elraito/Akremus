import Image from "next/image";
import React from "react";

export const GrowBlock = () => {
  return (
    <div className="w-full aspect-[4/3] md:aspect-[2/1] relative ">
      <div className="bg-slate-800 bg-opacity-75 absolute z-[1] w-full aspect-[4/3] top-0 left-0 md:hidden" />
      <Image
        src="/bb-cover.jpg"
        alt="Mustikapõõsas alles valmivate marjadega"
        fill
        className="object-cover z-[0]"
      />

      <div className="absolute bottom-12 left-12 flex gap-3 flex-col z-[2]">
        <div className="text-white">Broneeri saaki</div>
        <div className="text-3xl text-white tracking-wider">
          Lisa ennast järjekorda saagivalmimisel
        </div>
        <div className="flex">
          <div className="text-white border border-white rounded-full py-3 px-12 bg-gray-600/[.7] hover:bg-akrebrown hover:border-akrebrown">
            Vaata hooaega
          </div>
        </div>
      </div>
    </div>
  );
};
