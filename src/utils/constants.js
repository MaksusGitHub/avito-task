const BASE_URL = 'https://api.nomoreparties.co';
const EMAIL_REG = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
const SERVER_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const DESKTOP_SCREEN_WIDTH = 1279;
const TABLET_SCREEN_WIDTH = 600;
const DESKTOP_AMOUNT_CARDS = 12;
const TABLET_AMOUNT_CARDS = 8;
const MOBILE_AMOUNT_CARDS = 5;
const DESKTOP_SHOWCARD_STEP = 3;
const TABLET_SHOWCARD_STEP = 2;
const SHORT_MOVIE_LENGTH = 40;

module.exports = {
  BASE_URL,
  EMAIL_REG,
  SERVER_ERROR,
  DESKTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  DESKTOP_AMOUNT_CARDS,
  TABLET_AMOUNT_CARDS,
  MOBILE_AMOUNT_CARDS,
  DESKTOP_SHOWCARD_STEP,
  TABLET_SHOWCARD_STEP,
  SHORT_MOVIE_LENGTH
}