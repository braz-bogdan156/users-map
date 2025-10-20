import { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import styles from "./UsersMap.module.css";
import UsersMapView from "./UsersMapView/UsersMapView";
import type { User } from "../../types/types";
import ResizeFixer from "./ResizeFixer/ResizeFixer";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function UsersMapShell({ usersJsonPath = "/users.json" }: { usersJsonPath?: string }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Compute centre from current visible (fallback to world)
  const center = useMemo(() => {
    if (users.length === 0) return [50.45, 30.52] as [number, number];
    // use overall center (not only visible) to avoid jumps; can change if needed
    let lat = 0,
      lon = 0;
    users.forEach((u) => {
      lat += u.lat;
      lon += u.lon;
    });
    return [lat / users.length, lon / users.length] as [number, number];
  }, [users]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const res = await fetch(usersJsonPath);
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const data = (await res.json()) as unknown as User[];

        const mapped: User[] = data.map((d, i) => ({
          id: d.id ?? i,
          name: d.name ?? `User ${i}`,
          lat: Number(d.lat),
          lon: Number(d.lon),
          interests: Array.isArray(d.interests) ? d.interests.map(String) : [],
        }));

        if (!cancelled) setUsers(mapped);
      } catch (e) {
  if (!cancelled) {
    const message = e instanceof Error ? e.message : String(e);
    setError(message);
  }
} finally {
  if (!cancelled) setLoading(false);
}
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [usersJsonPath]);

  if (loading) return <div className={styles.container}>Завантаження даних користувачів...</div>;
  if (error) return <div className={styles.container}>Помилка: {error}</div>;
  if (users.length === 0) return <div className={styles.container}>Нема користувачів для відображення</div>;

  return (
    <div className={styles.container}>
      <MapContainer center={center} zoom={2} style={{ flex: 1 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ResizeFixer />
        <UsersMapView users={users} />
      </MapContainer>
    </div>
  );
}