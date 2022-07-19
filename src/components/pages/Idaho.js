import React from "react";
import classes from "./Idaho.module.css";

const Idaho = () => {
  return (
    <div className={classes.idaho}>
      <h1>IDAHO</h1>
      <div className={classes.grid}>
        <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
          <img src="img/ID_Lucille-Lake-HIGH-RES-V-2.jpg" alt="Stanley Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
          <img
            src="img/ID_ALICE-REFLECTION_lowRes.jpg"
            alt="Alice Lake Reflection"
          />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
          <img
            src="img/ID_STANLEY-LAKE-PURPLE_PANO_lowRes.jpg"
            alt="Stanley Lake"
          />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
          <img src="img/ID_ALICE-LAKE-TOP_lowRes.jpg" alt="Alice Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
          <img
            src="img/ID_LOST-RIVER-RANGE_lowRes.jpg"
            alt="Lost River Range"
          />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
          <img src="img/ID_TWIN-LAKE-PASS_PANO__lowRes.jpg" alt="Twin Lakes" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
          <img
            src="img/ID_PETTIT-LAKE-MORNING_PANO_lowRes.jpg"
            alt="Pettit Lake"
          />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
          <img src="img/ID_BARON-LAKES-PASS_lowRes.jpg" alt="Baron Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
          <img src="img/ID_SAWTOOTH-PASS_lowRes.jpg" alt="Big Heart Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
          <img src="img/ID_CRATERS-of-the-MOON_lowRes.jpg" alt="Mt. Rainier" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--11"]}`}>
          <img src="img/ID_MCGOWAN-PEAK_lowRes.jpg" alt="McGowan Peak" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--12"]}`}>
          <img src="img/ID_TWIN-LAKE_VERT_lowRes.jpg" alt="Twin Lakes" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--13"]}`}>
          <img src="img/ID_ALICE_VERT_lowRes.jpg" alt="Twin Lakes" />
        </div>
      </div>
    </div>
  );
};

export default Idaho;
