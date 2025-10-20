import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ResizeFixer() {
  const map = useMap();

  useEffect(() => {
    const timeout = setTimeout(() => {
      map.invalidateSize();
    }, 400); 
    return () => clearTimeout(timeout);
  }, [map]);

  return null;
}

export default ResizeFixer;