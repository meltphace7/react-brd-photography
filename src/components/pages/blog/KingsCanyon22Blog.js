import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./KingsCanyon22Blog.module.css";
import blogOneImage from "../../../assets/images/CA_RAE-LAKES_HIGH-VIEW_HI-RES.jpg";
import trailSign from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_Inyo_sign-vert.jpeg";
import potholeLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_Pothole-lake-vert.jpeg";
import kearsargePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP-kearsarge-pass-pano.jpeg";
import kearsargeLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_kearsarge-pano.jpeg";
import redMountainSundown from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_red-mountian-vert.jpeg";
import kearsargeSundown from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_kearsarge-sundown.jpeg";
import samBullfrogLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP-cutie-babe-bullfrog-lk.jpeg";
import brockBullfrogLake from "../../../assets/images/blog-images/kcnp-22/KCNP_BLOG_BROCK_BULLFROG-LK.jpeg";
import bullfrogLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BULLFROG_LK_VERT.jpeg";
import glennPass from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_GLENN_PASS_PANO.jpeg";
import paintedLadyPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_PAINTED_LADY_PANO.jpeg";
import raeLakeTrailPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_LAKE_TRAIL_PANO.jpeg";
import raePeninsula from "../../../assets/images/blog-images/kcnp-22/BLOG_RAE_PENINSULA_BEAUT.jpeg";
import raeTentSpot from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_TENT.jpeg";
import raeReflection from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_REFLECTION.jpeg";
import samBoat from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_SAM_BOAT.jpeg";
import raeFinn from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_FINN.jpeg";
import raeSunset from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_SUNSET.jpeg";
import finDomePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_FINN_DOME_PANO.jpeg";
import finDomeMeadow from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_FINNDOME_MEADOW.jpeg";
import samJohnMuir from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_SAM_JOHN-MUIR.jpeg";
import bigLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_Big_LAKE-PANO.jpeg";
import uphillTrees from "../../../assets/images/blog-images/kcnp-22/BLOG_UPHILL-TREK_TREES-VERT.jpeg";
import offTrailRocks from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_OFFTRAIL_ROCKS.jpeg";
import sixtyLakeMTNVert from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-MTN.jpeg";
import sixtyLakeMtnPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-MTN-PANO.jpeg";
import paradiseFound from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_PARADISE-FOUND_VERT.jpeg";
import skinnyDipParadise from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_PARADISE_SAM_VERT.jpeg";
import cutieBabeBandit from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_CUTIE_BABE_BANDIT.jpeg";
import boatParadise from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BOAT-PARADISE.jpeg";
import paradiseLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_PARADISE-LAKE.jpeg";
import paradiseLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_PARADISE-PANO.jpeg";
import raeValleyPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_VALLEY_PANO.jpeg";
// DAY 5
import raeValleyMornPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_LAKES_VALLEY_PANO.jpeg";
import paradiseTopView from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP-PARADISE_TOP-VIEW-PANO.jpeg";
import sixtyLakeTrekLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-TREK.jpeg";
import trailSideLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_TRAILSIDE_LAKE.jpeg";
import sixtyLakeSideTrip from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-SIDETRIP.jpeg";
import glennPassReturn from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RETURN_GLENN_PASS.jpeg";
import raeLakesReturn from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RETURN_RAE-LAKES-PANO.jpeg";
import bullfrogVistaCamp from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BULLFROG-CAMP.jpeg";
import bullfrogGrandPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_GRAND-BULLFROG-PANO.jpeg";
import bullfrogEvening from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BULLFROG-EVENING.jpeg";
// DAY 6
import brockKearsarge from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BROCK_KEARSARGE-PASS.jpeg";
import potholeLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_POTHOLE-LAKE-PANO.jpeg";
import backToTrailhead from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_DOWN_TO_TRAILHEAD.jpeg";
import raeLakeCouples from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_COUPLES.jpg";
// DAY 7

import paradiseVideo from "../../../assets/images/Video_paradise_bg_hq.mp4";
import bullfrogGoldenVideo from "../../../assets/images/Video_BullfrogGoldenHour.mp4";
import raeValleyVideo from "../../../assets/images/Video_RAE_VALLEY.mp4";
import glennPassVideo from "../../../assets/images/Video_GLENN_PASS.mp4";
import kearsargePassVideo from "../../../assets/images/Video_KEARSARGE_PASS.mp4";

