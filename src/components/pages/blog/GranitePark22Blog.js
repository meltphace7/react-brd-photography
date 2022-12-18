import React, { useState, useEffect } from "react";
import classes from "./GranitePark22Blog.module.css";

// DAY 1 IMAGES

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

// DAY 2 IMAGES

import honeymoonMorn from "../../../assets/images/blog-images/granite-park-22/honeymoon_morning.jpeg";
import honeymoonVert from "../../../assets/images/blog-images/granite-park-22/hooneymoon_morn_vert.jpeg";
import honeymoonMtnsVert from "../../../assets/images/blog-images/granite-park-22/honeymoon_morn_mtns_vert.jpeg";
import graniteParkMtnVert from "../../../assets/images/blog-images/granite-park-22/granite-park_mtn_vert.jpeg";
import graniteParkCreekPano from "../../../assets/images/blog-images/granite-park-22/granite-park_creek-pano.jpeg";
import graniteParkBrockVert from "../../../assets/images/blog-images/granite-park-22/granite-park_brock_vert.jpeg";
import graniteParkTrail from "../../../assets/images/blog-images/granite-park-22/granite-park_trail.jpeg";
import graniteParkCloudsPano from "../../../assets/images/blog-images/granite-park-22/granite-park_couds-pano.jpeg";
import graniteParkCloudsVert from "../../../assets/images/blog-images/granite-park-22/granite-park_couds-vert.jpeg";
import graniteParkEveningPano from "../../../assets/images/blog-images/granite-park-22/granite-park_evening-pano.jpeg";
import graniteParkEveningLakes from "../../../assets/images/blog-images/granite-park-22/granite-park_evening-lakes.jpeg";
import graniteParkSam from "../../../assets/images/blog-images/granite-park-22/granite-park_sam-vert.jpeg";

// DAY 3 IMAGES

import graniteOrangeMornPano from "../../../assets/images/blog-images/granite-park-22/granite-park_orange_pano.jpeg";
import graniteGooSlam from "../../../assets/images/blog-images/granite-park-22/granite-park_sam_goo-slam.jpeg";
import graniteSamBoulderHop from "../../../assets/images/blog-images/granite-park-22/granite-park_sam_rock-hop.jpeg";
import graniteSamClimb from "../../../assets/images/blog-images/granite-park-22/granite-park_sam-climb.jpeg";
import italyPassSummit from "../../../assets/images/blog-images/granite-park-22/italy-pass-pano.jpeg";
import italyPassBoulder from "../../../assets/images/blog-images/granite-park-22/italy-pass-bolder-mtn.jpeg";
import bearLakesBrockPano from "../../../assets/images/blog-images/granite-park-22/bear-lakes-brock_pano.jpeg";
import brockAlpinePano from "../../../assets/images/blog-images/granite-park-22/brock-alpine-pano.jpeg";
import bearLakesAlpinePano from "../../../assets/images/blog-images/granite-park-22/bear_lakes_alpine-pano.jpeg";
import sevenGablesBrock from "../../../assets/images/blog-images/granite-park-22/seven-gables_brock.jpeg";
import bearBasinOffTrail from "../../../assets/images/blog-images/granite-park-22/bear-basin-off-trail.jpeg";
import bearBasinOffTrailTwo from "../../../assets/images/blog-images/granite-park-22/bear-basin_off-trail-2.jpeg";
import bearBasinSamVert from "../../../assets/images/blog-images/granite-park-22/bear-basin_Sam-trail-vert.jpeg";
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

// DAY 4 IMAGES

import marieGrassyMornView from "../../../assets/images/blog-images/granite-park-22/MARIE_GRASSY_MORN_VIEW-1.jpg";
import marieVertShot from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_PANO.jpg";
import marieMornView from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_VIEW.jpg";
import marieMornTrailVert from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_TRAIL_VERT.jpg";
import marieTrailView from "../../../assets/images/blog-images/granite-park-22/Marie_trail-view-2.jpeg";
import marieMornWidePano from "../../../assets/images/blog-images/granite-park-22/MARIE_MORN_WIDE_PANO.jpg";
import marieTarnPano from "../../../assets/images/blog-images/granite-park-22/MARIE_TARN_PANO.jpg";
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
import marieOrangeSunsetPano from "../../../assets/images/blog-images/granite-park-22/MARIE_ORANGE_SUNSET_PANO.jpg";
import marieOrangeSunset from "../../../assets/images/blog-images/granite-park-22/MARIE_ORANGE_SUNSET.jpg";

// DAY 5 IMAGES
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

import italyOrangeSunsetPano from "../../../assets/images/blog-images/granite-park-22/ITALY_ORANGESUNSET_PANO.jpeg";

