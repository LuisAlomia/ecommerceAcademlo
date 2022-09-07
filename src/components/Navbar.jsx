import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../pages/Cart";
import style from "./styles/navbar.module.css";

const Navbar = () => {
  const [contentCart, setContentCard] = useState(false);

  const handleContentCart = () => setContentCard(!contentCart);

  return (
    <nav className={style.navbar}>
      <NavLink className={style.title} to={"/"}>
        Ecommerce ACD
      </NavLink>
      <ul className={style.links}>
        <NavLink className={style.link} to={"/login"}>
          <span className="material-symbols-outlined">person</span>
        </NavLink>
        <NavLink className={style.link} to={"/purchases"}>
          <span className="material-symbols-outlined">store</span>
        </NavLink>
        <li onClick={handleContentCart} className={style.link}>
          <span className="material-symbols-outlined">shopping_cart</span>
        </li>
      </ul>
      {contentCart === true && (
        <div className={style.contentCart}>
          <Cart setContentCard={setContentCard} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
