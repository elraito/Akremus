import Image from 'next/image'
import React from 'react'

export const CoverBanner = () => {
    return (
        <div className="relative w-full aspect-[4/1.2]">
            <Image src="/cover.jpg" fill alt="Mustikad peos" className="object-cover" />
        </div>
    )
}