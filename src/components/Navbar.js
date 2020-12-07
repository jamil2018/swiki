import React from 'react';

const Navbar = ({ clickHandler, currentPage }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__navbar">
          <h3 className="nav__navbar__title">SWiki</h3>
          <ul className="nav__navbar__navLink">
            {currentPage === 'people' ? (
              <>
                <li
                  className="nav__navbar__navLink__link nav__navbar__navLink__link--active"
                  onClick={() => clickHandler('people')}
                >
                  People
                </li>
                <li
                  className="nav__navbar__navLink__link"
                  onClick={() => clickHandler('planets')}
                >
                  Planets
                </li>
              </>
            ) : (
              <>
                <li
                  className="nav__navbar__navLink__link "
                  onClick={() => clickHandler('people')}
                >
                  People
                </li>
                <li
                  className="nav__navbar__navLink__link nav__navbar__navLink__link--active"
                  onClick={() => clickHandler('planets')}
                >
                  Planets
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
