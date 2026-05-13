import ThumbsUpDownButton from "../ThumbsUpDownButton/ThumbsUpDownButton";
import styles from "./BamosCard.module.css";

// components/BamosCard.jsx
export default function BamosCard({ author, title, category, image, thumbsUp, thumbsDown }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={image} alt={title} className={styles.cardImage} />
            </div>

            <div className={styles.cardBody}>
                <div className={styles.cardHedings}>
                    <h3 className={styles.cardTitle}>{`[${category}] ${title}`}</h3>
                    <p className={styles.cardAuthor}>{author}</p>
                </div>

                <div className={styles.cardStats}>
                    <ThumbsUpDownButton init={thumbsUp} GorB={true} />
                    <ThumbsUpDownButton init={thumbsDown} GorB={false} />
                </div>
            </div>
        </div>
    );
}
