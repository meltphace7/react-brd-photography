import React from 'react'
import classes from './California.module.css'
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

const California = () => {
    return (
      <div className={classes.california}>
        <h1>CALIFORNIA</h1>
        <div className={classes["responsive__container-full"]}>
          <img src={thousandIsland} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={edizaLake} alt="Inyo national forest sign" />
        </div>

        <div className={classes["responsive__container-full"]}>
          <img src={gannetPano} alt="Inyo national forest sign" />
        </div>

        <div className={classes["custom-container__triple-vert-1"]}>
          <img
            className={classes["custom-container__triple-vert-1__item-1"]}
            src={bullfrogVert}
            alt="Inyo national forest sign"
          />
          <img
            className={classes["custom-container__triple-vert-1__item-2"]}
            src={marbleMtnVert}
            alt="Inyo national forest sign"
          />
          <img
            className={classes["custom-container__triple-vert-1__item-3"]}
            src={chickenfootMeadowsVert}
            alt="Inyo national forest sign"
          />
        </div>

        <div className={classes["responsive__container-full"]}>
          <img src={graniteOrange} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={bullfrogWide} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={raeCalm} alt="Inyo national forest sign" />
        </div>
        <div className={classes["custom-container__triple-vert-2"]}>
          <img
            className={classes["custom-container__triple-vert-2__item-1"]}
            src={shadowLakeVert}
            alt="Inyo national forest sign"
          />
          <img
            className={classes["custom-container__triple-vert-2__item-2"]}
            src={sevenGablesVert}
            alt="Inyo national forest sign"
          />
          <img
            className={classes["custom-container__triple-vert-2__item-3"]}
            src={sevenGablesMtnVert}
            alt="Inyo national forest sign"
          />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={icebergLake} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={chickenfootLake} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={treasureLakes} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={bannerPeak} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={kearsarge} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={raeLakeHiView} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={paradiseLake} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={goldMtn} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={marieBlue} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={marieOrange} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={bearBasinPano} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={minarets} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={raeGold} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={pineCreekPano} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={bullfrogGold} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={goldValley} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={raeMorning} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={mariePano} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={raeBasin} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={granitePond} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={sherbertSky} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={granitePano} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={graniteParkMtns} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={graniteParkClouds} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={honeymoonLake} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={kearsargeMorn} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={bearPano} alt="Inyo national forest sign" />
        </div>
        <div className={classes["responsive__container-full"]}>
          <img src={juliusCeaserPano} alt="Inyo national forest sign" />
        </div>
      </div>
    );
}

export default California
