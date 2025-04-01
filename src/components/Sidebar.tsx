import { Avatar } from "./Avatar.jsx";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1554177255-61502b352de3?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkZXMlMjBzb2NpYW9zfGVufDB8fDB8fHwy"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/RomeuRiffatti.png" />
        <strong>Romeu Riffatti</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
