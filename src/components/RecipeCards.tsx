import Image from "next/image";
import React from "react";

export const RecipeCards = () => {
  return (
    <div className="w-full aspect-[7/2] grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-akregreen text-white grid grid-cols-1 sm:grid-cols-2">
        <div className="relative w-full aspect-[3/2] sm:aspect-auto">
          <Image
            src="/elvan-mess.jpg"
            alt="Väga maitsev magustoidu pilt"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-12 flex gap-7 flex-col">
          <div>Retseptid</div>
          <div className="text-3xl">Elvan mess</div>
          <div className="h-full">
            Siia tuleks lühikirjeldus sellest kuidas see magustoit maitseb ning
            või välja näeb
          </div>
          <div className="relative h-8">
            <Image src="/arrow-right.svg" fill alt="Edasi retsepti lehele" />
          </div>
        </div>
      </div>
      <div className="bg-akrepurple text-white grid grid-cols-1 sm:grid-cols-2">
        <div className="relative w-full aspect-[3/2] sm:aspect-auto">
          <Image
            src="/elvan-cupcakes.jpg"
            alt="Muffini laadne mustikaglasuuriga koogike"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-12 flex gap-7 flex-col">
          <div>Retseptid</div>
          <div className="text-3xl">Mustikamuffin</div>
          <div className="h-full">
            Siia tuleks lühikirjeldus sellest kuidas see magustoit maitseb ning
            või välja näeb
          </div>
          <div className="relative h-8">
            <Image src="/arrow-right.svg" fill alt="Edasi retsepti lehele" />
          </div>
        </div>
      </div>
    </div>
  );
};
