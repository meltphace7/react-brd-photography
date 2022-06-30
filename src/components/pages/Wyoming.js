import React from 'react'
import classes from './Wyoming.module.css'

const Wyoming = () => {
    return (
      <div className={classes.wyoming}>
        <h1>WYOMING</h1>
        <div className={classes.grid}>
          <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <img src="img/WY_LONESOME-LAKE_lowRes.jpg" alt="Lonesome Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img
              src="img/WY_ISLAND-LAKE-DAWN_lowRes.jpg"
              alt="Island Lake Dawn"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img
              src="img/WY_ISLAND-LAKE-EVENING_lowRes.jpg"
              alt="Island Lake Evening"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img src="img/WY_BAPTIST-LAKE_lowRes.jpg" alt="Baptist Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img src="img/WY_PYRAMID-PEAK-VERT_lowRes.jpg" alt="Pyramid Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img src="img/WY_LIZARD-HEAD-PANO_lowRes.jpg" alt="Lizard Head" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img
              src="img/WY_MORRAINE-LAKE_PANO_lowRes.jpg"
              alt="Morraine Lake"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img src="img/WY-SPIDER-LAKE_PANO_lowRes.jpg" alt="Spider Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img src="img/WY_PYRAMID-PEAK_lowRes.jpg" alt="Pyramid Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img src="img/WY_BIG-LAKE-PANO_lowRes.jpg" alt="Big Lake Pass" />
          </div>
        </div>
      </div>
    );
}

export default Wyoming
