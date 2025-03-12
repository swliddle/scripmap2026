import { useOutlet } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

export function Navigation() {
    // const { isLoading } = useScripturesDataContext();
    const isLoading = false;

    const currentOutlet = useOutlet();

    return isLoading ? <LoadingIndicator /> : <div>{currentOutlet}</div>;
}
