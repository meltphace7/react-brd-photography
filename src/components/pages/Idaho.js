import React from "react";
import classes from "./Idaho.module.css";
import lucilleLake from "../../assets/images/ID_LUCILLE-LAKE_HI-RES.jpg";
import castlePeakHi from "../../assets/images/ID_CASTLE-PEAK_PANO_HI-RES.jpg";
import aliceLakeReflection from "../../assets/images/ID_ALICE-REFLECTION_lowRes.jpg";
import stanleyLakePurple from "../../assets/images/ID_STANLEY-LAKE-PURPLE_PANO_lowRes.jpg";
import aliceLakeTop from "../../assets/images//ID_ALICE-LAKE-TOP_lowRes.jpg";
import lostRiverRange from "../../assets/images/ID_LOST-RIVER-RANGE_lowRes.jpg";
import twinLakesPass from "../../assets/images/ID_TWIN-LAKE-PASS_PANO__lowRes.jpg";
import pettitLakeMorning from "../../assets/images/ID_PETTIT-LAKE-MORNING_PANO_lowRes.jpg";
import baronLakesPass from "../../assets/images/ID_BARON-LAKES-PASS_lowRes.jpg";
import sawtoothPass from "../../assets/images/ID_SAWTOOTH-PASS_lowRes.jpg";
import cratersOfTheMoon from "../../assets/images/ID_CRATERS-of-the-MOON_lowRes.jpg";
import mcgowanPeak from "../../assets/images/ID_MCGOWAN-PEAK_lowRes.jpg";
import twinLakeVert from "../../assets/images/ID_TWIN-LAKE_VERT_lowRes.jpg";
import aliceLakeVert from "../../assets/images/ID_ALICE_VERT_lowRes.jpg";
import aliceLakePass from "../../assets/images/ID_ALICE-LAKE-TOP_lowRes.jpg";
import castleLakeReflection from "../../assets/images/ID-CASTLE-PEAK-REFLECTION_HI-RES.jpg";
import castleDivide from "../../assets/images/ID_CASTLE-DIVIDE_PANO_HI-RES.jpg";
import hummocksLake from "../../assets/images/ID-HUMMOCKS-LAKE_HI-VIEW_HI-RES.jpg";
import quietLakeShore from "../../assets/images/ID_QUIET-LAKE_PANO_HI-RES.jpg";


const Idaho = () => {
  return (
    <div className={classes.idaho}>
      <h1>IDAHO</h1>
      <div className={classes.grid}>
        <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
          <img src={lucilleLake} alt="Stanley Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
          <img src={aliceLakeReflection} alt="Alice Lake Reflection" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
          <img src={stanleyLakePurple} alt="Stanley Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
          <img src={castlePeakHi} alt="Alice Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
          <img src={lostRiverRange} alt="Lost River Range" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
          <img src={twinLakesPass} alt="Twin Lakes" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
          <img src={pettitLakeMorning} alt="Pettit Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
          <img src={baronLakesPass} alt="Baron Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
          <img src={sawtoothPass} alt="Big Heart Lake" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
          <img src={cratersOfTheMoon} alt="Mt. Rainier" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--11"]}`}>
          <img src={mcgowanPeak} alt="McGowan Peak" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--12"]}`}>
          <img src={twinLakeVert} alt="Twin Lakes" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--13"]}`}>
          <img src={aliceLakeVert} alt="Twin Lakes" />
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--14"]}`}>
          <img src={aliceLakePass} alt="Alice Lake" />
        </div>
        <div className={`${classes.grid__item} ${classes["grid__item--15"]}`}>
          <img src={castleLakeReflection} alt="Alice Lake" />
        </div>
        <div className={`${classes.grid__item} ${classes["grid__item--16"]}`}>
          <img src={castleDivide} alt="Alice Lake" />
        </div>
        <div className={`${classes.grid__item} ${classes["grid__item--17"]}`}>
          <img src={hummocksLake} alt="Alice Lake" />
        </div>
        <div className={`${classes.grid__item} ${classes["grid__item--18"]}`}>
          <img src={quietLakeShore} alt="quiet lake" />
        </div>
      </div>
    </div>
  );
};

export default Idaho;
