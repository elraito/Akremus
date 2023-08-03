import React from "react";

export const FooterCallout = () => {
  return (
    <div className="aspect-[4/1]">
      <div className="w-1/2 h-full mx-auto flex flex-col text-center justify-evenly gap-2">
        <div className="text-akrebrown">Tule ja korja ise</div>
        <div className="text-3xl">Sära nobedate näppude voorus</div>
        <div className="text-akrebrown">
          Mustikapõõsad asuvad metsa ääres ja neile pääseb ligi nii jala,
          lapsevankri kui ratastooliga. Kilo hind ise korjates: 10 EUR
        </div>
        <div className="bg-akrebrown h-[1px] w-full md:w-3/4 mx-auto" />
        <div className="mx-auto">
          <div className="border border-akrebrown rounded-full py-3 px-12 text-akrebrown hover:bg-akrebrown hover:text-white">
            Kirjuta meile
          </div>
        </div>
      </div>
    </div>
  );
};
