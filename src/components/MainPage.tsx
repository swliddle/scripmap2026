import LoadingIndicator from "./LoadingIndicator";

function Header() {
    return <div>Header</div>;
}

function Navigation() {
    return <div>Navigation</div>;
}

function MapDisplay() {
    return <div>MapDisplay</div>;
}

export default function MainPage({ isLoading }: { isLoading: boolean }) {
    return (
        <>
            <Header />
            {isLoading ? <LoadingIndicator /> : <Navigation />}
            <MapDisplay />
        </>
    );
}
