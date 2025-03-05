"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { ShoppingCartContext } from "@/contexts";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const NavBar = () => {
  const {products} = useContext(ShoppingCartContext)
  const [isActive, setIsActive] = useState(false);
  const activeMenu = () => setIsActive(!isActive);
  return (
    <header
      className={styles.headerWrapper}
    >
      <nav className={`${styles.navWrapper} flexContainer`}>
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="MESMOS SHOW"
            className={styles.navLogo}
          />
        </Link>
        <button className={styles.buttonMenu} onClick={activeMenu}>
          {!isActive ? <HiMiniBars3 /> : <IoMdClose />}
        </button>
        <ul className={`${styles.navList} ${!isActive ? "" : styles.active}`}>
          <li>
            <Link
            href="/"
            onClick={activeMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
            href="/tienda"
            onClick={activeMenu}
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
            href="/carrito"
            onClick={activeMenu}
            className={styles.navShoppingCart}
            >
              <LiaShoppingCartSolid/>
              <span>{products.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
