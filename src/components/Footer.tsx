import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full md:aspect-[6/1] md:max-h-96 mt-6 bg-akregreen px-6 md:px-24 py-6 md:py-12 text-white">
      <div className="grid md:grid-cols-4">
        <div>AkreMus</div>
        <div className="flex flex-col gap-6">
          <div>
            Väike-Raudsepa, Pastaku küla, Elva vald, Tartu maakond, 67512
          </div>
          <div className="flex flex-col">
            <div>+372 5220 094 - Merike</div>
            <div> +372 5092 107 - Kaija</div>
            <div> akremustikad@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-6 flex-col">
          <div>Avaleht</div>
          <div>Retseptid</div>
          <div>Asukoht</div>
        </div>
        <div className="flex flex-col gap-12">
          <div>Jälgi meid sotsiaalmeedias</div>
          <div className="flex gap-6 place-content-center md:place-content-start">
            <div className="relative h-12 aspect-square">
              <Image
                src="/footer-facebook.svg"
                fill
                alt="Facebook"
                className="p-2 border border-white rounded-full"
              />
            </div>
            <div className="relative h-12 aspect-square">
              <Image
                src="/footer-instagram.svg"
                fill
                alt="Facebook"
                className="p-2 border border-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
