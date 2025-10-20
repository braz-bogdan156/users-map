import { useEffect, useCallback } from "react";
import { useMap, useMapEvent } from "react-leaflet";
import L from "leaflet";

function BoundsListener({ onBounds }: { onBounds: (b: L.LatLngBounds) => void }) {
  const map = useMap();

  const updateBounds = useCallback(() => {
    const newBounds = map.getBounds();
    onBounds(newBounds);
  }, [map, onBounds]);

  useMapEvent("moveend", updateBounds);
  useMapEvent("zoomend", updateBounds);

  useEffect(() => {
    updateBounds();
  }, [updateBounds]);

  return null;
}

export default BoundsListener;