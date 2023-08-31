class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getGameCards() {
    return fetch(`${this._url}/games`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => this._checkStatus(res))
  }

  getSpecificGame(gameId) {
    return fetch(`${this._url}/game?id=${gameId}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => this._checkStatus(res))
  }

  getSortedGames(sortBy) {
    return fetch(`${this._url}/games?sort-by=${sortBy}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => this._checkStatus(res))
  }
}

const api = new Api({
  url: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '6da2b7c873mshfae8c3c136308ccp1f389ajsn02b65d5d1969',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
});

export default api;