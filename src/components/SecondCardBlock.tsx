import React from 'react'
import Image from 'next/image'

export const SecondCardBlock = () => {
    return (
        <div className="w-full text-center aspect-[4/1] flex flex-col justify-evenly">
            <div className="grid h-1/4 grid-cols-3">
                <div className="relative"><Image src="/card-circleheart.svg" fill alt="Süda trikolooriga" /></div>
                <div className="relative"><Image src="/card-trees.svg" fill alt="Ikoon kahe puuga" /></div>
                <div className="relative"><Image src="/card-handpicked.svg" fill alt="Kaks kätt hoidmas istikut kahevahel" /></div>
            </div>

            <div className="grid grid-cols-3 h-1/4">
                <div className="text-3xl">Eesti Toodang</div>
                <div className="text-3xl">Puhtast loodusest</div>
                <div className="text-3xl">Käsitsi korjatud</div>

                <div className="text-akredarkgray">Pererahva, tolmendajate mesilase ning mustikavaht Lotte valvsa pilgu all puhas Eesti toodang</div>
                <div className="text-akredarkgray">Meie kultuurmustikad on kasvanud puhtas keskkonnas metsaveerel asuvas istanduses.</div>
                <div className="text-akredarkgray">Tule ka ise korjama!</div>
            </div>
        </div>
    )
}