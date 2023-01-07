import React from "react";
import "./header.css";




export default function Header() {
  return (
    <section className="header" id="home">
      <div className="logo">
        {" "}
        <h3>
          {" "}
          <strong> Quick </strong>Automate{" "}
        </h3>
      </div>
      <nav className="menu__list">
        <li className="menu__items">Home</li>
        <li className="menu__items">About</li>
        <li className="menu__items">Services</li>
        <li className="menu__items">Products</li>
        <li className="menu__items">Contact</li>
      </nav>
    </section>
  );
}
