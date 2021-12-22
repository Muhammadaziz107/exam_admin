import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__heading-div">
          <h1>ADMIN</h1>
        </div>
        <ul className="sidebar__ul">
          <li className="sidebar__ul__item">
            <NavLink to="/users" className="sidebar__ul__item__link">
              Users
            </NavLink>
          </li>
          <li className="sidebar__ul__item">
            <NavLink to="/orders" className="sidebar__ul__item__link">
              Orders
            </NavLink>
          </li>
          <li className="sidebar__ul__item">
            <NavLink to="/types" className="sidebar__ul__item__link">
              Types
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Home;
