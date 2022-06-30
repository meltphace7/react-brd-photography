import classes from './Footer.module.css'
import React from 'react'
import Logo from "../assets/BDLOGO-white.png";

const Footer = () => {
    return (
      <footer className={classes.footer}>
        <div className={classes["logo-container"]}>
          <img className={classes.logo} src={Logo} alt="Brock Dallman Photography logo" />
          <h2>BROCK DALLMAN PHOTOGRAPHY 2022 ALL RIGHTS RESERVED</h2>
        </div>
        <div className={classes.social}>
          <a
            href="https://www.facebook.com/brock.dallman"
            className={classes["social-link"]}
          >
            <img src="img/logo-facebook.svg" alt="facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/brockrdallman/"
            className={classes["social-link"]}
          >
            <img src="img/logo-instagram (1).svg" alt="facebook logo" />
          </a>
        </div>
      </footer>
    );
}

export default Footer
