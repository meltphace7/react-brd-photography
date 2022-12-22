import React, { useState, useEffect } from "react";
import classes from "./WhiteClouds22Blog.module.css";

// DAY 1 IMAGES - 10 IMAGES
import fourthOfJulyLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_FORTH_OF_JULY_LAKE-PANO.jpeg";
import secondLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_SECOND_LAKE.jpeg";
import brockCastlePeakVert from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_PEAK_BROCK_VERT.jpg";
import castleTrailShot from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-TRAIL_SHOT.jpg";
import castlePeakSmallLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_PEAK_OVER_SMALL_LAKE-PANO.jpg";
import castlePeakMeadowPano from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_MEADOW-PANO.jpg";
import castlePeakReflectionPano from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_REFLECTION-PANO.jpg";
import castlePeakGrandPano from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_PEAK_GRAND_PANO.jpg";

// DAY 2 IMAGES - 15 IMAGES
import castleLakeMornReflection from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_LAKE_MORN-PANO.jpg";
import hazySun from "../../../assets/images/blog-images/white-clouds-22/ID_HAZY_SUN.jpeg";
import castleMornShot from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-MORN-SHOT.jpg";
import castleTopShot from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_TOP_SHOT.jpg";
import castleTopShotVert from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_TOP_VERT.jpg";
import eveningSlopeOne from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING_TRAIL_SLOPE-1.jpg";
import eveningSlopeTwo from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING_TRAIL_SLOPE-2.jpg";

import eveningSlopeThree from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING_TRAIL_SLOPE-3.jpg";
import eveningDivideSam from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING-DIVIDE_SAM.jpg";
import eveningCastleShot from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING-CASTLE-SHOT.jpg";
import eveningCastleDivideShot from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-DIVIDE-SHOT.jpg";


import castlePeakDivideSunsetPano from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-PEAK_SUN-TRAIL_PANO.jpg";
import castleDividePano from "../../../assets/images/blog-images/white-clouds-22/ID-Castle-Divide-Pano-V.1.jpg";

// DAY 3 IMAGES - 29 IMAGES
import samCastleTrailVert from "../../../assets/images/blog-images/white-clouds-22/ID_SAM_CASTLE_TRAIL_VERT.jpg";
import logLake from "../../../assets/images/blog-images/white-clouds-22/LOG_LAKE_SHOT.jpg";
import logLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_LOG_LAKE_MOUNTAIN-PANO.jpg";
import grassLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_GRASS_LAKE_PANO.jpg";
import hummockLakeShot from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS-SHOT.jpg";
import lakeVert from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS-VERT-SHOT.jpg";
import hummocksRock from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_LAKE-ROCK-SHOT.jpg";
import hummocksMarshLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCK-LAKE_MARSH_PANO.jpg";
import hummocksPeninsulaPano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCK-LAKE_PENINSULA_PANO.jpg";
import hummocksLakeGrandShot from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_GRAND-PANO.jpg";

import hummocksLakeMornPano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_SHORE-PANO.jpg";

import hummocksVert from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_VERT.jpeg";
import hummocksGoldenPano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS-GOLDEN-PANO.jpg";
import hummocksSunRocks from "../../../assets/images/blog-images/white-clouds-22/ID_SUN-ROCKS.jpg";


// DAY 4 IMAGES - 31 IMAGES
import hummocksSamTrail from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_DAY_SAM-TRAIL.jpg";
import scoopLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_SCOOP-LAKE-PANO.jpg";

import scoopLakeVert from "../../../assets/images/blog-images/white-clouds-22/ID_SCOOP-LAKE_VERT.jpg";

import windyDevilVert from "../../../assets/images/blog-images/white-clouds-22/ID_WINDY-DEVIL_VERT.jpg";
import windyDevilPano from "../../../assets/images/blog-images/white-clouds-22/ID_WINDY-DEVIL-GRAND-PANO.jpg";
import windyDevilSam from "../../../assets/images/blog-images/white-clouds-22/ID_WINDY-DEVIL_SAM.jpg";

import castleTarn from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-TARN.jpg";
import windyDevilValley from "../../../assets/images/blog-images/white-clouds-22/ID_WINDY_DEVIL_VALLEY.jpg";