// DAY 6 IMAGES

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
            <div className={classes["blog__image-container-1"]}>
              <img src={tungstenMine} alt="Inyo national forest sign" />
              <img src={pineCreekClouds} alt="Inyo national forest sign" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={pineCreekFalls} alt="Inyo national forest sign" />
              <img src={samPineCreek} alt="Inyo national forest sign" />
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={pineLakePano} alt="Inyo national forest sign" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={samPineLakeVert} alt="Inyo national forest sign" />
              <img src={pineLakeVert} alt="Inyo national forest sign" />
              <img src={samRockHop} alt="Inyo national forest sign" />
            </div>
            <div className={classes["blog__image-container-1"]}>
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
            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={honeymoonMtnsVert} alt="Inyo national forest sign" />
              <img src={honeymoonVert} alt="Inyo national forest sign" />
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
            <div className={classes["blog__image-container-1"]}>
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

            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img
                src={graniteParkCloudsPano}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["blog__image-container-1"]}>
              <img
                src={graniteParkCloudsVert}
                alt="Inyo national forest sign"
              />
              <img src={graniteParkMtnVert} alt="Inyo national forest sign" />
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
            <div className={classes["blog__image-container-1"]}>
              <img src={graniteParkBrockVert} alt="Inyo national forest sign" />
              <img src={graniteParkTrail} alt="Inyo national forest sign" />
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
            <div className={classes["blog__image-container-1"]}>
              <img src={graniteParkSam} alt="Inyo national forest sign" />
              <img
                src={graniteParkEveningLakes}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={graniteOrangeMornPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={graniteGooSlam} alt="Italy Pass Pano" />
              <img src={graniteSamBoulderHop} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={italyPassBoulder} alt="Italy Pass Pano" />
              <img src={bearLakesBrockPano} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
              <img src={brockAlpinePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={bearLakesAlpinePano} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
              <img src={sevenGablesBrock} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={bearBasinSamVert} alt="Italy Pass Pano" />
              <img src={bearBasinOffTrail} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={bearBasinOffTrailTwo} alt="Italy Pass Pano" />
              <img src={sevenGablesSlotVert} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
              <img src={sevenGablesWide} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={sevenGablesSlopesVert} alt="Italy Pass Pano" />
              <img src={sevenGablesMountainVert} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={sevenGablesRainPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={sevenGablesStorm} alt="Italy Pass Pano" />
              <img src={thunderstormSam} alt="Italy Pass Pano" />
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

            <div className={classes["blog__image-container-1"]}>
              <img src={samSignageOne} alt="Italy Pass Pano" />
              <img src={samSignageTwo} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={marieGrassyMornView} alt="Italy Pass Pano" />
            </div>

            <div className={classes["blog__image-container-1"]}>
              <img src={marieMornView} alt="Italy Pass Pano" />
              <img src={marieVertShot} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={marieTrailSidePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={marieTrailView} alt="Italy Pass Pano" />
              <img src={marieMornTrailVert} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}></div>
            <div className={classes["blog__image-container-1"]}>
              <img src={marieMornTrailSideView} alt="Italy Pass Pano" />
              <img src={marieSky} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={tentView} alt="Italy Pass Pano" />
              <img src={stormRidge} alt="Italy Pass Pano" />
            </div>

            <div className={classes["blog__image-container-1"]}>
              <img src={blueSkyReflectionPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={samBoat} alt="Italy Pass Pano" />
              <img src={skyCloudReflection} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
              <img src={marieStormShore} alt="Italy Pass Pano" />
              <img src={stormReflection} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}></div>
            <div className={classes["blog__image-container-1"]}>
              <img src={stormRidgePano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={stormRigeVert} alt="Italy Pass Pano" />
              <img src={postStormSam} alt="Italy Pass Pano" />
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
            <div className={classes["blog__image-container-1"]}>
              <img src={stormSky} alt="Italy Pass Pano" />
              <img src={samTarp} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={postStormSamVert} alt="Italy Pass Pano" />
              <img src={tigerGrass} alt="Italy Pass Pano" />
            </div>

            <div className={classes["blog__image-container-1"]}>
              <img src={postStormPano} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={brockRainJacket} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={samRainVert} alt="Italy Pass Pano" />
              <img src={rainMountainVert} alt="Italy Pass Pano" />
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

            <div className={classes["blog__image-container-1"]}>
              <img src={rainSign} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={samRiverCrossing} alt="Italy Pass Pano" />
              <img src={italyCreek} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
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
            <div className={classes["blog__image-container-1"]}>
              <img src={italyCanyonSunet} alt="Italy Pass Pano" />
              <img src={italyCanyonSunsetVert} alt="Italy Pass Pano" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={italyOrangeSunsetPano} alt="Italy Pass Pano" />
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

            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>

            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>

            <p className={classes["blog__text"]}>
              Arguably the finest coastal backpacking trail in the United
              States, this 25 mile stretch of California coast is truly a unique
              trail where you’ll get to experience untouched wilderness and true
              remoteness. Due to the cliffs being too steep to build roads, the
              Lost Coast is the longest stretch of undeveloped coast in
              California, but the cool thing is we can still experience it by
              hiking it!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GranitePark22Blog;
