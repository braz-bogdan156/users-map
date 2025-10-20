import { useMemo, useState } from "react";
import type { UserMapViewProps } from "../../../types/types";

import { useDebounce } from "../../../hooks/useDebounce";

import { buildInterestIndex } from "../../../utils/buildInterestIndex";
import { filterUsers } from "../../../utils/filterUsers";

import BoundsListener from "./BoundsListener/BoundsListener";
import SearchStatsBar from "./SearchStatsBar/SearchStatsBar";
import MarkerCluster from "./MarkerCluster/MarkerCluster";

export default function UsersMapView({ users }: UserMapViewProps) {
  const [query, setQuery] = useState("");
  const [bounds, setBounds] = useState<L.LatLngBounds | null>(null);

  const debounced = useDebounce(query, 220);
  const q = useMemo(() => debounced.trim().toLowerCase(), [debounced]);
  const interestIndex = useMemo(() => buildInterestIndex(users), [users]);

  const { filteredIndices, visibleUsers } = useMemo(
    () => filterUsers(users, interestIndex, q, bounds),
    [users, interestIndex, q, bounds]
  );

  return (
    <>
      <SearchStatsBar
        query={query}
        setQuery={setQuery}
        filteredCount={filteredIndices.length}
        visibleCount={visibleUsers.length}
      />
      <BoundsListener onBounds={(b) => {
        setBounds(prev => {
          if (!prev || !prev.equals(b)) {
            return b;
          }
          return prev;
        });
      }} />
      <MarkerCluster visibleUsers={visibleUsers} />
    </>
  );
}