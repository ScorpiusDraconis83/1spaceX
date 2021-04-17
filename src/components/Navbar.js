import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark d-flex justify-content-center align-items-center bg-black"
      style={{ backgroundColor: 'black' }}
    >
      <Link className="navbar-brand h1 m-0 font-weight-light" to="/">
        <span role="img" className="mr-2" aria-label="rocket">
          <FontAwesomeIcon icon={faRocket} />
        </span>
        SpaceX Search
      </Link>
    </nav>
  );
}

export default Navbar;
