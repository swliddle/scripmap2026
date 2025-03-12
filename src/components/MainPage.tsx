import { Navigation } from "./Navigation";

function Header() {
    return <div>Header</div>;
}

function MapDisplay() {
    return <div>MapDisplay</div>;
}

export default function MainPage() {
    return (
        <>
            <Header />
            <Navigation />
            <MapDisplay />
        </>
    );
}
