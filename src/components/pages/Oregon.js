import React from 'react'
import classes from './Oregon.module.css'
import glacierLakePano from "../../assets/images/OR_GLACIER-LAKE_PANO_lowRes.jpg";
import cigarLake from "../../assets/images/OR_CIGAR-LAKE_lowRes.jpg";
import twinLakesPano from "../../assets/images/OR_TWIN-LAKES_PANO_lowRes.jpg";
import francisLake from "../../assets/images/OR_FRANCIS-LAKE_lowRes.jpg";
import frazierLake from "../../assets/images/OR_FRAZIER-LAKE_lowRes.jpg";
import steamboatLake from "../../assets/images/OR_STEAMBOAT-LAKE_lowRes.jpg";
import glacierLakeAlt from "../../assets/images/OR_GLACIER-LAKE-ALT-PANO_lowRes.jpg";
import jeffyPano from "../../assets/images/OR_JEFFY_PANO_lowRes.jpg";
import olallieButte from "../../assets/images/OR_OLALLIE-BUTTE_lowRes.jpg";
import petesPoint from "../../assets/images/OR_PETE'S-POINT_PANO_lowRes.jpg";

const Oregon = () => {
    return (
      <div className={classes.oregon}>
        <h1>OREGON</h1>
        <div className={classes.grid}>
          <div className={classes.grid__item}>
            <img src={glacierLakePano} alt="Glacier Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src={cigarLake} alt="Cigar Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src={twinLakesPano} alt="Twin Lakes" />
          </div>
          <div className={classes.grid__item}>
            <img src={francisLake} alt="Francis Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src={frazierLake} alt="Mt. Rainier" />
          </div>
          <div className={classes.grid__item}>
            <img src={steamboatLake} alt="Goat Rocks" />
          </div>
          <div className={classes.grid__item}>
            <img src={glacierLakeAlt} alt="Big Heart Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src={jeffyPano} alt="Mt. Rainier" />
          </div>
          <div className={classes.grid__item}>
            <img src={olallieButte} alt="Robin Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src={petesPoint} alt="Pete's point" />
          </div>
        </div>
      </div>
    );
}

export default Oregon
