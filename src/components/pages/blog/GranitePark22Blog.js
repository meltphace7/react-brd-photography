import React, { useState, useEffect } from "react";
import classes from "./GranitePark22Blog.module.css";

// DAY 1 IMAGES - 10 IMAGES

import tungstenMine from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_TUNGSTEN_MINE.jpg";
import pineCreekClouds from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_PINE_CREEK_CLOUDS.jpg";
import samPineCreek from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_SAM_PINE_CREEK.jpeg";
import pineCreekFalls from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_PINE_CREEK_FALLS.jpg";
import pineCreekFallsPano from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_PINE_CREEK_FALLS_PANO.jpg";
import pineLakePano from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_PINE_CREEK_LAKE_PANO.jpg";
import samPineLakeVert from "../../../assets/images/blog-images/granite-park-22/BLOG_GARANITE-P_SAM_PINE_LAKE.jpeg";
import pineLakeVert from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_PINE_CREEK_LAKE.jpg";
import samRockHop from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE_P_SAM_ROCK_HOP.jpeg";
import honeymoonSunset from "../../../assets/images/blog-images/granite-park-22/BLOG_GRANITE-P_HONEYMOON_SUNSET.jpeg";

// DAY 2 IMAGES - 12 IMAGES

import honeymoonMorn from "../../../assets/images/blog-images/granite-park-22/honeymoon_morning.jpeg";
import honeymoonVert from "../../../assets/images/blog-images/granite-park-22/hooneymoon_morn_vert.jpeg";
import honeymoonMtnsVert from "../../../assets/images/blog-images/granite-park-22/honeymoon_morn_mtns_vert.jpeg";
import graniteParkMtnVert from "../../../assets/images/blog-images/granite-park-22/granite-park_mtn_vert.jpeg";
import graniteParkCreekPano from "../../../assets/images/blog-images/granite-park-22/granite-park_creek-pano.jpeg";

import graniteParkTarn from "../../../assets/images/blog-images/granite-park-22/GRANITE_PARK_POND.jpg";

import graniteParkMtnsPano from "../../../assets/images/blog-images/granite-park-22/GRANITE_PARK_MTN_PANO_ONE.jpg";

import graniteParkCloudsShot from "../../../assets/images/blog-images/granite-park-22/GRANITE_PARK_CLOUD_MTN_SHOT.jpg";


import graniteParkBrockVert from "../../../assets/images/blog-images/granite-park-22/granite-park_brock_vert.jpeg";
import graniteParkTrail from "../../../assets/images/blog-images/granite-park-22/granite-park_trail.jpeg";


import graniteParkCloudsPano from "../../../assets/images/blog-images/granite-park-22/GRANITE_GRAND_PANO.jpg";




import graniteParkCloudsVert from "../../../assets/images/blog-images/granite-park-22/granite-park_couds-vert.jpeg";
import graniteParkEveningPano from "../../../assets/images/blog-images/granite-park-22/granite-park_evening-pano.jpeg";
import graniteParkEveningLakes from "../../../assets/images/blog-images/granite-park-22/granite-park_evening-lakes.jpeg";
import graniteParkSam from "../../../assets/images/blog-images/granite-park-22/granite-park_sam-vert.jpeg";

// DAY 3 IMAGES - 25 IMAGES

import graniteOrangeMorn from "../../../assets/images/blog-images/granite-park-22/GRANITE_ORANGE_SHOT.jpg";

import graniteOrangeMornPano from "../../../assets/images/blog-images/granite-park-22/granite-park_orange_pano.jpeg";
import graniteGooSlam from "../../../assets/images/blog-images/granite-park-22/granite-park_sam_goo-slam.jpeg";
import graniteSamBoulderHop from "../../../assets/images/blog-images/granite-park-22/granite-park_sam_rock-hop.jpeg";
import graniteSamClimb from "../../../assets/images/blog-images/granite-park-22/granite-park_sam-climb.jpeg";
import italyPassSummit from "../../../assets/images/blog-images/granite-park-22/italy-pass-pano.jpeg";
import italyPassBoulder from "../../../assets/images/blog-images/granite-park-22/italy-pass-bolder-mtn.jpeg";
import blackBearLakePano from "../../../assets/images/blog-images/granite-park-22/BLACK-BEAR_LAKE_PANO.jpg";

