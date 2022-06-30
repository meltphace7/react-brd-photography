import React from 'react'
import classes from './Washington.module.css'

const Washington = () => {
    return (
      <div className={classes.washington}>
        <h1>WASHINGTON</h1>
        <div className={classes.grid}>
          <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <img
              src="img/WA_St.HELENS_SUNRISE_lowRes5.jpg"
              alt="Mt. St. Helens Sunrise"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img src="img/WA_RANIER_WEST-PANO_lowRes.jpg" alt="Mt. Rainier" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img src="img/WA_GLACIER-PEAK-PANO_lowRes.jpg" alt="Glacier Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img
              src="img/WA_SPECTACLE-LAKE_PANO_lowRes.jpg"
              alt="Spectacle lake"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img src="img/WA_RANIER-EAST_lowRes-1.jpg" alt="Mt. Rainier" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img
              src="img/WA_GOAT-ROCKS_olSNOWY_pano_lowRes.jpg"
              alt="Goat Rocks"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img src="img/WA_BIGHEART_LAKE_lowRes2.jpg" alt="Big Heart Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img
              src="img/WA_RAINIER-TATOOSH-SUNRISE_lowRes.jpg"
              alt="Mt. Rainier"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img src="img/WA_ROBIN-LAKE_PANO_lowRes.jpg" alt="Robin Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img src="img/WA_GOATROCKS-PCT-PANO_lowRes.jpg" alt="Goat Rocks" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--11"]}`}>
            <img src="img/WA_ADAMS-TARN_PANO_lowRes.jpg" alt="Mt. Adams" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--12"]}`}>
            <img src="img/WA_SHUKSAN_lowRes.jpg" alt="Mt. Shuksan" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--13"]}`}>
            <img src="img/WA_BAKER-RIDGE_lowRes.jpg" alt="Mt. Baker" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--14"]}`}>
            <img src="img/WA_HELENS-TOUTLE_lowRes.jpg" alt="Mt. St. Helens" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--15"]}`}>
            <img src="img/WA_RAINIER-NORTH_lowRes.jpg" alt="Mt. Rainier" />
          </div>
        </div>
      </div>
    );
}

export default Washington
