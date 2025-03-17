import { useOutlet } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import { useScripturesDataContext } from "../context/ScripturesDataContextHook";
import "./Navigation.css";

export function Navigation() {
    const { books, isLoading, volumes } = useScripturesDataContext();
    console.log(books, isLoading, volumes);

    const currentOutlet = useOutlet();

    return (
        <nav className="container">
            {isLoading ? <LoadingIndicator /> : <div className="nav-content">{currentOutlet}</div>}
        </nav>
    );
}
