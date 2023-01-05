import React from 'react'
import classes from './Washington.module.css'
import helensSunrise from "../../assets/images/WA_St.HELENS_SUNRISE_lowRes5.jpg";
import rainierWestPano from "../../assets/images/WA_RANIER_WEST-PANO_lowRes.jpg";
import glacierPeakPano from "../../assets/images/WA_GLACIER-PEAK-PANO_lowRes.jpg";
import spectacleLakePano from "../../assets/images/WA_SPECTACLE-LAKE_PANO_lowRes.jpg";
import rainierEast from "../../assets/images/WA_RAINIER-EAST-SLOPES.jpg";
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
import parkLakesPano from "../../assets/images/WA_PARK-LAKES_BASIN-PANO.jpg";
import rainierPink from "../../assets/images/WA_RAINER-PINK_lowRes.jpg";
import adamsPink from "../../assets/images/WA_MT._ADAMS_PINK_HI-RES.jpg";
import rainierEastVert from "../../assets/images/WA_RAINIER-EAST-VERT_lowRes.jpg";
import fiveLemahs from "../../assets/images/WA_5-LEMAHS_lowRes.jpg";
import northCascadesPano from "../../assets/images/WA_NORTH-CASCADES-PANO-3.jpg";
import blackButtePano from "../../assets/images/WA_BLACK-BUTTE-PANO.jpg";
import mapleLoopVert from "../../assets/images/WA_MAPLE-PASS-VERT.jpg";
import adamsGoldPano from "../../assets/images/WA_ADAMS_GOLDEN-PANO.jpg";
import rainierTarn from "../../assets/images/WA_RAINIER-MORN-TARN.jpg";

import goatrocksSunset from "../../assets/images/WA_GOATROCKS-SUNSET-PANO.jpg";
import waluptSunset from "../../assets/images/WA_WAPTUS-LAKE-SUNSET.jpg";
import glacierValleyPano from "../../assets/images/WA_GLACIER-PEAK_PCT-PANO.jpg";
import cougarLakePano from "../../assets/images/WA_COUGAR-LAKE-PANO.jpg";
import helensReedsVert from "../../assets/images/WA_HELENS-REEDS_VERT_lowRes.jpg";
import glacierLakeSlopes from "../../assets/images/WA_GLACIER-LAKE-SLOPES.jpg";

import threeQueensPano from "../../assets/images/WA_THREE-QUEENS-PANO.jpg";




const Washington = () => {
    return (
      <div className={classes.washington}>
        <h1 className={classes.title}>WASHINGTON</h1>

        <div className={classes["responsive__container-full"]}>
          <img src={glacierLakeSlopes} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={helensSunrise} alt="Mt. St. Helens Sunrise" />
        </div>

        <div className={classes["responsive__container-full"]}>
          <img src={rainierWestPano} alt="Mt. St. Helens Sunrise" />
        </div>

        <div className={classes["responsive__container-full"]}>
          <img src={glacierPeakPano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={parkLakesPano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={spectacleLakePano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={threeQueensPano} alt="Mt. St. Helens Sunrise" />
        </div>

        <div className={classes["custom-container__ranier"]}>
          <img
            className={classes["custom-container__ranier__item-1"]}
            src={rainierPink}
            alt="Mt. St. Helens Sunrise"
          />
          <img
            className={classes["custom-container__ranier__item-2"]}
            src={rainierEastVert}
            alt="Mt. St. Helens Sunrise"
          />
        </div>

        <div className={classes["responsive__container-full"]}>
          <img src={rainierEast} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={goatRocksOlSnowy} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={goatrocksSunset} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["custom-container__maple-adams"]}>
          <img
            className={classes["custom-container__maple-adams__item-1"]}
            src={mapleLoopVert}
            alt="Mt. St. Helens Sunrise"
          />
          <img
            className={classes["custom-container__maple-adams__item-2"]}
            src={adamsPink}
            alt="Mt. St. Helens Sunrise"
          />
        </div>
        <div className={classes["custom-container__rainier-helens"]}>
          <img
            className={classes["custom-container__rainier-helens__item-1"]}
            src={rainierNorth}
            alt="Mt. St. Helens Sunrise"
          />
          <img
            className={classes["custom-container__rainier-helens__item-2"]}
            src={helensReedsVert}
            alt="Mt. St. Helens Sunrise"
          />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={waluptSunset} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={bigHeartLake} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={fiveLemahs} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={northCascadesPano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={blackButtePano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={adamsGoldPano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={rainierTatooshSunrise} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={robinLakePano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={goatRocksPCTPano} alt="Mt. St. Helens Sunrise" />
        </div>

        <div className={classes["responsive__container-full"]}>
          <img src={adamsTarn} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={mtShuskan} alt="Mt. St. Helens Sunrise" />
        </div>

        <div className={classes["responsive__container-full"]}>
          <img src={rainierTarn} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={glacierValleyPano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={cougarLakePano} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={bakerRidge} alt="Mt. St. Helens Sunrise" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={helensToutle} alt="Mt. St. Helens Sunrise" />
        </div>
      </div>
    );
}

export default Washington
