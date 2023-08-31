import { useNavigate } from 'react-router-dom';
import './GameCard.css'

function GameCard(props) {
  const { gameCard, onGameCardClick } = props;
  // const navigate = useNavigate();


  const handleGameCardClick = () => {
    onGameCardClick(gameCard.id);
    // navigate('/games');
  }
  return (
    <article className="card">
      <img className="card__picture" src={gameCard.thumbnail} onClick={handleGameCardClick} alt={gameCard.title} />
      <h2 className="card__title">{gameCard.title}</h2>
      <ul className='card__extra-info'>
        <li className="card__publisher">{gameCard.publisher}</li>
        <li className="card__genre">{gameCard.genre}</li>
        <li className="card__release-date">{gameCard.release_date}</li>
      </ul>
    </article>
  )
}

export default GameCard;