import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

export default function Navbar() {
  // Viewport
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Return the width so we can use it in components
    return { width };
  };

  // Setting width and breakpoint
  const { width } = useViewport();
  const breakpoint = 600;

  const [drawer, setDrawer] = useState(false);

  function openDrawer() {
    setDrawer(true);
  }
  function closeDrawer() {
    setDrawer(false);
  }

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItems}>
              <MenuIcon className={styles.menuImages} onClick={openDrawer} width="20px" heigth="20px"/>
              {width > breakpoint ? (
                <h1 className={styles.menuTitle}>
                  PINK STORE - SISTEMA INTERNO
                </h1>
              ) : (
                <h1 className={styles.menuTitle}>BODY BUILDER STORE</h1>
              )}
            </li>
            <li className={styles.menuItems}>
              <Link to="/home">
                <HomeIcon className={styles.menuImages} width="20px" heigth="20px"/>
              </Link>
              <Link to="/">
                <AccountCircleRoundedIcon className={styles.menuImages} width="20px" heigth="20px" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {drawer === true ? (<aside className={styles.aside} onClick={closeDrawer}>
        <ul className={styles.asideList}>
          <li className={styles.user}>
            <AccountCircleRoundedIcon className={styles.userIcon} width="20px" heigth="20px"/>
            Minha conta           
          </li>
          <li className={styles.asideItems}>
            <Link
              to="/cliente-cadastro"
              className={styles.links}
              onClick={closeDrawer}
            >
              <span>Cadastrar cliente</span>
            </Link>
          </li>
          <li className={styles.asideItems}>
            <Link to="/produto-cadastro" className={styles.links}>
              <span>Cadastrar produto</span>
            </Link>
          </li>
        </ul>
      </aside>) : '' }
    </>
  );
}
