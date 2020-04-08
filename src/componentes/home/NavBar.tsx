import * as React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {

  return (
      <React.Fragment>
        <Link to="/" replace={true} className="link">Home</Link>
        
        <Link to="/profile/add" className="link">Add Profile</Link>
        
        <Link to="/profile" className="link">Profiles</Link>
      </React.Fragment>
  );

};