import brockPortrait from "../../../assets/images/blog-images/granite-park-22/BROCK-PORTRAIT.jpg";

import bearLakesBrockPano from "../../../assets/images/blog-images/granite-park-22/bear-lakes-brock_pano.jpeg";
import brockAlpinePano from "../../../assets/images/blog-images/granite-park-22/brock-alpine-pano.jpeg";
import bearLakesAlpinePano from "../../../assets/images/blog-images/granite-park-22/bear_lakes_alpine-pano.jpeg";
import sevenGablesBrock from "../../../assets/images/blog-images/granite-park-22/seven-gables_brock.jpeg";
import bearBasinOffTrail from "../../../assets/images/blog-images/granite-park-22/bear-basin-off-trail.jpeg";
import bearBasinOffTrailTwo from "../../../assets/images/blog-images/granite-park-22/bear-basin_off-trail-2.jpeg";
import bearBasinSamVert from "../../../assets/images/blog-images/granite-park-22/bear-basin_Sam-trail-vert.jpeg";

import veeLakePano from "../../../assets/images/blog-images/granite-park-22/CA_VEE-LAKE-PANO.jpg";



import sevenGablesRainPano from "../../../assets/images/blog-images/granite-park-22/seven-gables-rain_pano.jpeg";
import sevenGablesSlopesVert from "../../../assets/images/blog-images/granite-park-22/seven-gables_slope-vert.jpeg";
import sevenGablesGrassPano from "../../../assets/images/blog-images/granite-park-22/seven-gables_grass-pano.jpeg";
import sevenGablesCreekShot from "../../../assets/images/blog-images/granite-park-22/seve-gables_creek-shot.jpeg";
import sevenGablesMarshPano from "../../../assets/images/blog-images/granite-park-22/seven-gables-marsh-pano.jpeg";
import sevenGablesMountainVert from "../../../assets/images/blog-images/granite-park-22/seven-gables-mountain-vert.jpeg";
import thunderstormSam from "../../../assets/images/blog-images/granite-park-22/thunderstorm-sam.jpeg";
import sevenGablesStorm from "../../../assets/images/blog-images/granite-park-22/seven-gables_storm.jpeg";
import sevenGablesWide from "../../../assets/images/blog-images/granite-park-22/seven-gables_wide.jpeg";
import sevenGablesSlotVert from "../../../assets/images/blog-images/granite-park-22/seven-gables_slot-very.jpeg";
import samSignageOne from "../../../assets/images/blog-images/granite-park-22/sam_signage.jpeg";
import samSignageTwo from "../../../assets/images/blog-images/granite-park-22/sam_signage-2.jpeg";
import marieLakeSunsetPano from "../../../assets/images/blog-images/granite-park-22/marie-lake_evening-bliss-pano.jpeg";

// DAY 4 IMAGES - 28 IMAGES

