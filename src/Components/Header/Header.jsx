import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import logo from '../../assets/images/dota-2-icon.png';

class Header extends Component {
  render() { 
    return ( 
      <header>
        <div className="logo-div">
          <Link className="logo-link" to="/">
            <img className="logo-img" src={logo} alt="Logo"/>
          </Link>
        </div>
        <nav className="navigation">
          <HashRouter>
            <Link className="header-link" to="/">Heroes</Link>
            <Link className="header-link" to="/players">Players</Link>
          </HashRouter>
        </nav>
        {/* <div className="search">
            <input type="text" className="search-bar" id="search-hero" placeholder="Search Hero/Attribute Type ..." />
            <button className="search-btn" title="search">
              Search
            </button>
        </div> */}
      </header>
    );
  }
}
 
export default Header;