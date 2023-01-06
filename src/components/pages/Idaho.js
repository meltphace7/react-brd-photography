import React from "react";
import classes from "./Idaho.module.css";
import lucilleLake from "../../assets/images/ID_LUCILLE-LAKE_HI-RES.jpg";
import mcgowanPeak from "../../assets/images/ID_MCGOWAN-PEAK_lowRes.jpg";
import castlePeakGrandPano from "../../assets/images/ID_CASTLE_PEAK_GRAND_PANO.jpg";
import quietLakeSunsetPano from "../../assets/images/ID_QUIET-LAKE_SUNSET_PANO.jpg";
import sawtoothAlpinePano from "../../assets/images/ID_SAWTOOTH-ALPINE-PANO.jpg";
import sawtoothsAlpineVert from "../../assets/images/ID_SAWTOOTHS-ALPINE-VERT.jpg";
import aliceAlpinePano from "../../assets/images/ID_ALICE-ALPINE-PANO.jpg";
import kramerLakePano from "../../assets/images/ID_KRAMER-LAKE-PANO.jpg";
import aliceLakeReflection from "../../assets/images/ID_ALICE-REFLECTION_lowRes.jpg";
import fourLakesBasinPano from "../../assets/images/ID_4-LAKES-BASIN.jpg";
import stanleyLakePurple from "../../assets/images/ID_STANLEY-LAKE-PURPLE_PANO_lowRes.jpg";
import lostRiverRange from "../../assets/images/ID_LOST-RIVER-RANGE_lowRes.jpg";
import twinLakesPass from "../../assets/images/ID_TWIN-LAKE-PASS_PANO__lowRes.jpg";
import pettitLakeMorning from "../../assets/images/ID_PETTIT-LAKE-MORNING_PANO_lowRes.jpg";
import baronLakesPass from "../../assets/images/ID_BARON-LAKES-PASS_lowRes.jpg";
import sawtoothPass from "../../assets/images/ID_SAWTOOTH-PASS_lowRes.jpg";
import cratersOfTheMoon from "../../assets/images/ID_CRATERS-of-the-MOON_lowRes.jpg";
import twinLakeVert from "../../assets/images/ID_TWIN-LAKE_VERT_lowRes.jpg";
import aliceLakeVert from "../../assets/images/ID_ALICE-ALPINE-VERT.jpg";
import castleLakeReflection from "../../assets/images/ID_CASTLE_REFLECTION-PANO.jpg";
import castleDivide from "../../assets/images/ID_CASTLE-DIVIDE_PANO_HI-RES.jpg";
import hummocksLake from "../../assets/images/ID_HUMMOCKS_GRAND-PANO.jpg";
import quietLakeShore from "../../assets/images/ID_QUIET-LAKE_PANO_HI-RES.jpg";
import castleTopShotVert from "../../assets/images/ID_CASTLE_TOP_VERT.jpg";
import castleMornShot from "../../assets/images/ID_CASTLE-MORN-SHOT.jpg";
import castlePeakMeadowsPano from "../../assets/images/ID_CASTLE_MEADOW-PANO.jpg";
import antsBasinShot from "../../assets/images/ID_ANTS-BASIN_SHOT.jpg";
import slateLake from "../../assets/images/ID_SLATE_LAKE.jpg";
import castleLakeMornReflection from "../../assets/images/blog-images/white-clouds-22/ID_CASTLE_LAKE_MORN-PANO.jpg";
import windyDevilPano from "../../assets/images/ID_WINDY-DEVIL-GRAND-PANO.jpg";

