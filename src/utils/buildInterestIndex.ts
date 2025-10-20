import type { User } from "../types/types";

export function buildInterestIndex(users: User[]) {
  const map = new Map<string, number[]>();
  users.forEach((u, idx) =>
    u.interests.forEach((t) => {
      const key = String(t).trim().toLowerCase();
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(idx);
    })
  );
  return map;
}