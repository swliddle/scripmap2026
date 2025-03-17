import Header from "./Header";
import { Navigation } from "./Navigation";

function MapDisplay() {
    return <section className="MapDisplay">MapDisplay</section>;
}

export default function MainPage() {
    return (
        <main>
            <Header />
            <Navigation />
            <MapDisplay />
        </main>
    );
}
