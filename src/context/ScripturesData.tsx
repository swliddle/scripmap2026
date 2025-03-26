/*======================================================================
 * FILE:    ScripturesData.tsx
 * AUTHOR:  Stephen W. Liddle
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Variable for holding the context of our React app.
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { createContext } from "react";
import { ScripturesContextType } from "../Types";

/*----------------------------------------------------------------------
 *                      PUBLIC VARIABLE
 */
export const ScripturesDataContext = createContext<ScripturesContextType | null>(null);
