import React, { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import './Main.css'

function Main(props) {
  const { gameCards, onGameCardClick, onSortingClick } = props;
  const [genre, setGenre] = useState('all');
  const [platform, setPlatform] = useState('all');
  const [sortBy, setSortBy] = useState('release_date');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(gameCards);
  }, [gameCards]);

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  }

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  }

  const handleSortingChange = (e) => {
    setSortBy(e.target.value);
    onSortingClick(e.target.value);
  }

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (genre === 'all' && platform === 'all') {
      setCards(gameCards);
    } else if (genre === 'all' && platform !== 'all') {
      setCards(gameCards.filter((card) => card.platform === platform));
    } else if (genre !== 'all' && platform === 'all') {
      setCards(gameCards.filter((card) => card.genre.toLowerCase() === genre));
    } else {
      setCards(gameCards.filter((card) => (card.genre.toLowerCase() === genre && card.platform === platform)));
    }
  }

  return (
    <main className='root'>
      <section className='sorting-section'>
        <form className='sort-form' onSubmit={handleFilterSubmit}>
          <label className='sort-form__option'>
            <span className='sort-form__option-name'>Выберите жанр:</span>
            <select className='sort-form__select' value={genre} onChange={handleGenreChange}>
              <option value='all'>All</option>
              <option value='mmorpg'>MMORPG</option>
              <option value='shooter'>Shooter</option>
              <option value='strategy'>Strategy</option>
              <option value='moba'>MOBA</option>
              <option value='racing'>Racing</option>
              <option value='sports'>Sports</option>
              <option value='social'>Social</option>
              <option value='mmo'>MMO</option>
              <option value='fantasy'>Fantasy</option>
              <option value='fighting'>Fighting</option>
              <option value='action rpg'>Action RPG</option>
              <option value='battle royale'>Battle Royale</option>
              <option value='card game'>Card Game</option>
            </select>
          </label>
          <label className='sort-form__option'>
            <span>Выберите платформу:</span>
            <select className='sort-form__select' value={platform} onChange={handlePlatformChange}>
              <option value='all'>All</option>
              <option value='PC (Windows)'>PC</option>
              <option value='Web Browser'>Browser</option>
            </select>
          </label>
          {/* <input type='submit' value='Отфильтровать'></input> */}
        </form>
        <form className='sort-form'>
          <label className='sort-form__option'>
            <span>Сортировка:</span>
            <select className='sort-form__select' value={sortBy} onChange={handleSortingChange}>
              <option value='release_date'>Дата релиза</option>
              <option value='popularity'>Популярность</option>
              <option value='alphabetical'>По алфавиту</option>
              <option value='relevance'>По соответствию</option>
            </select>
          </label>
        </form>
      </section>
      <section className='game-cards' aria-label='Игровые карточки'>
        {
          cards.map((card) => {
            return <GameCard
              key={card.id}
              gameCard={card}
              onGameCardClick={onGameCardClick}
            />
          })
        }
      </section>
    </main>
  )
}

export default Main;