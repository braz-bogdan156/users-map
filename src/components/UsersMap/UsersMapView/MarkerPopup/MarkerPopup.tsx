import type { User } from "../../../../types/types";
import styles from "./MarkerPopup.module.css";

export default function MarkerPopup({ user }: { user: User }) {
  return (
    <div style={{ minWidth: 200 }}>
      <h4 style={{ margin: 0 }}>{user.name}</h4>
      <div style={{ marginTop: 8 }}>
        {user.interests.slice(0, 12).map((t) => (
          <span key={t} className={styles.popupTag}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}