import './Card.css'

interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
    return (
        <div className="card">
            <img src={image} alt="Card" />
        </div>
    );
};

export default Card;
