import React from 'react'
import classes from './Wyoming.module.css'
import lonesomeLake from "../../assets/images/WY_LONESOME-LAKE_lowRes.jpg";
import islandLakeDawn from "../../assets/images/WY_ISLAND-LAKE-DAWN_lowRes.jpg";
import islandLakeEvening from "../../assets/images/WY_ISLAND-LAKE-EVENING_lowRes.jpg";
import baptistLake from "../../assets/images/WY_BAPTIST-LAKE_lowRes.jpg";
import pyramidPeak from "../../assets/images/WY_PYRAMID-PEAK-VERT_lowRes.jpg";
import lizardsHead from "../../assets/images/WY_LIZARD-HEAD-PANO_lowRes.jpg";
import morraineLake from "../../assets/images/WY_MORRAINE-LAKE_PANO_lowRes.jpg";
import spiderLake from "../../assets/images/WY-SPIDER-LAKE_PANO_lowRes.jpg";
import pyramidPeakSummit from "../../assets/images/WY_PYRAMID-PEAK_lowRes.jpg";
import bigLakePano from "../../assets/images/WY_BIG-LAKE-PANO_lowRes.jpg";

const Wyoming = () => {
    return (
      <div className={classes.wyoming}>
        <h1>WYOMING</h1>
        <div className={classes.grid}>
          <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <img src={lonesomeLake} alt="Lonesome Lake in Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img src={islandLakeDawn} alt="Island Lake at Dawn in  Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img src={islandLakeEvening} alt="Island Lake Evening in Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img src={baptistLake} alt="Baptist Lake in Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img src={pyramidPeak} alt="Pyramid Lake in Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img src={lizardsHead} alt="Lizard Head in Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img src={morraineLake} alt="Morraine Lake in Wyoming Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img src={spiderLake} alt="Spider Lake in Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img src={pyramidPeakSummit} alt="Pyramid Peak in Wyoming's Wind River Range" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img src={bigLakePano} alt="Big Lake Pass in Wyoming's Wind River Range" />
          </div>
        </div>
      </div>
    );
}

export default Wyoming
