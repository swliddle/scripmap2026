import { ReactNode } from "react";
import { useFetchScripturesData } from "../ServerApi";
import { ScripturesDataContext } from "./ScripturesData";

export function ScripturesDataProvider({ children }: { children: ReactNode }) {
    const { books, isLoading, volumes } = useFetchScripturesData();

    return (
        <ScripturesDataContext.Provider value={{ books, isLoading, volumes }}>
            {children}
        </ScripturesDataContext.Provider>
    );
}
