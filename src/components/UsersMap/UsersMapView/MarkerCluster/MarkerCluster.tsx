import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MarkerPopup from "../MarkerPopup/MarkerPopup";
import type { User } from "../../../../types/types";

import "./MarkerCluster.css";
import L from "leaflet";

const clusterOptions: L.MarkerClusterGroupOptions = {
  showCoverageOnHover: false,
  spiderfyOnMaxZoom: true,
  zoomToBoundsOnClick: true,
  disableClusteringAtZoom: 16,
  };
  const userIcon = (label: string) =>
  L.divIcon({
    html: `<div class="user-marker">${label}</div>`,
    className: "custom-user-marker",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

export default function MarkerCluster({ visibleUsers }: { visibleUsers: User[] }) {
  return (
    <MarkerClusterGroup chunkedLoading {...clusterOptions}>
      {visibleUsers.map((u) => (
        <Marker 
        key={u.id} 
        position={[u.lat, u.lon] as L.LatLngExpression}
        icon={userIcon(u.name[0])}>
        <Popup>
        <MarkerPopup user={u} />
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
}