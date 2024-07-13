import React, { useState } from "react";
import "./MainNavigation.css";
import MainHeader from "../MainHeader/MainHeader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavLinks from "../NavLink/NavLinks";
import SideDrawers from "../SideDrawers/SideDrawers";
import Backdrop from "../../UIElements/Backdrop/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function OpenDrawerHandler() {
    setDrawerIsOpen(true);
  }

  function CloseDrawerHandler() {
    setDrawerIsOpen(false);
  }

  return (
    <>
      {drawerIsOpen ? <Backdrop onClick={CloseDrawerHandler} /> : null}

      <SideDrawers
        show={drawerIsOpen}
        closeDrawer={CloseDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawers>

      <MainHeader>
        <button
          className='main-navigation__menu-btn'
          onClick={OpenDrawerHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <h1 className='main-navigation__title'>
          <Link to='/'>NomDuSite</Link>
        </h1>

        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
