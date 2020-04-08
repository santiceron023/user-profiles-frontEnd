import './Header.css';
import * as React from 'react';
import { NavBar } from './NavBar';

const Header: React.FC = () => {

  return (
      <div>
        <div className="header">
          <span>Profiles</span>
        </div>
        <div className="nav-bar-header">
          <NavBar></NavBar>
        </div>


      </div>

  );
};
export default Header;
