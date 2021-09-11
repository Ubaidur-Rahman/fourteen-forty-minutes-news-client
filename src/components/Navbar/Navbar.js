import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/1440.png';

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext);
  
  const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5055/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [isAdmin])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="text-white"><img style={{ height: '66px' }} src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link custom-nav-style ms-3 active" to="/home">Home</Link>
              </li>
              {isAdmin && <li className="nav-item">
                <Link className="nav-link custom-nav-style ms-3 active" to="/dashboard">Dashboard</Link>
              </li>}
              <li className="nav-item">
                <Link className="nav-link custom-nav-style ms-3 active" to="/video">Videos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-style ms-3 active" to="/pools">Pools</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-style ms-3 active" to="/magazine">Magazine</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-style ms-3 active" to="/contact">Contact Us</Link>
              </li>
              
          <li className="nav-item">
              {
                loggedInUser.name ? <p>{loggedInUser.name}</p>  : <button className="btn custom-btn-bg w-100">
                  <Link className='custom-nav-style' to="/login">Login</Link>
                </button>
              }
              </li>
            </ul>
          </div>
          
        </div>
      </nav></div>
  );
};

export default Navbar;