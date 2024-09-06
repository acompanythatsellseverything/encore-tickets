import CreatingJourneys from "@/app/components/CreatingJourneys";
import StayAhead from "@/app/components/StayAhead";
import JoinUs from "@/app/components/JoinUs";
import Image from "next/image";
import React from "react";


export default function Home() {

    return (
        <>

            <main className="bg-beige w-full flex-1 ">
                <div>
                    <Image src={'/img/main/hero.png'} alt={'Hero img'} width={1440} height={766}
                           className={'w-full h-[96vh]'}/>
                </div>
                <CreatingJourneys/>
                <StayAhead/>
                <JoinUs/>
            </main>
        </>
    );
}
