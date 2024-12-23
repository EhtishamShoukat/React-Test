import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import logo from "./logo.png";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        border: "solid #2deb10",
        borderWidth: "0px 0px 5px 0px",
      }}
    >
      <div className="container-fluid">
        {/* Brand Logo and Name */}
        <NavLink
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          <img
            src={logo}
            alt="Brand Icon"
            style={{ width: "50px", marginRight: "10px" }}
            className="img-fluid"
          />
          <span style={{ color: "#2deb0f" }}>Shami </span>
          <span style={{ color: "#1891c8" }}>PRO</span>
        </NavLink>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ fontSize: "20px", fontWeight: "700" }}
          >
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                to="/"
                onClick={() => handleSetActiveLink("home")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeLink === "About" ? "active" : ""}`}
                to="/products"
                onClick={() => handleSetActiveLink("About")}
              >
                Product List
              </NavLink>
            </li>
            
          </ul>

          {/* Search Form */}
         
        </div>
      </div>
    </nav>
  );
}