import marieGrassyMornView from "../../../assets/images/blog-images/granite-park-22/MARIE_GRASSY_MORN_VIEW-1.jpg";
import marieVertShot from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_PANO.jpg";
import marieMornView from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_VIEW.jpg";
import marieMornTrailVert from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_TRAIL_VERT.jpg";
import marieMornWidePano from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_WIDE_PANO.jpg";
import marieTarnPano from "../../../assets/images/blog-images/granite-park-22/MARIE_TARN_PANO.jpg";
import marieBlue from "../../../assets/images/blog-images/granite-park-22/MARIE-LAKE_BLUE.jpg";
import marieTrailSidePano from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_TRAIL-SIDE_PANO.jpg";
import marieMornTrailSideView from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_TRAIL-SIDE_VIEW.jpg";
import tentPano from "../../../assets/images/blog-images/granite-park-22/Marie_tent-pano.jpeg";
import tentView from "../../../assets/images/blog-images/granite-park-22/marie_tent.jpeg";
import samBoat from "../../../assets/images/blog-images/granite-park-22/sam_boat_marie-lake.jpeg";
import skyCloudReflection from "../../../assets/images/blog-images/granite-park-22/MARIE_SKY_REFLECTION_VERT.jpg";
import blueSkyReflectionPano from "../../../assets/images/blog-images/granite-park-22/MARIE_BLUE-SKY_REFFLECTION_PANO.jpg";
import stormSky from "../../../assets/images/blog-images/granite-park-22/marie_storm_sky.jpeg";
import marieSky from "../../../assets/images/blog-images/granite-park-22/marie_sky.jpeg";
import stormReflection from "../../../assets/images/blog-images/granite-park-22/MARIE_STORM_SKY_REFLECTION_VERT.jpg";
import marieStormShore from "../../../assets/images/blog-images/granite-park-22/MARIE_STORM_SKY_2.jpg";
import stormRigeVert from "../../../assets/images/blog-images/granite-park-22/Maire_storm-sky_vert.jpeg";
import stormRidgePano from "../../../assets/images/blog-images/granite-park-22/MARIE_THUNDERSKY_PANO.jpg";
import stormRidge from "../../../assets/images/blog-images/granite-park-22/MARIE_THUNDER-SKY.jpg";
import samTarp from "../../../assets/images/blog-images/granite-park-22/sam_tarp-vert.jpeg";
import tigerGrass from "../../../assets/images/blog-images/granite-park-22/MARIE_TIGER_GRASS.jpg";
import postStormSamVert from "../../../assets/images/blog-images/granite-park-22/SAM_POST_STORM_VERT.jpg";
import postStormSam from "../../../assets/images/blog-images/granite-park-22/Sam_post-thunderstorm.jpeg";
import postStormPano from "../../../assets/images/blog-images/granite-park-22/MARIE_POST-STORM_PANO.jpg";
import samPortrait from "../../../assets/images/blog-images/granite-park-22/POST-RAIN_SAM_PORTRAIT.jpg";
import postRainSamLake from "../../../assets/images/blog-images/granite-park-22/POST-RAIN_SAM_2.jpg";
import marieEveningPano from "../../../assets/images/blog-images/granite-park-22/MARIE-LAKE-PANO-1.jpg";
import marieOrangeSunsetPano from "../../../assets/images/blog-images/granite-park-22/MARIE_ORANGE_SUNSET_PANO.jpg";
import marieOrangeSunset from "../../../assets/images/blog-images/granite-park-22/MARIE_ORANGE_SUNSET.jpg";

// DAY 5 IMAGES - 11 IMAGES

import samRainVert from "../../../assets/images/blog-images/granite-park-22/SAM-RAINJACKET-VERT.jpg";
import rainSign from "../../../assets/images/blog-images/granite-park-22/RAIN_SIGN.jpg";
import brockRainJacket from "../../../assets/images/blog-images/granite-park-22/BROCK_RAINJACKET.jpg";
import samRiverCrossing from "../../../assets/images/blog-images/granite-park-22/SAM_RIVER-CROSSING.jpg";
import italyCreek from "../../../assets/images/blog-images/granite-park-22/italy_canyon_creek.jpeg";
import italyMeadowPano from "../../../assets/images/blog-images/granite-park-22/ITALY_MEADOW_PANO.jpg";
import rainMountainVert from "../../../assets/images/blog-images/granite-park-22/RAIN_MTN-VERT.jpg";
import italyMeadow from "../../../assets/images/blog-images/granite-park-22/ITALY_MEADOW.jpg";
import italyCanyonSunet from "../../../assets/images/blog-images/granite-park-22/ITALY_CANYON_ORANGE-SUNSET.jpg";
import italyCanyonSunsetVert from "../../../assets/images/blog-images/granite-park-22/ITALY_ORANGE_SUNSET_VERT.jpg";
import italyOrangeSunsetPano from "../../../assets/images/blog-images/granite-park-22/ITALY_SKY_MELT.jpg";

