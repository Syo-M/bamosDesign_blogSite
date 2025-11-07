import ThumbsUpDownButton from "./ThumbsUpDownButton";

// components/BamosCard.jsx
export default function BamosCard({ author, title, category, image, thumbsUp, thumbsDown }) {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={image} alt={title} className="card-image" />
            </div>

            <div className="cardBody">
                <div className="cardHedings">
                    <h3 className="cardTitle">{`[${category}] ${title}`}</h3>
                    <p className="cardAuthor">{author}</p>
                </div>

                <div className="cardStats">
                    <ThumbsUpDownButton init={thumbsUp} GorB={true} />
                    <ThumbsUpDownButton init={thumbsDown} GorB={false} />
                </div>
            </div>
        </div>
    );
}