const Idaho = () => {
  return (
    <div className={classes.idaho}>
      <h1>IDAHO</h1>
      <div className={classes["responsive__container-full"]}>
        <img
          src={lucilleLake}
          alt="Lucille Lake in Idaho's Sawtooth Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={castlePeakGrandPano}
          alt="Castle Peak in Idaho's White Clouds Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={castleDivide}
          alt="The Castle Divide in Idaho's White Clouds Mountains"
        />
      </div>
      <div className={classes["custom-thirty-sixty__container-1"]}>
        <img
          className={classes["custom-thirty-sixty-1__item-1"]}
          src={mcgowanPeak}
          alt="McGowan Peak in Idaho's Sawtooth Mountains"
        />
        <img
          className={classes["custom-thirty-sixty-1__item-2"]}
          src={twinLakeVert}
          alt="Twin Lakes in Idaho's Sawtooth Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={lostRiverRange} alt="Lost River Range in Idaho" />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={fourLakesBasinPano}
          alt="The Four Lakes Basin in Idaho's White Clouds Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={quietLakeShore}
          alt="Quiet Lake in Idaho's White Clouds Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={pettitLakeMorning}
          alt="Moring at Pettit Lake in Idaho's Sawtooth Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={castleLakeReflection}
          alt="Castle Lake in Idaho's White Clouds Mountains"
        />
      </div>

      <div className={classes["custom-container__alice-twin"]}>
        <img
          className={classes["custom-container__alice-twin__item-1"]}
          src={aliceLakeVert}
          alt="Alice Lake in Idaho's Sawtooth Mountains"
        />
        <img
          className={classes["custom-container__alice-twin__item-2"]}
          src={antsBasinShot}
          alt="The Ants Basin in Idaho's White Clouds Mountains"
        />
      </div>

      <div className={classes["responsive__container-full"]}>
        <img
          src={quietLakeSunsetPano}
          alt="Quiet Lake in Idaho's White Clouds Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={windyDevilPano}
          alt="Windy Devil Pass in Idaho's White Clouds Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={stanleyLakePurple}
          alt="Stanley Lake in Idaho's Sawtooth Mountains"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={kramerLakePano}
          alt="Kramer Lakes in Idaho's Sawtooth Mountains"
        />
      </div>
      <div className={classes["custom-container__slate-alpine"]}>
        <img
          className={classes["custom-container__slate-alpine__item-1"]}
          src={slateLake}
          alt="Slate Lake in Idaho's White Clouds Mountains"
        />
        <img
          className={classes["custom-container__slate-alpine__item-2"]}
          src={sawtoothsAlpineVert}
          alt="An alpine shot of the Sawtooth Mountain Range"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img
          src={sawtoothAlpinePano}
          alt="An alpine shot of the Sawtooth Mountain Range"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={aliceAlpinePano} alt="Inyo national An alpine shot of Alice Lake in Idaho's Sawtooth Mountains" />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={castlePeakMeadowsPano} alt="A meadow below Castle Peak in the Chamberlain Basin" />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={baronLakesPass} alt="Baron Lakes in Idaho's Sawtooth Range" />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={cratersOfTheMoon} alt="Craters of the Moon in Idaho" />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={sawtoothPass} alt="An alpine pass in Idaho's Sawtooth Mountains" />
      </div>

      <div className={classes["responsive__container-full"]}>
        <img src={aliceLakeReflection} alt="A reflection on Alice Lake in  Idaho's Sawtooth Mountains" />
      </div>
      <div className={classes["sony-thirty-sixty__container"]}>
        <img
          className={classes["sony-thirty-sixty__item-1"]}
          src={castleTopShotVert}
          alt="Castle Peak and the Chamberlain Basin"
        />
        <img
          className={classes["sony-thirty-sixty__item-2"]}
          src={castleMornShot}
          alt="Castle Peak and the Chamberlain Basin"
        />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={twinLakesPass} alt="Twin Lakes in Idaho's Sawtooth Mountains" />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={castleLakeMornReflection} alt="Reflection of Castle Peak in Idaho's White Clouds Mountains" />
      </div>
      <div className={classes["responsive__container-full"]}>
        <img src={hummocksLake} alt="Hummock Lake in the Boulder Chain Lakes, in Idaho's White Clouds Mountains" />
      </div>
    </div>
  );
};

export default Idaho;
