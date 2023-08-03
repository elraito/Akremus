import React from "react";
import Image from "next/image";

export const SecondCardBlock = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-3 my-6">
      <div className="w-full flex flex-col place-items-center gap-5">
        <Image
          src="/card-circleheart.svg"
          alt="Süda trikolooriga"
          width={96}
          height={96}
        />
        <div className="text-3xl text-center">Eesti toodang</div>
        <div className="text-akredarkgray text-center">
          Pererahva, tolmendajate mesilase ning mustikavaht Lotte valvsa pilgu
          all puhas Eesti toodang
        </div>
      </div>
      <div className="w-full flex flex-col place-items-center gap-5">
        <Image
          src="/card-trees.svg"
          alt="Ikoon kahe puuga"
          width={96}
          height={96}
        />
        <div className="text-3xl text-center">Puhtast loodusest</div>
        <div className="text-akredarkgray text-center">
          Meie kultuurmustikad on kasvanud puhtas keskkonnas metsaveerel asuvas
          istanduses.
        </div>
      </div>
      <div className="w-full flex flex-col place-items-center gap-5">
        <Image
          src="/card-handpicked.svg"
          alt="Kahes käes istik"
          width={96}
          height={96}
        />
        <div className="text-3xl text-center">Käsitsi korjatud</div>
        <div className="text-akredarkgray text-center">
          Tule ka ise korjama!
        </div>
      </div>
    </div>
  );
};
