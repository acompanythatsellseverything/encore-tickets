import CreatingJourneys from "@/app/components/CreatingJourneys";
import StayAhead from "@/app/components/StayAhead";
import JoinUs from "@/app/components/JoinUs";
// import Image from "next/image";




export default function Home() {

    return (
        <>
            <header className="px-20 relative bg-beige">
                {/*<div className="absolute w-full ">*/}
                {/*    <Image src={'/img/main/hero.png'} alt={'Hero img'} width={1440} height={766} className={'w-full h-auto'}/>*/}
                {/*</div>*/}
            </header>
            <main className="bg-beige h-12 w-full flex-1 ">
                <CreatingJourneys/>
                <StayAhead/>
                <JoinUs/>
            </main>
        </>
    );
}
