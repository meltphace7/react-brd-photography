import React from 'react'
import classes from './Montana.module.css'

const Montana = () => {
    return (
      <div className={classes.montana}>
        <h1>MONTANA</h1>
        <div className={classes.grid}>
          <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <img src="img/MO_HIDDEN-LAKE_lowRes.jpg" alt="Hidden Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img src="img/MO_OLLIE-LAKE_PANO_lowRes.jpg" alt="Ollie Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img src="img/MO_MEADOW-VERT_lowRes.jpg" alt="Mountain Meadow" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img
              src="img/MO_OLLIE-SUNSET_VERT__lowRes.jpg"
              alt="Ollie Lake Sunset"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img
              src="img/MO_CREEK-SUNSET_VERT__lowRes.jpg"
              alt="Creek Sunset"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img src="img/MO_FOSSIL-LAKE_lowRes.jpg" alt="Fossil Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img
              src="img/MO_HIGH-LAKE_PANO__lowRes.jpg"
              alt="Bear Tooth High Country"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img src="img/MO_FALLS_PANO_lowRes.jpg" alt="Water falls" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img src="img/MO_GLACIER_VALLEY_lowRes.jpg" alt="Glacier Valley" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img src="img/MO_HIGH-LAKE_PANO__lowRes.jpg" alt="Alpine Lake" />
          </div>
        </div>
      </div>
    );
}

export default Montana
