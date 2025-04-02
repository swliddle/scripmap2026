/*======================================================================
 * FILE:    ScripturesDataProvider.tsx
 * AUTHOR:  Stephen W. Liddle
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Provider component of our context pattern.
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { ReactNode, useState } from "react";
import { useFetchScripturesData } from "../ServerApi";
import { ScripturesDataContext } from "./ScripturesData";
import { GeoPlace, GeoPlaces } from "../Types";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function ScripturesDataProvider({ children }: { children: ReactNode }) {
    const { books, isLoading, volumes } = useFetchScripturesData();
    const [focusedGeoplace, setFocusedGeoplace] = useState(null as GeoPlace | null);
    const [geoplaces, setGeoplaces] = useState(null as GeoPlaces | null);

    return (
        <ScripturesDataContext
            value={{
                books,
                focusedGeoplace,
                geoplaces,
                isLoading,
                setFocusedGeoplace,
                setGeoplaces,
                volumes
            }}
        >
            {children}
        </ScripturesDataContext>
    );
}