import italyOrangeSunsetPanoTwo from "../../../assets/images/blog-images/granite-park-22/ITALY_ORANGESUNSET_PANO.jpeg";

// DAY 6 IMAGES - 30 IMAGES
import clothingPano from "../../../assets/images/blog-images/granite-park-22/ITALY-CLOTHING_PANO.jpeg";
import samItalyHiker from "../../../assets/images/blog-images/granite-park-22/ITALY_SAM_HIKE.jpeg";
import italySamCliffVert from "../../../assets/images/blog-images/granite-park-22/ITALY_CREEK_CLIFF_SAM_VERT.jpg";
import italyCreekMtnVert from "../../../assets/images/blog-images/granite-park-22/ITALY_CREEK_MTNS_VERT.jpg";
import samCreekCrossMtn from "../../../assets/images/blog-images/granite-park-22/ITALY_CREEK_SAM_PANO.jpg";
import samHikeMtns from "../../../assets/images/blog-images/granite-park-22/ITALY-CREEK_SAM_MTNS.jpeg";
import italyLakePano from "../../../assets/images/blog-images/granite-park-22/ITALY_LAKE_PANO.jpg";
import italyLakeBrockVert from "../../../assets/images/blog-images/granite-park-22/ITALY_LAKE_BROCK_VERT.jpg";
import italyLakeSam from "../../../assets/images/blog-images/granite-park-22/ITALY-LAKE_SAM.jpeg";
import italyLakePanoTwo from "../../../assets/images/blog-images/granite-park-22/ITALY_LAKE_WIDE_PANO.jpeg";
import italyPassDayPano from "../../../assets/images/blog-images/granite-park-22/ITALY_PASS_DAY.jpeg";
import italyPassBrock from "../../../assets/images/blog-images/granite-park-22/GRANITE-PARK_BROCK.jpg";
import juliusCeaserGrandPano from "../../../assets/images/blog-images/granite-park-22/JULIUS-CAESER_GRAND-PANO.jpeg";
import juiliusCeaserPanoTwo from "../../../assets/images/blog-images/granite-park-22/julius_caeser_pano_2.jpeg";
import juliusCeaserShot from "../../../assets/images/blog-images/granite-park-22/JULIUS-CEASER_SQUARE_SHOT.jpg";
import graniteParkLakePano from "../../../assets/images/blog-images/granite-park-22/granite_park_lake_pano.jpeg";
import chalfantXCountrySamPano from "../../../assets/images/blog-images/granite-park-22/CHALANT_X-COUNTRY_SAM_PANO.jpg";
import chalfantLakeClouds from "../../../assets/images/blog-images/granite-park-22/CHALFANT_LAKE_CLOUDS.jpg";

import chalfantLakePANO from "../../../assets/images/blog-images/granite-park-22/CHALFANT_LAKE_PANO.jpg";


