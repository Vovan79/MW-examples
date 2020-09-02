import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import UserContext from '../UserContext';
import { CLEAR_USER } from '../App';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

function RoomHeader() {
  const [isOpen, setisOpen] = useState(false);
  const { user, dispatch } = useContext(UserContext);

  const toggle = () => {
    setisOpen(isOpen => !isOpen);
  };

  const logoutUser = () => {
    window.localStorage.clear();
    dispatch({ type: CLEAR_USER });
  };

  return (
    <>
      <Navbar color="" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className="logo_nav" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/login">
                <button
                  className="profile_icon"
                  style={{ margin: 0, padding: 0 }}
                  onClick={logoutUser}
                >
                  <i className="fa fa-sign-out"></i>
                  Logout
                </button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">
                <p className="profile_icon1">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>{' '}
                  {user.username}
                </p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default RoomHeader;
