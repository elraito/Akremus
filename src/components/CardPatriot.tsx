import Image from 'next/image'
import React from 'react'

export const CardPatriot = () => {
    return (
        <div className="bg-akrepurple text-white w-full aspect-[4/3] grid grid-cols-2 p-3 pt-10 px-10">
            <div className="relative aspect-square"><Image src="/card-patriot.svg" fill alt="Mustikas" /></div>
            <div />
            <div className="flex gap-3 flex-col col-span-2 text-right justify-center">
                <div className="text-3xl tracking-widest">Patriot</div>
                <div className="flex flex-col text-xl tracking-widest font-light">
                    <div>Väga suured ja efektsed marjad</div>
                    <div>nt tortide kaunistamiseks</div>
                </div>
            </div>
        </div >
    )
}