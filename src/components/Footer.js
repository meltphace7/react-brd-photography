import classes from './Footer.module.css'
import React from 'react'
import Logo from "../assets/BDLOGO-white.png";
import instagramLogo from "../assets/images/logo-instagram (1).svg";
import facebookLogo from "../assets/images/logo-facebook.svg";

const Footer = () => {
    return (
      <footer className={classes.footer}>
        <div className={classes["logo-container"]}>
          <img
            className={classes.logo}
            src={Logo}
            alt="Brock Dallman Photography logo"
          />
          <p>BROCK DALLMAN PHOTOGRAPHY 2022 ALL RIGHTS RESERVED</p>
        </div>
        <div className={classes.social}>
          <a
            href="https://www.facebook.com/brock.dallman"
            className={classes["social-link"]}
          >
            <img src={facebookLogo} alt="facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/brockrdallman/"
            className={classes["social-link"]}
          >
            <img src={instagramLogo} alt="facebook logo" />
          </a>
        </div>
      </footer>
    );
}

export default Footer
