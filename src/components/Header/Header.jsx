import { useState } from "react";
import Logo from "../../assets/homeLogo.png";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, currentUser, onLogOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutClick = () => {
    setIsMenuOpen(false); // Cierra el menú al cerrar sesión
    onLogOut();
  };

  return (
    <header className={`header ${isMenuOpen ? "header--open" : ""}`}>
      <div className="header__top">
        <img className="header__logo" src={Logo} alt="Logo de la Página" />
        <button className="header__burger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <nav className={`header__container ${isMenuOpen ? "open" : ""}`}>
        {!isLoggedIn || !currentUser ? (
          <Link
            to="/signin"
            className="header__link"
            onClick={() => setIsMenuOpen(false)}
          >
            | Iniciar sesión
          </Link>
        ) : (
          <>
            <p className="header__user-email">{currentUser.email}</p>
            <button className="header__signUp" onClick={handleLogoutClick}>
              | Cerrar sesión
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
