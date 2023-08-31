import headerLogo from '../../images/header-logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <h1 className='header__slogan'>Discover the best <span className='header__slogan-accent'>free-to-play</span> games!</h1>
    </header>
  )
}

export default Header;