import slateLake from "../../../assets/images/blog-images/white-clouds-22/ID_SLATE_LAKE.jpg";
import quietLakeTopShot from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-CASTLE-SHOT.jpg";
import quietLakeVert from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-LAKE_VERT.jpg";
import quietLakeFieldPano from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-LAKE_FIELDS_PANO.jpg";
import quietLakeShorePano from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-LAKE_SHORE_PANO.jpg";
import quietLakeReflectionPano from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-LAKE_REFLECTION_PANO.jpg";
import quietLakeSunsetPano from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-LAKE_SUNSET_PANO.jpg";

// DAY 5 IMAGES - 12 IMAGES
import fourLakeBasinPanoOne from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_BASIN_PANO-1.jpg";
import fourLakeBasinPanoTwo from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_BASIN_PANO-2.jpg";
import fourLakeSamVert from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_SAM-VERT.jpg";
import fourLakeShot from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_SHOT.jpg";
import fourLakeBasinGrandPano from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_BASIN_GRAND-PANO.jpg";
import devilsStaircaseShot from "../../../assets/images/blog-images/white-clouds-22/ID_DEVILS_STAIR-CASE.jpg";
import bornLakesPano from "../../../assets/images/blog-images/white-clouds-22/ID_BORN-LAKE-PANO-ONE-1.jpg";
import bornLakesPanoWide from "../../../assets/images/blog-images/white-clouds-22/ID_BORN-LAKE-PANO-WIDE.jpg";
import samAntsBasinShot from "../../../assets/images/blog-images/white-clouds-22/ID_SAM_ANTS_BASIN_SHOT.jpg";
import samAntsBasinVert from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_SAM_ROCK_VERT.jpg";
import antsBasinMeadow from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_MEADOW.jpg";
import antsBasinTrailShot from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_TRAIL_SHOT.jpg";

import antsBasinShot from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS-BASIN_SHOT.jpg";

import antsBasinPano from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_GRAND-PANO.jpg";
import brockSignage from "../../../assets/images/blog-images/white-clouds-22/ID-signage-low-res.jpg";
import mtnTarn from "../../../assets/images/blog-images/white-clouds-22/ID_MTN_TARN.jpg";
import mtnBurn from "../../../assets/images/blog-images/white-clouds-22/ID_MTN_BURN.jpg";
import mtnLake from "../../../assets/images/blog-images/white-clouds-22/ID_MTN_LAKE.jpg";

// VIDEOS - 7 videos

import castlePeakVideo from "../../../assets/videos/Video_Castle-Peak.mp4";
import castleDivideVideo from "../../../assets/videos/Video_Castle-Divide.mp4";
import hummocksLakeVideo from "../../../assets/videos/Video_Hummocks-Lake.mp4";


