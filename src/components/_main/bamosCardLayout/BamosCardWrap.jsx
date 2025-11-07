import bamosList from "./bamosList.js";
import BamosCard from "./BamosCard.jsx";

export default function BamosCardWrap() {
    return (
        <div className="card-container">
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
