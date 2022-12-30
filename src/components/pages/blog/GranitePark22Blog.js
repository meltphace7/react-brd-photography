import React, { useState, useEffect } from "react";
import classes from "./GranitePark22Blog.module.css";
import { Link } from "react-router-dom";

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

// DAY 2 IMAGES - 15 IMAGES

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

// DAY 3 IMAGES - 29 IMAGES

import graniteOrangeMorn from "../../../assets/images/blog-images/granite-park-22/GRANITE_ORANGE_SHOT.jpg";
import graniteOrangeMornPano from "../../../assets/images/blog-images/granite-park-22/granite-park_orange_pano.jpeg";
import graniteGooSlam from "../../../assets/images/blog-images/granite-park-22/granite-park_sam_goo-slam.jpeg";
import graniteSamBoulderHop from "../../../assets/images/blog-images/granite-park-22/granite-park_sam_rock-hop.jpeg";
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

// DAY 4 IMAGES - 31 IMAGES

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

// DAY 5 IMAGES - 12 IMAGES

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

// DAY 6 IMAGES - 34 IMAGES
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

// VIDEOS - 7 videos

import graniteParkVideo from "../../../assets/videos/Video_Granite-park.mp4";
import marieLakeEveningVideo from "../../../assets/videos/Video_Marie-Lake_Evening.mp4";
import marieLakeMornVideo from "../../../assets/videos/Video_Marie-Lake_Morn.mp4";
import marieLakeCloudsVideo from "../../../assets/videos/Video_Marie-Lake_Clouds.mp4";
import marieLakeSunsetVideo from "../../../assets/videos/Video_Marie-Lake_Sunset.mp4";
import italyLakeTrailVideo from "../../../assets/videos/Video_Italy_Lake_Trail.mp4";
import mtJuliusCeaserVideo from "../../../assets/videos/Video_Mt.Julius_Ceaser.mp4";

