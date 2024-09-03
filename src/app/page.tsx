
import CreatingJourneys from "@/app/components/CreatingJourneys";
import StayAhead from "@/app/components/StayAhead";




export default function Home() {

    return (
        <>
            <header className="px-20 py-3 relative">
                <div className="absolute w-full "></div>
            </header>
            <main className="bg-beige h-12 w-full flex-1">
                <CreatingJourneys/>
                <StayAhead/>
            </main>
            <footer></footer>
        </>
    );
}
