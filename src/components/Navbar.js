import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-light bg-light mb-2'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <span id='logo'>Clone</span>
          </Link>

          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink exact to='/' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/login' className='nav-link'>
                  Sign In
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/register' className='nav-link'>
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
