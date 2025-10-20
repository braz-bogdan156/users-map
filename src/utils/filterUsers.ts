import type { User } from "../types/types";


export function filterUsers(
  users: User[],
  interestIndex: Map<string, number[]>,
  q: string,
  bounds: L.LatLngBounds | null
) {
  const filteredIndices = q
    ? interestIndex.get(q)?.slice() ?? []
    : users.map((_, i) => i);

  const visibleUsers = !bounds
    ? filteredIndices.map((i) => users[i])
    : filteredIndices
        .map((i) => users[i])
        .filter((u) => bounds.contains([u.lat, u.lon] as L.LatLngExpression));

  return { filteredIndices, visibleUsers };
}