import React from 'react';
import '../App.css';
import Search from './searchBox';

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}

export default Nav;
