import { use } from "react";
import { ScripturesContextType } from "../Types";
import { ScripturesDataContext } from "./ScripturesData";

export function useScripturesDataContext(): ScripturesContextType {
    const context = use(ScripturesDataContext);

    if (!context) {
        throw new Error("useScripturesDataContext must be used within a ScripturesDataProvider");
    }

    return context;
}
