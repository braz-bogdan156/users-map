import SearchBar from "../../SearchBar/SearchBar";
import styles from "./SearchStatsBar.module.css";

export default function SearchStatsBar({
  query,
  setQuery,
  filteredCount,
  visibleCount,
}: {
  query: string;
  setQuery: (q: string) => void;
  filteredCount: number;
  visibleCount: number;
}) {
  return (
    <div className={styles.searchRow} style={{ padding: 10 }}>
      <SearchBar value={query} onChange={setQuery} onReset={() => setQuery("")} />
      <div style={{ flex: 1 }} />
      <div className={styles.stats}>
        <strong>Відфільтровано:</strong> {filteredCount} користувачів —{" "}
        <strong>Видимі:</strong> {visibleCount}
      </div>
    </div>
  );
}