const GranitePark22Blog = () => {
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
              Backpacking Granite Park, Bear Lakes Basin, Seven Gables, Marie
              Lake
            </h1>
            <h2 className={classes["blog-header__sub-title"]}>
              A Rugged 6 Day Trek, featuring Granite Park, Bear Lakes Basin,
              Seven Gables, Marie Lake, Italy Lake and Mt. Julius Caeser
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
              Sam and I started this trip at the beginning of August. This was
              the last trip of our two week Sierras adventure. After our
              previous trip through Kings Canyon National Park, unseasonable
              thunderstorms arrived and the weather forecast was looking less
              than ideal.
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
            <p className={classes["blog__text"]}>
              It had been pouring rain all night before we got to the trailhead
              at Pine Creek. The sky was overcast and it was very humid. The
              trailhead was near an old tungsten mine at the base of some
              massive granite mountains. We began our trek up a seemingly
              endless series of switchbacks. The trail was very well graded. We
              didn’t see many people on the trail unlike our last trip. As we
              got higher, the views opened up. We could see the old mine far
              below. The mountains were beautiful and varied in their color and
              texture. The swirling mist and clouds gave the area a moody,
              mysterious vibe. As we continued up Pine Creek falls came into
              view. It was raging from all the rain the previous night.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={pineCreekFallsPano} alt="Inyo national forest sign" />
            </div>
            <p className={classes["blog__text"]}>
              Finally the trail met and followed Pine Creek, and the trail began
              to level out. As we arrived at the shores of Pine Lake it began to
              rain. We took shelter under some pine trees and had some ramen for
              lunch. Above Pine Lake to the North was a beautiful granite
              mountain with white stripes in it. The rain stopped and we
              continued along the trail to Upper Pine Lake. The creeks and
              streams were raging. After about a mile we arrived at Honeymoon
              Lake, our destination for the night. As we began setting up our
              camp, the ominous clouds started to open up on us again and it
              rained steadily for hours. We hid in out tent. The rain abated
              just as it was getting dark and I was able to get some dramatic
              shots of the lake before turning in for the night.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={pineLakePano} alt="Inyo national forest sign" />
            </div>
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
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 2</h2>
              <h3>Honeymoon Lake to Granite Park High Camp</h3>
            </div>
            <p className={classes["blog__text"]}>
              We awoke to beautiful clear skies. I walked around and took a few
              pictures of Honeymoon Lake. I returned to camp, we had breakfast
              and packed up our gear. Our day would take us up through Granite
              Park towards Italy Pass. Although it was a clear morning, the
              forecast warned of thunderstorms.
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

            <div className={classes["responsive__container-70"]}>
              <img src={honeymoonMorn} alt="Inyo national forest sign" />
            </div>
            <p className={classes["blog__text"]}>
              We saw few people. Granite Park was exceptionally beautiful. At
              the base of immense, white granite peaks were rushing creeks,
              small alpine meadows, tarns, and sporadic clusters of alpine
              trees. Huge granite boulders were strewn about. The trail weaved
              through the parkland terrain on a slow and steady ascent.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={graniteParkCreekPano} alt="Inyo national forest sign" />
            </div>
            <p className={classes["blog__text"]}>
              As the day went on large white clouds began to materialize
              seemingly from no where. We took lunch at a mid-sized unnamed
              alpine lake. The blue skies were almost entirely covered by the
              ominous clouds by the time we finished our lunch.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={graniteParkCloudsPano}
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
                <source src={graniteParkVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
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
            <p className={classes["blog__text"]}>
              We were above the tree line at this point and in an exposed
              landscape. It began to rain. I still had many miles I wanted to
              cover that day but I didn’t want to get caught out in such exposed
              terrain in a thunderstorm so we decided to wait out the rain in
              our tent, about a mile and a half from Italy Pass.
            </p>
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
              The rain kept on for at least three or four hours. Our camp spot
              was the last suitable spot for at least several miles and I knew
              it made the most sense to spend the night there and make up the
              miles the next day. The rain finally stopped in the evening, so we
              emerged from our tent and took a short walk to a vista of the
              Chalfant Lakes basin below us just as the sun was setting. We had
              dinner and retired to our tent. The following day would be arduous
              and long but would also yield some incredible alpine scenery.
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
              We awoke at dawn and ate a quick breakfast which included Cliff
              energy gel or “goo” as we liked to call it. The day was cloudless
              and clear but It would not continue as such, eventually devolving
              Into thunderstorms. This would become a reoccurring theme of the
              trip.
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
            <p className={classes["blog__text"]}>
              Highly caffeinated we powered up the bare granite landscape up
              towards Italy Pass. In about an hour we made it and were treated
              to beautiful views of Granite Park and beyond.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={italyPassSummit} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              We continued over the pass but left the trail towards a mountain
              col that was the entrance to the Bear Lake Basin. Our next
              destination. We slowly traversed a steep boulder field for a
              couple miles until we finally arrived at the gap. After continuing
              through the gap we were treated to a sweeping view of the Bear
              Lakes Basin and the Seven Gables Mountains beyond.
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
              It was very exposed rocky terrain with little vegetation. By now
              the blue skies were 50% white clouds. There was no trail since we
              left Italy Pass and we wouldn’t be on one for several more miles.
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

            <div className={classes["responsive__container-70"]}>
              <img src={brockPortrait} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              We continued down the Bear Lakes Basin to Black Bear Lake, then
              followed the drainage downhill towards Big Bear Lake. As we
              followed the creek down, a gorgeous view emerged of Big Bear Lakes
              with the Seven Gables Range in the background. We took some great
              photos and continued down to the lake and around the shore.
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
              Navigating the area was not so easy. There was no trail and many
              large granite rock formations to negotiate. We passed high above
              the shores of beautiful Vee Lake before entering a narrow slot
              canyon down to the Seven Gables Lakes Drainage.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={veeLakePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              By now the skies were once again completely overcast with dark
              grey clouds. It began to sprinkle. Sam was pretty tired at this
              point and not happy to be once again, in a thunderstorm. We had
              already covered many rugged off trail miles but we still had quite
              a distance to go to arrive at our destination at Marie Lake, off
              the John Muir Trail.
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
              We rain proofed our packs and continued our off trail descent,
              following the Seven gables creek downhill. By now there was
              thunder booming around us. Luckily the terrain yielded more
              shelter as we descended and we left the open granite parkland of
              the Bear Lake Basin and Seven Gables drainage. We were looking for
              the unmaintained Seven Gables Trail that would take us down the
              valley and connect to the John Muir trail.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={sevenGablesCreekShot} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              We eventually found the Seven Gables Trail and calling it
              unmaintained is a bit of an understatement. It was very hard to
              follow and full of obstacles.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={sevenGablesGrassPano} alt="Italy Pass Pano" />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img src={sevenGablesMarshPano} alt="Italy Pass Pano" />
            </div>

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
              We were back in the forest now but stuck in a full on downpour
              with frequent lightning strikes booming through the walls of the
              canyon. After some route finding, that involved some class 3
              scrambling, we reached the Bear Creek and the John Muir Trail at
              the bottom of the valley.
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
            <p className={classes["blog__text"]}>
              We finally had a good trail but we were still several miles from
              Marie Lake and It was still pouring rain. Sam’s spirits were
              dampened at this point but we stoically continued up the trail
              towards the lake. After several soggy miles the rain subsided. We
              were getting close but Sam was very clearly ready to be done with
              this challenging day. We finally arrived at the shores of
              beautiful Marie Lake. We couldn’t see anyone else around. We found
              a nice spot near the lake and set up our tent. It was evening now
              and the sun decided to treat us with a nice sunset. The Water was
              still and clear and it was a nice reward for a very challenging
              day.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={marieEveningPano} alt="Italy Pass Pano" />
            </div>

            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={marieLakeEveningVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
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
              I got an early start on the day as I wanted to take some pictures
              of the lake from Selden pass above. The day again, started off
              clear and beautiful but I knew that didn’t mean it would stay that
              way. I took the trail along the shoreline of Marie Lake and up a
              small ascent to Selden Pass.
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

            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={marieLakeMornVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
            <p className={classes["blog__text"]}>
              I distinctly remembered Selden Pass from my thousand mile
              backpacking trip through the California Pacific Crest Trail back
              in 2011. It was still just as stunning. I got some good shots from
              the pass, then I scrambled farther up the hill side and got some
              good sweeping panos from the top of the hillside. After exploring
              area above Selden Pass a bit, I decided to head back.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={marieTarnPano} alt="Italy Pass Pano" />
            </div>

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
              I got back and had breakfast and coffee with Sam and enjoyed a
              leisurely morning. This was our layover day. Much needed after the
              previous days stormy, off trail exploits. We broke into the box
              wine and went on a little pack raft excursion around the lake.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={tentPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              White clouds once again seemed to materialize out of no where and
              methodically covered up the blue sky. The tell tale breeze of a
              weather shift came and we knew it was time to start boating back
              towards camp. We got about a hundred feet from our camp and the
              sky opened up on us while I paddled us back to shore. We escaped
              the rain and hid out in some trees near out tent. The rain only
              lasted about 20 minutes but it looked like more was on the way. We
              had lunch and enjoyed another walk about before the next round of
              rain came.
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
              This time the rain came with deafening thunder. We hid out under a
              tarp shelter in the tree grover for awhile then decided to escape
              to the tent as the thunderstorm worsened. It preceded to downpour
              for the next four hours while we remained confined to the tent.
              Our layover day at Marie Lake was turning out to be less glamorous
              than I had hoped. The funny thing was, In my combined month of
              time I had spent in the Sierras in previous Summers, I had never
              even experienced an overcast day! Now I guess I was paying my
              dues.
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
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={marieLakeCloudsVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
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
              At around 6:30 the rain finally stopped. Sam and I went on a nice
              walk around the Northern portion of the lake. The air was fresh
              from all the rain. The water was still. After returning from the
              walk sun blasted through the clouds and lit up the mountains. I
              was able to get some great photos of it.
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
              Even though our layover day plans were somewhat dampened by the
              rain, I feel I was able to make the most of it. After dinner, we
              retired into the tent. Around 10pm it started raining again and it
              did not stop for about 14 hours.
            </p>
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={marieLakeSunsetVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
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
              It rained non stop all night and all morning. We had a good
              distance to travel that day. We waited in vain for the rain to
              stop till around 10am. We eventually bit the bullet and began
              packing up camp. The rain had lessened a bit but it did not stop.
              We hit the trail, donning our rain gear. Water was running down
              the trail like we were hiking down a creek. A hiker coming up the
              trail informed us that Bear Creek was raging from the apparent
              record rainfall and was very hazardous to cross. He said there was
              a large group of hikers waiting at the crossing because of the
              conditions. This turned up the anxiety level a bit but we
              continued on.
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
              When we finally got there the creek was indeed raging. There were
              only a couple of people there pondering how or where to cross. The
              sound of the swollen creek was deafening. The place where the
              trail crossed Bear Creek was definitely out of the question. We
              scouted for a safer crossing downstream. After a few hundred yards
              we found a spot where the river was broken up into several smaller
              channels which made it less treacherous to cross. The last channel
              was the deepest and fastest but there was a downed tree across it
              that we could cross on. We finally made it and got back on the
              JMT.
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
            <p className={classes["blog__text"]}>
              I originally wanted to return the same way we came and follow the
              Seven Gables drainage back up to the Bear Lakes Basin but that
              area was too exposed for this kind of weather. I decided instead
              that we should take the Lake Italy Trail back to Italy Pass. After
              a few more sketchy creek crossings we encountered a group of older
              hikers that were waiting out the storm due to the high water. We
              eventually arrived at the Lake Italy junction and left the John
              Muir Trail. The Lake Italy Trail turned out to be a much better
              choice. It was better maintained and much easier to follow than
              the Seven Gables trail. The trail ran through a steep oscillating
              granite canyon and followed the drainage from large Lake Italy
              farther ahead.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={italyMeadow} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              It finally stopped raining around 3pm. As it started to get dark
              we found a nice spot next to the creek to camp for the night. We
              were treated with a brilliant orange sherbert sunset that evening.
              This fortunately was the last day we would have to deal with rain.
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
              We woke up to beautiful clear weather and spread all our gear to
              dry out in the sun. We had at least fifteen miles to go to get
              back to the trailhead.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={clothingPano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              We continued up the trail toward Lake Italy. The scenery got more
              dramatic the higher we climbed. We were surrounded by large
              granite canyon walls. The sound of running water was every where
              has the mountains drained from the previous days deluge.
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
            <div className={classes["video"]}>
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
            </div>

            <div className={classes["responsive__container-70"]}>
              <img src={samHikeMtns} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              We crossed the creek several times and eventually arrived at Lake
              Italy. We were way above the tree line so vegetation was very
              sparse. Everywhere you looked you were surrounded by granite.
              After taking a break and some pictures we continued up towards
              Italy Pass.
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
              There was a lot of rock hopping to get there. Finally we arrived
              at Italy Pass and I took the opportunity to summit adjacent Mt.
              Julius Ceaser. The view from the mountain was amazing, offering
              sweeping panoramic views in all directions. I looked down upon
              Granite Park and the Chalfant Basin to the South and Lake Italy to
              the NorthWest. It appeared to be an endless sea of mountains in
              almost all directions.
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
            <div className={classes["video"]}>
              <video
                className={classes["video__content"]}
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={mtJuliusCeaserVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
            <p className={classes["blog__text"]}>
              After many pictures I returned to the Pass, and we continued on
              our quest to the car. We still had a ways to go. Instead of
              returning the way we came back down Granite Park, we decided to
              follow the adjacent Chalfant Lakes drainage back down to Honeymoon
              Lake. I’m Glad we did for it was a beautiful detour.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={graniteParkLakePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              It was nice leaving the granite boulder fields behind and walking
              on some grass and soil for a change. The weather held up and the
              Chalfant Lakes were beautiful and inviting. Sadly we didn’t have
              time to stay. We passed the series of lakes and our route
              steepened as we followed the Chalfant Lake drainage down to
              Honeymoon Lake. We were treated to more glorious mountain views as
              we descended.
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
              We arrived at the shores of Honeymoon lake on the opposite side we
              had camped a few days earlier. I opted to use the pack raft to
              ferry our stuff to the other side where the trail was. It was
              growing later in the afternoon as we joined the trail again and
              followed pine creek down past the pine lakes.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={honeymoonLakePano} alt="Italy Pass Pano" />
            </div>
            <p className={classes["blog__text"]}>
              The distance was taking its toll on Sam at this point. We had
              covered a lot of difficult terrain on this trip and suffered some
              less than ideal weather while we covered it. Thank fully the
              weather remained sunny. It was nice seeing the area in the
              sunlight for a change as we returned.
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
            <p className={classes["blog__text"]}>
              I took a nice panorama of pine creek falls as we made our way down
              the endless switchbacks. We finally arrived at the car as it got
              dark. We were exhausted. This had been quite a challenging trip.
              The daily thunderstorms had forced me to alter my itenerary a bit
              which resulted in some higher mileage days than I wanted. Over all
              I had an amazing time. I got some great photos and got to
              experience a lot of premium Sierra backcountry. It will be a trip
              Sam and I will never forget.
            </p>
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
          <Link className={classes["blogs-link"]} to="/blog">
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GranitePark22Blog;