import chalfantLakeCloudsTwo from "../../../assets/images/blog-images/granite-park-22/CHALANT_LAKE_CLOUD-SKY-2.jpg";
import chalfantLakeCloudsThree from "../../../assets/images/blog-images/granite-park-22/CHALANT_LAKE_CLOUD-SKY.jpg";
import chalfantMtn from "../../../assets/images/blog-images/granite-park-22/GRANITE_OFFTRAIL_CAESAR_MTN.jpg";
import chalfantJuliusMtnVert from "../../../assets/images/blog-images/granite-park-22/JULIUS_MTN_VERT.jpeg";
import offTrailMtnWaterFallVert from "../../../assets/images/blog-images/granite-park-22/GRANITE_OFFTRAIL_WATERFALL_VERT.jpg";
import offTrailMtnShot from "../../../assets/images/blog-images/granite-park-22/OFFTRAIL_MTN_SHOT.jpg";
import offTrailMtnCreekVert from "../../../assets/images/blog-images/granite-park-22/OFFTRAIL_MTN_CREEK_VERT.jpeg";
import offTrailCreekPano from "../../../assets/images/blog-images/granite-park-22/GRANITE_OFFTRAIL_CREEK_PANO.jpg";
import honeymoonLakePano from "../../../assets/images/blog-images/granite-park-22/HONEYMOON-LAKE-RETURN-PANO.jpg";
import marbleMtnVert from "../../../assets/images/blog-images/granite-park-22/MARBLE_MTN_QUAL_VERT.jpg";
import samPineCreekVert from "../../../assets/images/blog-images/granite-park-22/SAM_PINECREEK_RETURN_VERT.jpeg";

import goldMtn from "../../../assets/images/blog-images/granite-park-22/GOLD_MTN.jpg";

import pineCreekValleyPano from "../../../assets/images/blog-images/granite-park-22/PINE_CREEK_VALLEY_PANO.jpg";

import pineCreekGrandPano from "../../../assets/images/blog-images/granite-park-22/PINE_CREEK_GRAND_PANO.jpg";
import sevenGablesCouples from "../../../assets/images/blog-images/granite-park-22/Seven_gables_couple-1.jpg";

// VIDEOS

// import paradiseVideo from "../../../assets/images/Video_paradise_bg_hq.mp4";

