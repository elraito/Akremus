import Image from 'next/image'
import React from 'react'

export const CoverCallout = () => {
    return (
        <div className="bg-pink-200 w-full aspect-[2/1] grid grid-cols-3">
            <div className="flex flex-col justify-center align-middle text-center gap-6 w-3/4 ms-auto me-auto">
                <div className="text-akrebrown">Võta meiega ühendust</div>
                <div className="text-3xl tracking-wider">
                    <div>Soovid osta</div>
                    <div>mustikaid</div>
                </div>
                <div className="text-akredarkgray grid grid-cols-3 text-left">
                    <div>Telefon:</div><div>+372 5220 094</div><div>Merike</div>
                    <div>Telefon:</div><div>+372 5092 107</div><div>Kaija</div>
                    <div>Email:</div><div className="col-span-2 hover:underline">akremustikad@gmail.com</div>
                </div>
                <div className="mx-auto"><div className="border border-akrebrown text-akrebrown hover:text-white hover:bg-akrebrown rounded-full py-3 px-12">Kirjuta meile</div></div>
            </div>
            <div className="col-span-2 relative"><Image src="/fingers.png" fill alt="Näpud, nimetissõrme ja pöidla vahel mustikas" /></div>
        </div>
    )
}