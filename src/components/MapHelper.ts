/*======================================================================
 * FILE:    MapHelper.ts
 * AUTHOR:  Stephen W. Liddle
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Module to support the Google Maps API.
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { GeoPlaces, GeoPlace } from "../Types";

/*----------------------------------------------------------------------
 *                      CONSTANTS
 */
const LAT_LON_PARSER = /showLocation\(([0-9]*),'([^']*)',([^,]*),([^,]*),([^,]*),'([^']*)'\)/g;

/*----------------------------------------------------------------------
 *                      PRIVATE HELPERS
 */
function mergePlacename(geoplace: GeoPlace, name: string) {
    if (!geoplace.placename.includes(name)) {
        geoplace.placename += `, ${name}`;
    }
}

function placenameWithFlag(name: string, flag?: string) {
    let placename = name;

    if (flag && flag.length > 0) {
        placename += ` ${flag}`;
    }

    return placename;
}

/*----------------------------------------------------------------------
 *                      PUBLIC FUNCTIONS
 */
export default function extractGeoplaces(html: string): GeoPlaces {
    const uniqueGeoplaces: GeoPlaces = {};

    try {
        for (const match of html.matchAll(LAT_LON_PARSER)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, __, name, latitude, longitude, viewAltitude, flag] = match;
            const placename = placenameWithFlag(name, flag);
            const key = `${latitude}|${longitude}`;
            const value = {
                latitude: Number(latitude),
                longitude: Number(longitude),
                placename,
                viewAltitude: Number(viewAltitude)
            };

            if (uniqueGeoplaces[key] !== undefined) {
                mergePlacename(uniqueGeoplaces[key], name);
            } else {
                uniqueGeoplaces[key] = value;
            }
        }
    } catch (error) {
        console.error("Error parsing location data:", error);
        throw error;
    }

    return uniqueGeoplaces;
}
