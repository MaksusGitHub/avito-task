import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../utils/Api';
import Games from '../Games/Games';
import Preloader from '../Preloader/Preloader';

function App() {
  const [gameCards, setGameCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentCard, setCurrentCard] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    api.getGameCards().then((cards) => {
      setGameCards(cards);
    })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setIsLoading(false));
  }, [])

  const handleGameCardClick = (id) => {
    api.getSpecificGame(id).then((card) => {
      // setCurrentCard(card);
      
      localStorage.setItem('currentGame', JSON.stringify(card), 10);
      // 300000
    })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        navigate('/games');
    })
  }

  const handleSortingClick = (sortBy) => {
    api.getSortedGames(sortBy).then((cards) => {
      setGameCards(cards);
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => setIsLoading(false));
  }

  return (
    <div className="root">
      <Header />
      {isLoading ? (<Preloader />) : null}
      {!isLoading ?
        (
          <Routes>
            <Route
              path='/'
              element={
                <Main
                  gameCards={gameCards}
                  onGameCardClick={handleGameCardClick}
                  onSortingClick={handleSortingClick}
                />
              }
            />
            <Route
              path='/games'
              element={
                <Games
                // gameCard={currentCard}
                />
              }
            />
          </Routes>
        ) : null
      }
      <Footer />
    </div>
  );
}

export default App;