const KingsCanyon22Blog = () => {
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
              Backpacking Kings Canyon
            </h1>
            <h1 className={classes["blog-header__title"]}>National Park</h1>
            <h2 className={classes["blog-header__sub-title"]}>
              A 7 day trek to Kearsarge Pass Kearsarge Lakes, Glenn Pass, Rae
              Lakes and the 60 Lake Basin
            </h2>
          </div>
        </div>
      </header>
      <div className={classes["blog-body"]}>
        <div className={classes["blog-body__overlay"]}>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 1</h2>
              <h3>Trailhead to Kearsarge Lakes</h3>
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
              <img src={trailSign} alt="Inyo national forest sign" />
              <img src={potholeLake} alt="Inyo national forest sign" />
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
            <div className={classes["video"]}>
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
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={kearsargePano} alt="Kearsarge Pass" />
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
              <img src={kearsargeLakePano} alt="Kearsarge Lake" />
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
              <img src={redMountainSundown} alt="Red light on mountain" />
              <img src={kearsargeSundown} alt="Sundown over Kearsarge Lake" />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 2</h2>
              <h3>Kearsarge Lakes to Rae Lakes</h3>
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
                src={samBullfrogLake}
                alt="Brock Dallman above Kearsarge Lakes"
              />
              <img src={bullfrogLake} alt="Sundown over Kearsarge Lake" />
              <img src={brockBullfrogLake} alt="Sundown over Kearsarge Lake" />
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
              <img src={glennPass} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["video"]}>
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
              <img src={paintedLadyPano} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={raeLakeTrailPano} alt="Sundown over Kearsarge Lake" />
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
              <img src={raePeninsula} alt="Sundown over Kearsarge Lake" />
              <img src={raeTentSpot} alt="Sundown over Kearsarge Lake" />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 3</h2>
              <h3>Rae Lakes Layover Day</h3>
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

            <div className={classes["blog__image-container-5"]}>
              <img
                className={classes["blog__image-container-5__img__1"]}
                src={raeReflection}
                alt="Sundown over Kearsarge Lake"
              />
              <img
                className={classes["blog__image-container-5__img__2"]}
                src={samBoat}
                alt="Sundown over Kearsarge Lake"
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
            <div className={classes["blog__image-container-6"]}>
              <img
                className={classes["blog__image-container-6__img__1"]}
                src={raeFinn}
                alt="Sundown over Kearsarge Lake"
              />
              <img
                className={classes["blog__image-container-6__img__2"]}
                src={raeSunset}
                alt="Sundown over Kearsarge Lake"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 4</h2>
              <h3>Rae Lakes to Off-Trail Backcountry Camp</h3>
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
              <img src={finDomePano} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={finDomeMeadow} alt="Sundown over Kearsarge Lake" />
              <img src={samJohnMuir} alt="Sundown over Kearsarge Lake" />
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
              <img src={bigLakePano} alt="Sundown over Kearsarge Lake" />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 5</h2>
              <h3>Off-trail backcountry Camp to 60 Lake Basin</h3>
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

            {/* custom */}
            <div className={classes["blog__image-container-4"]}>
              <img
                className={classes["blog__image-container-4__img__1"]}
                src={uphillTrees}
                alt="Sundown over Kearsarge Lake"
              />
              <img
                className={classes["blog__image-container-4__img__2"]}
                src={offTrailRocks}
                alt="Sundown over Kearsarge Lake"
              />
              <img
                className={classes["blog__image-container-4__img__3"]}
                src={sixtyLakeMTNVert}
                alt="Sundown over Kearsarge Lake"
              />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={sixtyLakeMtnPano} alt="Sundown over Kearsarge Lake" />
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
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={paradiseVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={paradiseFound} alt="Sundown over Kearsarge Lake" />
              <img src={paradiseLake} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={cutieBabeBandit} alt="Sundown over Kearsarge Lake" />
              <img src={skinnyDipParadise} alt="Sundown over Kearsarge Lake" />
              <img src={boatParadise} alt="Sundown over Kearsarge Lake" />
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
              <img src={paradiseLakePano} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={raeValleyPano} alt="Sundown over Kearsarge Lake" />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 6</h2>
              <h3>60 Lake Basin to Bullfrog Lake Vista</h3>
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
              <img src={raeValleyMornPano} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={paradiseTopView} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={raeValleyVideo} type={"video/mp4"} />
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

            {/* <div className={classes["blog__image-container-1"]}>
              <img src={sixtyLakeTrekLake} alt="Sundown over Kearsarge Lake" />
              <img src={sixtyLakeSideTrip} alt="Sundown over Kearsarge Lake" />
            </div> */}

            <div className={classes["blog__image-container-3"]}>
              <img
                className={classes["blog__image-container-3__img__1"]}
                src={sixtyLakeTrekLake}
                alt="Sundown over Kearsarge Lake"
              />
              <img
                className={classes["blog__image-container-3__img__2"]}
                src={sixtyLakeSideTrip}
                alt="Sundown over Kearsarge Lake"
              />
            </div>

            <div className={classes["blog__image-container-1"]}>
              <img src={trailSideLake} alt="Sundown over Kearsarge Lake" />
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
              <img src={raeLakesReturn} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={glennPassReturn} alt="Sundown over Kearsarge Lake" />
              <img src={bullfrogVistaCamp} alt="Sundown over Kearsarge Lake" />
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
              <img src={bullfrogGrandPano} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["blog__image-container-1"]}>
              <img src={bullfrogEvening} alt="Sundown over Kearsarge Lake" />
            </div>
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={bullfrogGoldenVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 7</h2>
              <h3>Bullfrog Lake Vista to Trailhead</h3>
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
              <img src={potholeLakePano} alt="Sundown over Kearsarge Lake" />
            </div>
            {/* custom */}
            <div className={classes["blog__image-container-2"]}>
              <img
                className={classes["blog__image-container-2__img__1"]}
                src={brockKearsarge}
                alt="Sundown over Kearsarge Lake"
              />
              <img
                className={classes["blog__image-container-2__img__2"]}
                src={backToTrailhead}
                alt="Sundown over Kearsarge Lake"
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
            <div className={classes["blog__image-container-1"]}>
              <img src={raeLakeCouples} alt="Sundown over Kearsarge Lake" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KingsCanyon22Blog;