const GranitePark22Blog = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
    console.log(offsetY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={classes.blog}>
      <header
        className={classes["blog-header"]}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className={classes["blog-header__overlay"]}>
          <div className={classes["blog-header__title-container"]}>
            <h1 className={classes["blog-header__title"]}>
              Backpacking Granite Park, Bear Lakes Basin, Seven Gabels, Marie
              Lake
            </h1>
            <h1 className={classes["blog-header__title"]}>National Park</h1>
            <h2 className={classes["blog-header__sub-title"]}>
              A Rugged 6 Day Trek, through Granite Park, Bear Lakes Basin, Seven
              Gables, Marie Lake, Italy Lake and Mt. Julius Caeser
            </h2>
          </div>
        </div>
      </header>
      <div className={classes["blog-body"]}>
        <div className={classes["blog-body__overlay"]}>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 1</h2>
              <h3>Trailhead to Honeymoon Lake</h3>
            </div>

            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>

            <div className={classes["grid_day-one_1"]}>
              <div
                className={`${classes["day-one__grid-item"]} ${classes["day-one__grid-item-1"]}`}
              >
                <img src={tungstenMine} alt="paradise-lake" />
              </div>
              <div
                className={`${classes["day-one__grid-item"]} ${classes["day-one__grid-item-2"]}`}
              >
                <img src={pineCreekClouds} alt="paradise-lake" />
              </div>
              <div
                className={`${classes["day-one__grid-item"]} ${classes["day-one__grid-item-3"]}`}
              >
                <img src={pineCreekFalls} alt="paradise-lake" />
              </div>
              <div
                className={`${classes["day-one__grid-item"]} ${classes["day-one__grid-item-4"]}`}
              >
                <img src={samPineCreek} alt="paradise-lake" />
              </div>
            </div>

            {/* <div className={classes["blog__image-container-1"]}>
              <img src={tungstenMine} alt="Inyo national forest sign" />
              <img src={pineCreekClouds} alt="Inyo national forest sign" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={pineCreekFalls} alt="Inyo national forest sign" />
              <img src={samPineCreek} alt="Inyo national forest sign" />
            </div> */}

            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={pineCreekFallsPano} alt="Inyo national forest sign" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            {/*             
            <div className={classes["blog__image-container-pano"]}>
              <img src={pineLakePano} alt="Inyo national forest sign" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={samPineLakeVert} alt="Inyo national forest sign" />
              <img src={pineLakeVert} alt="Inyo national forest sign" />
              <img src={samRockHop} alt="Inyo national forest sign" />
            </div> */}

            <div className={classes["grid_day-one_2"]}>
              <div
                className={`${classes["day-one__2-grid-item"]} ${classes["day-one__2-grid-item-1"]}`}
              >
                <img src={samPineLakeVert} alt="paradise-lake" />
              </div>
              <div
                className={`${classes["day-one__2-grid-item"]} ${classes["day-one__2-grid-item-2"]}`}
              >
                <img src={pineLakeVert} alt="paradise-lake" />
              </div>
              <div
                className={`${classes["day-one__2-grid-item"]} ${classes["day-one__2-grid-item-3"]}`}
              >
                <img src={samRockHop} alt="paradise-lake" />
              </div>
            </div>

            <div className={classes["responsive__container-80"]}>
              <img src={honeymoonSunset} alt="Inyo national forest sign" />
            </div>
            {/* <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={kearsargePassVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div> */}
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 2</h2>
              <h3>Honeymoon Lake to Granite Park High Camp</h3>
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={honeymoonMtnsVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={honeymoonVert}
                alt="Inyo national forest sign"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={honeymoonMorn} alt="Inyo national forest sign" />
            </div>
            {/* <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={glennPassVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div> */}
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={graniteParkCreekPano} alt="Inyo national forest sign" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={graniteParkCloudsPano}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["responsive__container-80"]}>
              <img src={graniteParkTarn} alt="Inyo national forest sign" />
            </div>
            <div className={classes["responsive__container-80"]}>
              <img
                src={graniteParkCloudsShot}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img src={graniteParkMtnsPano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={graniteParkCloudsVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={graniteParkMtnVert}
                alt="Inyo national forest sign"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={graniteParkBrockVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={graniteParkTrail}
                alt="Inyo national forest sign"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={graniteParkEveningLakes}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={graniteParkSam}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={graniteParkEveningPano}
                alt="Inyo national forest sign"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 3</h2>
              <h3>Granite Park High Camp to Marie Lake</h3>
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-80"]}>
              <img src={graniteOrangeMorn} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={graniteOrangeMornPano} alt="Italy Pass Pano" />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={graniteGooSlam}
                alt="Italy Pass Pano"
              />

              <img
                className={classes["responsive__container-split__item-2"]}
                src={graniteSamBoulderHop}
                alt="Italy Pass"
              />
            </div>

            {/* <div className={classes["blog__image-container-1"]}>
              <img src={graniteGooSlam} alt="Italy Pass Pano" />
              <img src={graniteSamBoulderHop} alt="Italy Pass Pano" />
            </div> */}
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={italyPassSummit} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={italyPassBoulder}
                alt="Italy Pass Pano"
              />

              <img
                className={classes["responsive__container-split__item-2"]}
                src={bearLakesBrockPano}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={brockAlpinePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={bearLakesAlpinePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={blackBearLakePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>

            <div className={classes["responsive__container-70"]}>
              <img src={brockPortrait} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={sevenGablesBrock} alt="Italy Pass Pano" />
            </div>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={bearBasinSamVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={bearBasinOffTrail}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={bearBasinOffTrailTwo}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={sevenGablesSlotVert}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={veeLakePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={sevenGablesWide} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={sevenGablesSlopesVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={sevenGablesMountainVert}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={sevenGablesCreekShot} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={sevenGablesGrassPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={sevenGablesMarshPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={sevenGablesRainPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={sevenGablesStorm}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={thunderstormSam}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["custom__container-signage"]}>
              <img
                className={classes["custom__container-signage__item-1"]}
                src={samSignageOne}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["custom__container-signage__item-2"]}
                src={samSignageTwo}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img src={marieEveningPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={marieLakeSunsetPano} alt="Italy Pass Pano" />
            </div>
          </section>

          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 4</h2>
              <h3>Marie Lake Layover Day</h3>
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={marieGrassyMornView} alt="Italy Pass Pano" />
            </div>

            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={marieMornView}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={marieVertShot}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={marieMornWidePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={marieTarnPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={marieTrailSidePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["custom__container-marie"]}>
              <img
                className={classes["custom__container-marie__item-1"]}
                src={marieBlue}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["custom__container-marie__item-2"]}
                src={marieMornTrailVert}
                alt="Italy Pass Pano"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={marieMornTrailSideView}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={marieSky}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={tentPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={tentView}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={stormRidge}
                alt="Italy Pass Pano"
              />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img src={blueSkyReflectionPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={samBoat}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={skyCloudReflection}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={stormReflection}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={marieStormShore}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["blog__image-container-1"]}></div>
            <div className={classes["responsive__container-90"]}>
              <img src={stormRidgePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={stormRigeVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={postStormSam}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={stormSky}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={samTarp}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={postStormSamVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={tigerGrass}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={postRainSamLake}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={samPortrait}
                alt="Italy Pass Pano"
              />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img src={postStormPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img src={marieOrangeSunsetPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={marieOrangeSunset} alt="Italy Pass Pano" />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 5</h2>
              <h3>Marie Lake to Italy Trail Side Camp</h3>
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={brockRainJacket} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={samRainVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={rainMountainVert}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={rainSign} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={samRiverCrossing}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={italyCreek}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={italyMeadowPano} alt="Italy Pass Pano" />
            </div>
            {/* custom */}
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={italyMeadow} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={italyCanyonSunet}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={italyCanyonSunsetVert}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-80"]}>
              <img src={italyOrangeSunsetPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-80"]}>
              <img src={italyOrangeSunsetPanoTwo} alt="Italy Pass Pano" />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 6</h2>
              <h3>Italy Trail Side Camp to Trailhead</h3>
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={clothingPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={samItalyHiker}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={italySamCliffVert}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={italyCreekMtnVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={samCreekCrossMtn}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={samHikeMtns} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={italyLakePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={italyLakeBrockVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={italyLakeSam}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={italyLakePanoTwo} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={italyPassDayPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={italyPassBrock}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={juliusCeaserShot}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img src={juiliusCeaserPanoTwo} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={juliusCeaserGrandPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={graniteParkLakePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={chalfantXCountrySamPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img src={chalfantLakePANO} alt="Italy Pass Pano" />
            </div>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={chalfantLakeClouds}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={chalfantJuliusMtnVert}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={chalfantMtn}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={chalfantLakeCloudsTwo}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={offTrailMtnWaterFallVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={chalfantLakeCloudsThree}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={offTrailCreekPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["custom__container-off-trail"]}>
              <img
                className={classes["custom__container-off-trail__item-1"]}
                src={offTrailMtnCreekVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["custom__container-off-trail__item-2"]}
                src={offTrailMtnShot}
                alt="Italy Pass Pano"
              />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={honeymoonLakePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={pineCreekValleyPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["custom__container-mtn"]}>
              <img
                className={classes["custom__container-mtn__item-1"]}
                src={marbleMtnVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["custom__container-mtn__item-2"]}
                src={goldMtn}
                alt="Italy Pass Pano"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={pineCreekGrandPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["custom__container-final"]}>
              <img
                className={classes["custom__container-final__item-1"]}
                src={samPineCreekVert}
                alt="Italy Pass Pano"
              />
              <img
                className={classes["custom__container-final__item-2"]}
                src={sevenGablesCouples}
                alt="Italy Pass Pano"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GranitePark22Blog;
