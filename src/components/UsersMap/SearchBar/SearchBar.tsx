
import styles from "./SearchBar.module.css";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onReset: () => void;
};

export default function SearchBar({ value, onChange, onReset }: Props) {
  return (
    <div className={styles.searchRow}>
      <input
        className={styles.input}
        placeholder='Фільтр за інтересом (напр.: music)'
        aria-label="Фільтр за інтересом"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className={styles.reset} onClick={onReset} aria-label="Скинути фільтр">
        Скинути
      </button>
    </div>
  );
}