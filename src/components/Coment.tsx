import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from 'react'
import styles from "./Coment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment:string) => void;
}


export function Coment({ content, onDeleteComment }:CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.coment}>
      <Avatar hasBorder={false} src="https://github.com/RomeuRiffatti.png" />
      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Romeu Riffatti</strong>
              <time title="2022-01-03 12:00:45" dateTime="2022-01-03 12:00:45">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
