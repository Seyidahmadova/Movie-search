import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/M (1).png";
import "../Header/Header.css";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="main-header-container">
      <div className="header-container">
        <img   className="logo" src={logo} alt="logo" width="150px" height="150px"></img>
      </div>
      <h1>Movie World</h1>
      {isHomePage ? (
        <NavLink className="savelist" to={"./collection"}>Collections</NavLink>
      ) : (
        <NavLink className="savelist" to="/">Home</NavLink>
      )}
    </div>
  );
}
