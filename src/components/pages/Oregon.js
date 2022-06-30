import React from 'react'
import classes from './Oregon.module.css'

const Oregon = () => {
    return (
      <div className={classes.oregon}>
        <h1>OREGON</h1>
        <div className={classes.grid}>
          <div className={classes.grid__item}>
            <img src="img/OR_GLACIER-LAKE_PANO_lowRes.jpg" alt="Glacier Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_CIGAR-LAKE_lowRes.jpg" alt="Cigar Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_TWIN-LAKES_PANO_lowRes.jpg" alt="Twin Lakes" />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_FRANCIS-LAKE_lowRes.jpg" alt="Francis Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_FRAZIER-LAKE_lowRes.jpg" alt="Mt. Rainier" />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_STEAMBOAT-LAKE_lowRes.jpg" alt="Goat Rocks" />
          </div>
          <div className={classes.grid__item}>
            <img
              src="img/OR_GLACIER-LAKE-ALT-PANO_lowRes.jpg"
              alt="Big Heart Lake"
            />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_JEFFY_PANO_lowRes.jpg" alt="Mt. Rainier" />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_OLALLIE-BUTTE_lowRes.jpg" alt="Robin Lake" />
          </div>
          <div className={classes.grid__item}>
            <img src="img/OR_PETE'S-POINT_PANO_lowRes.jpg" alt="Pete's point" />
          </div>
        </div>
      </div>
    );
}

export default Oregon
