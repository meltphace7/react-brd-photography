import React from 'react'
import classes from './Sierras.module.css';
import thousandIsland from "../../assets/images/CA_THOUSAND-ISLAND-LAKE_PANO_lowRes.jpg";
import edizaLake from "../../assets/images/CA_EDIZA-LAKE_PANO_lowRes.jpg";
import gannetPano from "../../assets/images/CA_GANNET-LAKE_PANO_lowRes.jpg";
import icebergLake from "../../assets/images/CA-Iceberg-Lake-538KB_lowRes.jpg";
import chickenfootLake from "../../assets/images/CA_CHICKENFOOT-LAKE_lowRes.jpg";
import treasureLakes from "../../assets/images/CA_TREASURE-LAKES_PANO_lowRes.jpg";
import bannerPeak from "../../assets/images/CA_BANNER-PEAK-FRAMED_PANO_lowRes.jpg";
import kearsarge from "../../assets/images/CA_KEARSARGE-LAKE_REFLECTION_HI-RES.jpg";
import marieBlue from "../../assets/images/CA_MARIE-LAKE_SHADOW-BLUE_HI-RES.jpg";
import paradiseLake from "../../assets/images/CA_PARADISE-LAKE_DAY_HI-RES.jpg";
import goldMtn from "../../assets/images/CA_GOLD-MTN_HI_RES.jpg";
import raeGold from "../../assets/images/CA_RAE-LAKESE_EVE-PANO_HI-RES.jpg";
import graniteOrange from "../../assets/images/CA_GRANITE-PARK_ORANGE_HI-RES.jpg";
import minarets from "../../assets/images/CA_MINARETS-PANO_HI-RES-2.jpg";
import bearBasinPano from "../../assets/images/CA_BEAR-LAKES_ALPINE-PANO_HI-RES.jpg";
import raeCalm from "../../assets/images/CA_RAE-LAKES_CALM-EVE_HI-RES.jpg";
import raeLakeHiView from "../../assets/images/CA_RAE-LAKES_HIGH-VIEW_HI-RES.jpg";
import marieOrange from "../../assets/images/CA_MARIE-LAKE_ORANGE_HI-RES.jpg";
import bullfrogWide from "../../assets/images/CA_BULLFROG-LAKE_DAY-PANO_HI-RES.jpg";
import juliusCeaserPano from "../../assets/images/CA_JULIUS-CEASER-PANO_HI-RES.jpg";
import pineCreekPano from "../../assets/images/CA_PINE-CREEK_PANO_HI-RES.jpg";
import bullfrogGold from "../../assets/images/CA_BULLFROG-LAKE_GOLDEN_HI-RES.jpg";
import goldValley from "../../assets/images/CA_GOLD_MTN-VALLEY_HI-RES.jpg";
import raeMorning from "../../assets/images/CA_RAE-LAKES-MORN-PANO_HI-RES.jpg";
import mariePano from "../../assets/images/CA_MARIE-LAKE_PANO_HI-RES.jpg";
import raeBasin from "../../assets/images/CA_RAE-BASIN_MORN-PANO_HI-RES.jpg";
import granitePond from "../../assets/images/CA_GRANITE-PARK_POND_HI-RES.jpg";
import sherbertSky from "../../assets/images/CA_SHERBERT-SKY_HI_RES.jpg";
import granitePano from "../../assets/images/CA_GRANITE-PARK-CLOUDS_PANO_HI-RES.jpg";
import bearPano from "../../assets/images/CA_BEAR-LAKES_PANO_HI-RES.jpg";
import graniteParkMtns from "../../assets/images/CA_GRANITE-PARK_WIDE_HI-RES.jpg";
import graniteParkClouds from "../../assets/images/CA_GRANITE-PARK-CLOUDS_HI-RES.jpg";
import honeymoonLake from "../../assets/images/CA_HONEYMOON-LAKE_HI-RES.jpg";
import kearsargeMorn from "../../assets/images/CA_KEARSARGE-LAKE_MORN-LIGHT_HI-RES.jpg";
import sevenGablesVert from "../../assets/images/CA_7-GABLES_LAKE_VERT_HI-RES.jpg";
import chickenfootMeadowsVert from "../../assets/images/CA_CHICKEN-MEADOWS_VERT_lowRes.jpg";
import shadowLakeVert from "../../assets/images/CA_SHADOW-LAKE_VERT_lowRes.jpg";
import gemParkVert from "../../assets/images/CA_GEM-PARK_VERT_lowRes.jpg";
import bullfrogVert from "../../assets/images/CA_BULLFROG-LAKE_VERT_HI-RES-1.jpg";
import sevenGablesMtnVert from "../../assets/images/CA_7-GABLES_VERT_HI-RES.jpg";
import marbleMtnVert from "../../assets/images/CA_MARBLE-STRIPE-MTN_HI_RES.jpg";

const Sierras = () => {
    return (
      <div className={classes.sierras}>
        <h1>The Sierras</h1>
        <div className={classes.grid}>
          <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <img src={thousandIsland} alt="Thousand Island Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
            <img src={edizaLake} alt="Ediza Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
            <img src={gannetPano} alt="Gannet Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
            <img src={graniteOrange} alt="Chickenfoot Meadows" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
            <img src={bullfrogWide} />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
            <img src={raeCalm} alt="Gem Lake Park" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--7"]}`}>
            <img src={icebergLake} alt="Iceberg Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--8"]}`}>
            <img src={chickenfootLake} alt="Chickenfoot Lake" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--9"]}`}>
            <img src={treasureLakes} alt="Treasure Lakes" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--10"]}`}>
            <img src={bannerPeak} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--11"]}`}>
            <img src={kearsarge} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--12"]}`}>
            <img src={raeLakeHiView} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--13"]}`}>
            <img src={paradiseLake} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--14"]}`}>
            <img src={goldMtn} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--15"]}`}>
            <img src={marieBlue} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--16"]}`}>
            <img src={marieOrange} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--17"]}`}>
            <img src={bearBasinPano} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--18"]}`}>
            <img src={minarets} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--19"]}`}>
            <img src={raeGold} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--20"]}`}>
            <img src={pineCreekPano} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--21"]}`}>
            <img src={bullfrogGold} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--22"]}`}>
            <img src={goldValley} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--23"]}`}>
            <img src={raeMorning} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--24"]}`}>
            <img src={mariePano} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--25"]}`}>
            <img src={raeBasin} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--26"]}`}>
            <img src={granitePond} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--27"]}`}>
            <img src={sherbertSky} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--28"]}`}>
            <img src={granitePano} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--29"]}`}>
            <img src={graniteParkMtns} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--30"]}`}>
            <img src={graniteParkClouds} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--31"]}`}>
            <img src={honeymoonLake} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--32"]}`}>
            <img src={kearsargeMorn} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--33"]}`}>
            <img src={bearPano} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--34"]}`}>
            <img src={bearPano} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--35"]}`}>
            <img src={bearPano} alt="Banner Peak" />
          </div>
          <div className={`${classes.grid__item} ${classes["grid__item--36"]}`}>
            <img src={bearPano} alt="Banner Peak" />
          </div>
        </div>
      </div>
    );
}

export default Sierras
