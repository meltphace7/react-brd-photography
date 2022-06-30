import React from 'react'
import classes from './California.module.css'

const California = () => {
    return (
      <div className={classes.california}>
        <h1>CALIFORNIA</h1>
        <div className={classes.grid}>
          <div
                    className={`${classes.grid__item} ${classes["grid__item--1"]}`}
          >
            <img
              src="img/CA_THOUSAND-ISLAND-LAKE_PANO_lowRes.jpg"
              alt="Thousand Island Lake"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img src="img/CA_EDIZA-LAKE_PANO_lowRes.jpg" alt="Ediza Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img src="img/CA_GANNET-LAKE_PANO_lowRes.jpg" alt="Gannet Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img
              src="img/CA_CHICKEN-MEADOWS_VERT_lowRes.jpg"
              alt="Chickenfoot Meadows"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img src="img/CA_SHADOW-LAKE_VERT_lowRes.jpg" alt="Shadow Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img src="img/CA_GEM-PARK_VERT_lowRes.jpg" alt="Gem Lake Park" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img
              src="img/CA-Iceberg-Lake-538KB_lowRes.jpg"
              alt="Iceberg Lake"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img
              src="img/CA_CHICKENFOOT-LAKE_lowRes.jpg"
              alt="Chickenfoot Lake"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img
              src="img/CA_TREASURE-LAKES_PANO_lowRes.jpg"
              alt="Treasure Lakes"
            />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img
              src="img/CA_BANNER-PEAK-FRAMED_PANO_lowRes.jpg"
              alt="Banner Peak"
            />
          </div>
        </div>
      </div>
    );
}

export default California
