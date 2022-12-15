import React from 'react'
import classes from './Washington.module.css'
import helensSunrise from "../../assets/images/WA_St.HELENS_SUNRISE_lowRes5.jpg";
import rainierWestPano from "../../assets/images/WA_RANIER_WEST-PANO_lowRes.jpg";
import glacierPeakPano from "../../assets/images/WA_GLACIER-PEAK-PANO_lowRes.jpg";
import spectacleLakePano from "../../assets/images/WA_SPECTACLE-LAKE_PANO_lowRes.jpg";
import rainierEast from "../../assets/images/WA_RANIER-EAST_lowRes-1.jpg";
import goatRocksOlSnowy from "../../assets/images/WA_GOAT-ROCKS_olSNOWY_pano_lowRes.jpg";
import bigHeartLake from "../../assets/images/WA_BIGHEART_LAKE_lowRes2.jpg";
import rainierTatooshSunrise from "../../assets/images/WA_RAINIER-TATOOSH-SUNRISE_lowRes.jpg";
import robinLakePano from "../../assets/images/WA_ROBIN-LAKE_PANO_lowRes.jpg";
import goatRocksPCTPano from "../../assets/images/WA_GOATROCKS-PCT-PANO_lowRes.jpg";
import adamsTarn from "../../assets/images/WA_ADAMS-TARN_PANO_lowRes.jpg";
import mtShuskan from "../../assets/images/WA_SHUKSAN_lowRes.jpg";
import bakerRidge from "../../assets/images/WA_BAKER-RIDGE_lowRes.jpg";
import helensToutle from "../../assets/images/WA_HELENS-TOUTLE_lowRes.jpg";
import rainierNorth from "../../assets/images/WA_RAINIER-NORTH_lowRes.jpg";

const Washington = () => {
    return (
      <div className={classes.washington}>
        <h1 className={classes.title}>WASHINGTON</h1>
        <div className={classes.grid}>
          <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <img src={helensSunrise} alt="Mt. St. Helens Sunrise" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img src={rainierWestPano} alt="Mt. Rainier" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img src={glacierPeakPano} alt="Glacier Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img src={spectacleLakePano} alt="Spectacle lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img src={rainierEast} alt="Mt. Rainier" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img src={goatRocksOlSnowy} alt="Goat Rocks" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img src={bigHeartLake} alt="Big Heart Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img src={rainierTatooshSunrise} alt="Mt. Rainier" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img src={robinLakePano} alt="Robin Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img src={goatRocksPCTPano} alt="Goat Rocks" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--11"]}`}>
            <img src={adamsTarn} alt="Mt. Adams" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--12"]}`}>
            <img src={mtShuskan} alt="Mt. Shuksan" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--13"]}`}>
            <img src={bakerRidge} alt="Mt. Baker" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--14"]}`}>
            <img src={helensToutle} alt="Mt. St. Helens" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--15"]}`}>
            <img src={rainierNorth} alt="Mt. Rainier" />
          </div>
        </div>
      </div>
    );
}

export default Washington
