import React from 'react'
import classes from './Montana.module.css'
import hiddenLake from "../../assets/images/MO_HIDDEN-LAKE_lowRes.jpg";
import ollieLake from "../../assets/images/MO_OLLIE-LAKE_PANO_lowRes.jpg";
import meadowVert from "../../assets/images/MO_MEADOW-VERT_lowRes.jpg";
import ollieLakeVert from "../../assets/images/MO_OLLIE-SUNSET_VERT__lowRes.jpg";
import sunsetCreekVert from "../../assets/images/MO_CREEK-SUNSET_VERT__lowRes.jpg";
import fossilLake from "../../assets/images/MO_FOSSIL-LAKE_lowRes.jpg";
import highLakePano from "../../assets/images/MO_HIGH-LAKE_PANO__lowRes.jpg";
import fallsPano from "../../assets/images/MO_FALLS_PANO_lowRes.jpg";
import glacierValley from "../../assets/images/MO_GLACIER_VALLEY_lowRes.jpg";
import beartoothAlpine from "../../assets/images/MO_HIGH-LAKE_PANO__lowRes.jpg";

const Montana = () => {
    return (
      <div className={classes.montana}>
        <h1>MONTANA</h1>
        <div className={classes.grid}>
          <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <img src={hiddenLake} alt="Hidden Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img src={ollieLake} alt="Ollie Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img src={meadowVert} alt="Mountain Meadow" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img src={ollieLakeVert} alt="Ollie Lake Sunset" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img src={sunsetCreekVert} alt="Creek Sunset" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img src={fossilLake} alt="Fossil Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img src={highLakePano} alt="Bear Tooth High Country" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img src={fallsPano} alt="Water falls" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img src={glacierValley} alt="Glacier Valley" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img src={beartoothAlpine} alt="Alpine Lake" />
          </div>
        </div>
      </div>
    );
}

export default Montana
