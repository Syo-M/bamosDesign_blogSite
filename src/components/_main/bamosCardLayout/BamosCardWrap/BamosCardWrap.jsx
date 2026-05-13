import bamosList from "../bamosList.js";
import BamosCard from "../BamosCard/BamosCard.jsx";
import styles from "./BamosCardWrap.module.css";

export default function BamosCardWrap() {
    return (
        <div className={styles.cardContainer}>
            {bamosList.map((item, index) => (
                <BamosCard
                    key={index}
                    author={item.author}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    thumbsUp={item.thumbsUp}
                    thumbsDown={item.thumbsDown}
                />
            ))}
        </div>
    );
}
