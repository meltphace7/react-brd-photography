import React from "react";
import classes from "./Gallery.module.css";
import { Link } from "react-router-dom";
import oregon from "../../assets/images/OR_OLLAIE_VERT.jpg";
import washington from "../../assets/images/../../assets/images/WA_RAINIER-EAST-VERT_lowRes.jpg";
import california from "../../assets/images/CA_BANNER-PEAK_VERT.jpg";
import wyoming from "../../assets/images/WY_FREMONT_CROP_VERT.jpg";
import montana from "../../assets/images/../../assets/images/MO_OLLIE-SUNSET_VERT__lowRes.jpg";
import idaho from "../../assets/images/../../assets/images/../../assets/images/ID_ALICE-ALPINE-VERT.jpg";


const Gallery = () => {
  return (
    <div className={classes.portfolio}>
      <h1>GALLERY</h1>
      <div className={classes["states__container"]}>
        <div className={classes["tri__container"]}>
          <Link to="/washington" className={classes["state__link"]}>
            <div className={classes["tri_container__image-box"]}>
              <img src={washington} />
            </div>
            <h2 className={classes["tri__image__title"]}>WASHINGTON</h2>
          </Link>
          <Link to="/oregon" className={classes["state__link"]}>
            <div className={classes["tri_container__image-box"]}>
              <img src={oregon} />
            </div>
            <h2 className={classes["tri__image__title"]}>OREGON</h2>
          </Link>
          <Link to="/california" className={classes["state__link"]}>
            <div className={classes["tri_container__image-box"]}>
              <img src={california} />
            </div>
            <h2 className={classes["tri__image__title"]}>CALIFORNIA</h2>
          </Link>
          <Link to="/idaho" className={classes["state__link"]}>
            <div className={classes["tri_container__image-box"]}>
              <img src={idaho} />
            </div>
            <h2 className={classes["tri__image__title"]}>IDAHO</h2>
          </Link>
          <Link to="/wyoming" className={classes["state__link"]}>
            <div className={classes["tri_container__image-box"]}>
              <img src={wyoming} />
            </div>
            <h2 className={classes["tri__image__title"]}>WYOMING</h2>
          </Link>
          <Link to="/montana" className={classes["state__link"]}>
            <div className={classes["tri_container__image-box"]}>
              <img src={montana} />
            </div>
            <h2 className={classes["tri__image__title"]}>MONTANA</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
