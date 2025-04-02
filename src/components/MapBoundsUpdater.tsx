import { useMap } from "@vis.gl/react-google-maps";
import { useScripturesDataContext } from "../context/ScripturesDataContextHook";
import { useEffect } from "react";
import { GeoPlace } from "../Types";

const VIEW_ALTITUDE_DEFAULT = 5000;
const VIEW_ALTITUDE_CONVERSION_RATIO = 591657550.5;
const VIEW_ALTITUDE_ZOOM_ADJUST = -2;
const ZOOM_RATIO = 450;

const boundsForCurrentMarkers = function (geoplaces: GeoPlace[]): google.maps.LatLngBounds {
    const bounds = new google.maps.LatLngBounds();

    geoplaces.forEach((place) => {
        bounds.extend({ lat: place.latitude, lng: place.longitude });
    });

    return bounds;
};

const zoomLevelForAltitude = function (viewAltitude: number): number {
    let zoomLevel = viewAltitude / ZOOM_RATIO;

    if (viewAltitude !== VIEW_ALTITUDE_DEFAULT) {
        zoomLevel =
            Math.log2(VIEW_ALTITUDE_CONVERSION_RATIO / viewAltitude) + VIEW_ALTITUDE_ZOOM_ADJUST;
    }

    return zoomLevel;
};

export function MapBoundsUpdater() {
    const map = useMap();
    const { focusedGeoplace, geoplaces } = useScripturesDataContext();

    useEffect(() => {
        if (!map || typeof google === "undefined" || !google.maps || !google.maps.LatLngBounds) {
            // Ignore -- the map or API isn't fully loaded
            return;
        }

        if (focusedGeoplace) {
            map.setCenter({ lat: focusedGeoplace.latitude, lng: focusedGeoplace.longitude });
            map.setZoom(zoomLevelForAltitude(focusedGeoplace.viewAltitude));
        } else if (geoplaces && Object.keys(geoplaces).length > 0) {
            const places = Object.values(geoplaces);

            if (places.length <= 1) {
                map.setCenter({ lat: places[0].latitude, lng: places[0].longitude });
                map.setZoom(zoomLevelForAltitude(places[0].viewAltitude));
            } else {
                map.fitBounds(boundsForCurrentMarkers(places));
            }
        }
    }, [focusedGeoplace, geoplaces, map]);

    return null;
}
