import React from "react";
import PropTypes from "prop-types";
import "./MainHeader.css";

const MainHeader = (props) => (
  <header className='main-header'>{props.children}</header>
);

export default MainHeader;


