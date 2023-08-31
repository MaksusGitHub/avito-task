import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Games.css'

function Games() {
  const gameCard = JSON.parse(localStorage.getItem('currentGame'));

  const navigate = useNavigate();

  useEffect(() => {
    if (gameCard === null) {
      navigate('/', { replace: true });
    }
  }, [gameCard, navigate])

  const handleBackBtnClick = () => {
    navigate('/');
  }

  return (
    <section className="specific-game" aria-label='Текущая карточка игры'>
      <button className='specific-game__back-btn' onClick={handleBackBtnClick}>	&larr; Назад</button>
      <img className="specific-game__picture" src={gameCard.thumbnail} alt={gameCard.title} />
      <h2 className="specific-game__title">{gameCard.title}</h2>
      <p className='specific-game__short-description'>{gameCard.short_description}</p>
      <h3 className="specific-game__article-heading">Additional Information</h3>
      <ul className='specific-game__article'>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Developer</h4>
          <p className="specific-game__parameter-value">{gameCard.developer}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Publisher</h4>
          <p className="specific-game__parameter-value">{gameCard.publisher}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Genre</h4>
          <p className="specific-game__parameter-value">{gameCard.genre}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Release Date</h4>
          <p className="specific-game__parameter-value">{gameCard.release_date}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Platform</h4>
          <p className="specific-game__parameter-value">{gameCard.platform}</p>
        </li>
      </ul>
      <h3 className="specific-game__article-heading">{gameCard.title} Screenshots</h3>
      <ul className="specific-game__article">
      {
          gameCard.screenshots.map((screenshot) => {
            return (
              <li className="specific-game__screenshot-item" key={screenshot.id}>
                <img className='specific-game__screenshot' src={screenshot.image} alt={screenshot.id}></img>
              </li>
            )
          })
        }
      </ul>
      <h3 className="specific-game__article-heading">Minimum System Requirements</h3>
      <ul className="specific-game__article">
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">OS</h4>
          <p className="specific-game__parameter-value">{gameCard.minimum_system_requirements.os}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Processor</h4>
          <p className="specific-game__parameter-value">{gameCard.minimum_system_requirements.processor}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Memory</h4>
          <p className="specific-game__parameter-value">{gameCard.minimum_system_requirements.memory}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Storage</h4>
          <p className="specific-game__parameter-value">{gameCard.minimum_system_requirements.storage}</p>
        </li>
        <li className="specific-game__parameter-container">
          <h4 className="specific-game__parameter-title">Graphics</h4>
          <p className="specific-game__parameter-value">{gameCard.minimum_system_requirements.graphics}</p>
        </li>
      </ul>
    </section>
  )
}

export default Games;