const WhiteClouds22Blog = () => {
  // Parallax effect for Header
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
              Backpacking The White Clouds Loop
            </h1>
            <h2 className={classes["blog-header__sub-title"]}>
              A 6 day loop through the White Cloud Mountains, featuring Castle
              Peak, Castle Lake, the Castle Divide, 20 Lakes Basin, Hummocks
              Lake, Scoop Lake, Quiet Lake, the Antz Basin.
            </h2>
          </div>
        </div>
      </header>
      <div className={classes["blog-body"]}>
        <div className={classes["blog-body__overlay"]}>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 1</h2>
              <h3>Trailhead to Castle Lake</h3>
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
              <img src={fourthOfJulyLakePano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-80"]}>
              <img src={secondLakePano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={brockCastlePeakVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={castleTrailShot}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={castlePeakSmallLakePano}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img src={castlePeakMeadowPano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={castlePeakReflectionPano}
                alt="Inyo national forest sign"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 2</h2>
              <h3>Castle Lake to Trail Side Camp</h3>
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
                src={castleLakeMornReflection}
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
            <div className={classes["sony-sixty-thirty__container"]}>
              <img
                className={classes["sony-sixty-thirty__item-1"]}
                src={castleMornShot}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["sony-sixty-thirty__item-2"]}
                src={castleTopShotVert}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["responsive__container-80"]}>
              <img src={castleTopShot} alt="Inyo national forest sign" />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={castlePeakGrandPano} alt="Inyo national forest sign" />
            </div>
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={castlePeakVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
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
              <img src={hazySun} alt="Inyo national forest sign" />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={castlePeakDivideSunsetPano}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={eveningSlopeOne}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={eveningSlopeTwo}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={eveningSlopeThree}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={eveningDivideSam}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={eveningCastleShot}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={eveningCastleDivideShot}
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

            <div className={classes["responsive__container-full"]}>
              <img src={castleDividePano} alt="Inyo national forest sign" />
            </div>
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={castleDivideVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
          </section>

          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 3</h2>
              <h3>Trail Side Camp to Hummocks Lake</h3>
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
                src={samCastleTrailVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={logLake}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img src={logLakePano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img src={grassLakePano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={hummocksMarshLakePano}
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
                src={lakeVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={hummockLakeShot}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img
                src={hummocksPeninsulaPano}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["custom__container_hummocks"]}>
              <img
                className={classes["custom__hummocks__item-1"]}
                src={hummocksRock}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["custom__hummocks__item-2"]}
                src={hummocksVert}
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

            <div className={classes["responsive__container-80"]}>
              <img src={hummocksGoldenPano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img
                src={hummocksLakeGrandShot}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={hummocksLakeVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
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
              <img src={hummocksSunRocks} alt="Inyo national forest sign" />
            </div>

            {/* <div className={classes["responsive__container-70"]}>
              <img src={marieGrassyMornView} alt="Italy Pass Pano" />
            </div> */}
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 4</h2>
              <h3>Hummocks Lake to Quiet Lake</h3>
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
              <img src={hummocksLakeMornPano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["custom__container_scoop"]}>
              <img
                className={classes["custom__scoop__item-1"]}
                src={scoopLakeVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["custom__scoop__item-2"]}
                src={hummocksSamTrail}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img src={scoopLakePano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img src={windyDevilPano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["sony-thirty-sixty__container"]}>
              <img
                className={classes["sony-thirty-sixty__item-1"]}
                src={windyDevilVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["sony-thirty-sixty__item-2"]}
                src={windyDevilSam}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={windyDevilValley}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={castleTarn}
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
              <img src={slateLake} alt="Inyo national forest sign" />
            </div>

            <div className={classes["sony-sixty-thirty__container"]}>
              <img
                className={classes["sony-sixty-thirty__item-1"]}
                src={quietLakeTopShot}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["sony-sixty-thirty__item-2"]}
                src={quietLakeVert}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img src={quietLakeFieldPano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img src={quietLakeShorePano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img
                src={quietLakeReflectionPano}
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
            <div className={classes["responsive__container-full"]}>
              <img src={quietLakeSunsetPano} alt="Inyo national forest sign" />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 5</h2>
              <h3>Quiet Lake to Trailhead</h3>
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
              <img src={fourLakeBasinPanoOne} alt="Inyo national forest sign" />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img src={fourLakeBasinPanoTwo} alt="Inyo national forest sign" />
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
            <div className={classes["sony-thirty-sixty__container"]}>
              <img
                className={classes["sony-thirty-sixty__item-1"]}
                src={fourLakeSamVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["sony-thirty-sixty__item-2"]}
                src={fourLakeShot}
                alt="Inyo national forest sign"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={fourLakeBasinGrandPano}
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
              <img src={devilsStaircaseShot} alt="Inyo national forest sign" />
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
              <img src={bornLakesPano} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img src={bornLakesPanoWide} alt="Inyo national forest sign" />
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
            <div className={classes["sony-thirty-sixty__container"]}>
              <img
                className={classes["sony-thirty-sixty__item-1"]}
                src={samAntsBasinVert}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["sony-thirty-sixty__item-2"]}
                src={samAntsBasinShot}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={antsBasinMeadow}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={antsBasinTrailShot}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-70"]}>
              <img src={antsBasinShot} alt="Inyo national forest sign" />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img src={antsBasinPano} alt="Inyo national forest sign" />
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
                src={mtnBurn}
                alt="Inyo national forest sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={mtnLake}
                alt="Inyo national forest sign"
              />
            </div>

            <div className={classes["responsive__container-80"]}>
              <img src={mtnTarn} alt="Inyo national forest sign" />
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
              <img src={brockSignage} alt="Inyo national forest sign" />
            </div>

            {/* <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={italyLakeTrailVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhiteClouds22Blog;
