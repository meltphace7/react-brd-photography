import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./WhiteClouds22Blog.module.css";

// DAY 1 IMAGES - 8 IMAGES
import fourthOfJulyLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_FORTH_OF_JULY_LAKE-PANO.jpeg";
import secondLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_SECOND_LAKE.jpeg";
import brockCastlePeakVert from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_PEAK_BROCK_VERT.jpg";
import castleTrailShot from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-TRAIL_SHOT.jpg";
import castlePeakSmallLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_PEAK_OVER_SMALL_LAKE-PANO.jpg";
import castlePeakMeadowPano from "../../../assets/images/ID_CASTLE_MEADOW-PANO.jpg";
import castlePeakReflectionPano from "../../../assets/images/ID_CASTLE_REFLECTION-PANO.jpg";
import castlePeakGrandPano from "../../../assets/images/ID_CASTLE_PEAK_GRAND_PANO.jpg";
// DAY 2 IMAGES - 13 IMAGES
import castleLakeMornReflection from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_LAKE_MORN-PANO.jpg";
import hazySun from "../../../assets/images/blog-images/white-clouds-22/ID_HAZY_SUN.jpeg";
import castleMornShot from "../../../assets/images/ID_CASTLE-MORN-SHOT.jpg";
import castleTopShot from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE_TOP_SHOT.jpg";
import castleTopShotVert from "../../../assets/images/ID_CASTLE_TOP_VERT.jpg";
import eveningSlopeOne from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING_TRAIL_SLOPE-1.jpg";
import eveningSlopeTwo from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING_TRAIL_SLOPE-2.jpg";
import eveningSlopeThree from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING_TRAIL_SLOPE-3.jpg";
import eveningDivideSam from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING-DIVIDE_SAM.jpg";
import eveningCastleShot from "../../../assets/images/blog-images/white-clouds-22/ID_EVENING-CASTLE-SHOT.jpg";
import eveningCastleDivideShot from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-DIVIDE-SHOT.jpg";
import castlePeakDivideSunsetPano from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-PEAK_SUN-TRAIL_PANO.jpg";
import castleDividePano from "../../../assets/images/blog-images/white-clouds-22/ID-Castle-Divide-Pano-V.1.jpg";

// DAY 3 IMAGES - 14 IMAGES
import samCastleTrailVert from "../../../assets/images/blog-images/white-clouds-22/ID_SAM_CASTLE_TRAIL_VERT.jpg";
import logLake from "../../../assets/images/blog-images/white-clouds-22/LOG_LAKE_SHOT.jpg";
import logLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_LOG_LAKE_MOUNTAIN-PANO.jpg";
import grassLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_GRASS_LAKE_PANO.jpg";
import hummockLakeShot from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS-SHOT.jpg";
import lakeVert from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS-VERT-SHOT.jpg";
import hummocksRock from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_LAKE-ROCK-SHOT.jpg";
import hummocksMarshLakePano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCK-LAKE_MARSH_PANO.jpg";
import hummocksPeninsulaPano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCK-LAKE_PENINSULA_PANO.jpg";
import hummocksLakeGrandShot from "../../../assets/images/ID_HUMMOCKS_GRAND-PANO.jpg";
import hummocksLakeMornPano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_SHORE-PANO.jpg";
import hummocksVert from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_VERT.jpeg";
import hummocksGoldenPano from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS-GOLDEN-PANO.jpg";
import hummocksSunRocks from "../../../assets/images/ID_SUN-ROCKS.jpg";

// DAY 4 IMAGES - 15 IMAGES
import hummocksSamTrail from "../../../assets/images/blog-images/white-clouds-22/ID_HUMMOCKS_DAY_SAM-TRAIL.jpg";
import scoopLakePano from "../../../assets/images/ID_SCOOP-LAKE-PANO.jpg";
import scoopLakeVert from "../../../assets/images/blog-images/white-clouds-22/ID_SCOOP-LAKE_VERT.jpg";
import windyDevilVert from "../../../assets/images/blog-images/white-clouds-22/ID_WINDY-DEVIL_VERT.jpg";
import windyDevilPano from "../../../assets/images/ID_WINDY-DEVIL-GRAND-PANO.jpg";
import windyDevilSam from "../../../assets/images/blog-images/white-clouds-22/ID_WINDY-DEVIL_SAM.jpg";
import castleTarn from "../../../assets/images/blog-images/white-clouds-22/ID_CASTLE-TARN.jpg";
import windyDevilValley from "../../../assets/images/blog-images/white-clouds-22/ID_WINDY_DEVIL_VALLEY.jpg";
import slateLake from "../../../assets/images/ID_SLATE_LAKE.jpg";
import quietLakeTopShot from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-CASTLE-SHOT.jpg";
import quietLakeVert from "../../../assets/images/blog-images/white-clouds-22/ID_QUIET-LAKE_VERT.jpg";
import quietLakeFieldPano from "../../../assets/images//ID_QUIET-LAKE_FIELDS_PANO.jpg";
import quietLakeShorePano from "../../../assets/images/ID_QUIET-LAKE_SHORE_PANO.jpg";
import quietLakeReflectionPano from "../../../assets/images/ID_QUIET-LAKE_REFLECTION_PANO.jpg";
import quietLakeSunsetPano from "../../../assets/images/ID_QUIET-LAKE_SUNSET_PANO.jpg";
// DAY 5 IMAGES - 18 IMAGES
import fourLakeBasinPanoOne from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_BASIN_PANO-1.jpg";
import fourLakeBasinPanoTwo from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_BASIN_PANO-2.jpg";
import fourLakeSamVert from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_SAM-VERT.jpg";
import fourLakeShot from "../../../assets/images/blog-images/white-clouds-22/ID_FOUR-LAKE_SHOT.jpg";
import fourLakeBasinGrandPano from "../../../assets/images/ID_FOUR-LAKE_BASIN_GRAND-PANO.jpg";
import devilsStaircaseShot from "../../../assets/images/blog-images/white-clouds-22/ID_DEVILS_STAIR-CASE.jpg";
import bornLakesPano from "../../../assets/images/blog-images/white-clouds-22/ID_BORN-LAKE-PANO-ONE-1.jpg";
import bornLakesPanoWide from "../../../assets/images/blog-images/white-clouds-22/ID_BORN-LAKE-PANO-WIDE.jpg";
import samAntsBasinShot from "../../../assets/images/blog-images/white-clouds-22/ID_SAM_ANTS_BASIN_SHOT.jpg";
import samAntsBasinVert from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_SAM_ROCK_VERT.jpg";
import antsBasinMeadow from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_MEADOW.jpg";
import antsBasinTrailShot from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_TRAIL_SHOT.jpg";
import antsBasinShot from "../../../assets/images/ID_ANTS-BASIN_SHOT.jpg";
import antsBasinPano from "../../../assets/images/blog-images/white-clouds-22/ID_ANTS_BASIN_GRAND-PANO.jpg";
import brockSignage from "../../../assets/images/blog-images/white-clouds-22/ID_BROCK_SIGNAGE-1.jpg";
import mtnTarn from "../../../assets/images/blog-images/white-clouds-22/ID_MTN_TARN.jpg";
import mtnBurn from "../../../assets/images/blog-images/white-clouds-22/ID_MTN_BURN.jpg";
import mtnLake from "../../../assets/images/blog-images/white-clouds-22/ID_MTN_LAKE.jpg";

// VIDEOS - 3 videos

import castlePeakVideo from "../../../assets/videos/Video_Castle-Peak.mp4";
import castleDivideVideo from "../../../assets/videos/Video_Castle-Divide.mp4";
import hummocksLakeVideo from "../../../assets/videos/Video_Hummocks-Lake.mp4";

const WhiteClouds22Blog = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
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
          <div
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            className={classes["blog-header__title-container"]}
          >
            <h1 className={classes["blog-header__title"]}>
              Backpacking The White Clouds Loop
            </h1>
            <h2 className={classes["blog-header__sub-title"]}>
              A 6 day loop through the White Cloud Mountains, featuring Castle
              Peak, Castle Lake, the Castle Divide, 20 Lakes Basin, Quiet Lake,
              the Ants Basin and more
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
              The Castle Lake Loop had been on my radar for a few years and I
              was excited to finally hike it. Sam and I arrived at the trailhead
              around 8am. The parking lot had a hand full of cars. The weather
              was great and the smoke was not too bad considering we were only a
              few miles away from a wildfire that had been burning for a few
              months. We hit the trail towards Fourth of July Lake, where the
              loop junction is. After about a mile and half, we reached the
              lake. I decided to do the loop counter clockwise, towards the
              Chamberlain Basin first instead of the more popular clockwise
              approach. I knew The Chamberlain Basin was one of the highlights
              of the trip and wanted to experience it with as few other hikers
              as possible. Since it was Thursday, I knew we would have a better
              chance at solitude during a weekday as opposed to the weekend. We
              headed South.
            </p>

            <div className={classes["responsive__container-80"]}>
              <img
                src={fourthOfJulyLakePano}
                alt="Fourth of July Lake in Idaho's White Clouds Mountains"
              />
            </div>

            <div className={classes["responsive__container-80"]}>
              <img
                src={secondLakePano}
                alt="Washington Lake in Idaho's White Clouds Mountains"
              />
            </div>

            <p className={classes["blog__text"]}>
              A large fire had burned this area more than a decade ago but there
              were still many stands of healthy trees. We were hiking parallel
              to a large ridge, on the other side of which contained the
              Chamberlain Basin. In about a mile we reached the shores of
              Washington Lake which lay at the base of the ridge. We continued
              for another few easy miles until the trail started switchbacking
              up the ridge. It was at this point we entered mostly burned
              forest. As we approached our pass, we could see the tip of Castle
              Peak, the most distinct land mark of the White Clouds. We finally
              reached the pass and were treated with a stunning view of Castle
              Peak and the Chamberlain Basin below it. Castle Peak was
              incredible. A large mountain with a variety of textures and
              colors. The left side of the mountain is orange-red and has large
              channels eroded into it while the right side is white in color and
              has a much smoother surface in comparison. It is one of the most
              unique and eye-catching mountains I had ever seen. The basin below
              is comprised of rolling hills, open grassy meadows, stands of pine
              trees and small alpine lakes. After taking some pictures we
              eagerly continued down into the lovely valley. The trail meandered
              through the meadows and took us by a small lake with a nice
              campsite above it’s shore. For whatever reason none of the lakes
              in this basin have names on the map. My destination was the medium
              sized lake at the base of Castle Peak. After a leisurely downhill
              stroll we arrived at the lake.
            </p>

            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={brockCastlePeakVert}
                alt="Brock Dallman with Castle Peak and the Chamberlain Basin in the background"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={castleTrailShot}
                alt="The trail to the Chamberlain Basin"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={castlePeakSmallLakePano}
                alt="Unnamed lake in the Chamberlain Basin in Idaho's White Clouds Mountains"
              />
            </div>
            <p className={classes["blog__text"]}>
              There was only one other small group camping at the Eastern end of
              the lake. We gave them a wide birth and found a great spot on the
              South side of the lake with an incredible view of Castle Peak on
              the other side. We set up camp and our hammocks and began to
              relax. The days hike was not super difficult but it was quite hot.
              We spent the afternoon chilling in our hammocks and admiring the
              view. In the late afternoon I decided to go on a walk with my
              camera and get some photos. The lake was very still and gave a
              beautiful reflection of Castle Peak. I headed West and rounded the
              lake and continued uphill. I found a scenic meadow and took some
              photos. I returned backed to camp, we had dinner and then turned
              in for the night.
            </p>

            <div className={classes["responsive__container-95"]}>
              <img
                src={castlePeakMeadowPano}
                alt="Castle Peak above an alpine meadow in Idaho's White Clouds Mountains"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={castlePeakReflectionPano}
                alt="Reflection of Castle Peak in an unamed lake in the Chamberlain Basin"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 2</h2>
              <h3>Castle Lake to Trail Side Camp</h3>
            </div>
            <p className={classes["blog__text"]}>
              Our second day we had planned to spend at camp and enjoy the
              scenery. I woke up early and went on a walk with my camera and
              scrambled a peak to get some early morning shots of Castle Peak.
              When I returned, the water on the lake was still and reflected the
              Peak. It was very serene. We had our breakfast and had a lazy
              morning.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={castleLakeMornReflection}
                alt="Reflection of Castle Peak in an unamed lake in the Chamberlain Basin"
              />
            </div>

            <div className={classes["sony-sixty-thirty__container"]}>
              <img
                className={classes["sony-sixty-thirty__item-1"]}
                src={castleMornShot}
                alt="Morning shot of Castle Peak in Idaho's White Clouds Mountains"
              />
              <img
                className={classes["sony-sixty-thirty__item-2"]}
                src={castleTopShotVert}
                alt="Castle Peak in Idaho's White Clouds Mountains"
              />
            </div>
            <p className={classes["blog__text"]}>
              Around noon we inflated our pack raft and went on a float around
              the lake and enjoyed some beers. After some talk, we agreed we
              should pack up and cover a few miles to break up the trips mileage
              a little better. Before we left I scrambled the peak again and got
              some great late afternoon shots of Caste Peak and the Chamberlain
              Basin below. I returned to camp and we left in the hazy late
              afternoon light.
            </p>
            <div className={classes["responsive__container-80"]}>
              <img
                src={castleTopShot}
                alt="Castle Peak in Idaho's White Clouds Mountains"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={castlePeakGrandPano}
                alt="Castle Peak and the Chamberlain Basin in Idaho's White Clouds Mountains"
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
                <source src={castlePeakVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
            <p className={classes["blog__text"]}>
              We headed out towards the Castle Divide which was the Eastern
              shoulder of Castle Peak. It was a beautiful section of trail and
              the golden hour light made it all the more magical. The trail
              slowly climbed and meandered higher, offering views of the
              mountains and valleys off to the East.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img
                src={hazySun}
                alt="Hazy afternoon Sun over the Chamberlain Basin"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={castlePeakDivideSunsetPano}
                alt="Sam Stych hiking the trail up to the Castle Divide"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={eveningSlopeOne}
                alt="Looking East from the Castle Divide"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={eveningSlopeTwo}
                alt="Mountains to the East of the Castle Divide in Idaho's White Clouds"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={eveningSlopeThree}
                alt="Trail near the Castle Divide"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={eveningDivideSam}
                alt="Sam Stycg hiking up to the Castle Divide"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={eveningCastleShot}
                alt="Castle Peak from the Castle Divide at dusk"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={eveningCastleDivideShot}
                alt="Castle Peak from the Castle Divide at dusk"
              />
            </div>
            <p className={classes["blog__text"]}>
              The light was fading as we finally made it to the top of the
              Castle Divide. The view of Castle Peak from this angle was
              stunning and unique. We gazed at the rest of the White Cloud range
              which extended North. It was getting dark and we needed to move on
              and find camp. I had read about a lake that was hidden in a nook
              North East of Castle Peak. I was looking for a goat trail that led
              there but the lack of light made it very hard. We continued
              downhill back into the tree line. It had gotten dark. I was a
              little disappointed we didn’t find the lake. We found a suitable
              camp spot near the trail and called it a night.
            </p>

            <div className={classes["responsive__container-full"]}>
              <img
                src={castleDividePano}
                alt="The Castle Divide at dusk in the White Clouds Mountains of Idaho"
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
              We woke up at our impromptu camp and packed our stuff. It was less
              smokey and the winds had brought a few clouds. We got back on the
              trail and headed for our next destination, Hummock Lake in the
              Boulder Chain Lakes area. The trail took us downhill first to a
              junction with the Livingston Mill Castle Divide Trail. We went
              West, up towards Boulder Chain Lakes. It wasn’t long before we
              arrived at the lowest in a the series of alpine lakes. The Boulder
              Chain Lakes are a chain of medium sized lakes that all feed into
              one another. The lakes lay between two high rugged ridges on
              either side. The trail weaved through these lakes, slowly gaining
              elevation. Each lake was unique and had its own charm. We stopped
              at one and had lunch.
            </p>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={samCastleTrailVert}
                alt="Sam Stych hiking the White Clouds Loop"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={logLake}
                alt="A lake in the Boulder Lakes Basin of the White Clouds Loop"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={logLakePano}
                alt="A lake in the Boulder Lakes Basin of the White Clouds Loop"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={grassLakePano}
                alt="A lake in the Boulder Lakes Basin of the White Clouds Loop"
              />
            </div>

            <div className={classes["responsive__container-95"]}>
              <img
                src={hummocksMarshLakePano}
                alt="Hourglass Lake in the Boulder Chain Lakes Basin along the White Clouds Loop in Idaho"
              />
            </div>
            <p className={classes["blog__text"]}>
              After lunch we started out again and the trail got a little
              steeper as it took us to the higher cluster of lakes. These lakes
              turned out to be the prettiest of the lot. We were greeted with a
              lake with a unique hourglass shape. Just beyond that was Hummock
              Lake, the largest of the Boulder Chain Lakes. After some scouting
              we found a nice camp spot.
            </p>

            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={lakeVert}
                alt="Hummock Lake in the  Boulder Chain Lakes Basin"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={hummockLakeShot}
                alt="Hummock Lake in the  Boulder Chain Lakes Basin"
              />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img
                src={hummocksPeninsulaPano}
                alt="Hummock Lake in the  Boulder Chain Lakes Basin along the White Clouds Loop"
              />
            </div>

            <div className={classes["custom__container_hummocks"]}>
              <img
                className={classes["custom__hummocks__item-1"]}
                src={hummocksRock}
                alt="Hummock Lake in the  Boulder Chain Lakes Basin along the White Clouds Loop"
              />
              <img
                className={classes["custom__hummocks__item-2"]}
                src={hummocksVert}
                alt="Hummock Lake in the  Boulder Chain Lakes Basin along the White Clouds Loop"
              />
            </div>
            <p className={classes["blog__text"]}>
              The lake had great views of the rugged mountain ridges on almost
              all sides. This whole area was very beautiful and almost looked
              landscaped. There were many inlets rimmed with grassy meadows and
              rocks. It was however, quite a windy lake which made it hard to
              boat around in our little pack raft.
            </p>

            <div className={classes["responsive__container-80"]}>
              <img
                src={hummocksGoldenPano}
                alt="Hummock Lake in the  Boulder Chain Lakes Basin along the White Clouds Loop"
              />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img
                src={hummocksLakeGrandShot}
                alt="Hummock Lake in the  Boulder Chain Lakes Basin along the White Clouds Loop"
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
              In the late afternoon we went on a walk around the South shore of
              Hummock lake and continued up the trail to Scoop lake which
              featured a higher vista of Hummock Lake below. We hung out for a
              bit, taking some pictures and enjoying the view before continuing
              back to camp. That night the wind blew in smoke from the wildfire,
              which combined with the high winds, made for a difficult night
              sleep.
            </p>

            <div className={classes["responsive__container-70"]}>
              <img
                src={hummocksSunRocks}
                alt="Sun setting on rocks in the Boulder Chain Lakes in Idaho's White Clouds Mountains"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 4</h2>
              <h3>Hummocks Lake to Quiet Lake</h3>
            </div>
            <p className={classes["blog__text"]}>
              After a smokey windy night, I awoke to clear skies and went on a
              morning stroll with my camera to nearby Hourglass Lake. Upon some
              exploration I found a great spot that I kind of regretted not
              finding earlier. The spot and Hourglass lake in general was much
              more sheltered from the winds than Hummock lake.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img
                src={hummocksLakeMornPano}
                alt="Panorama of Hummock Lake, in the Boulder Chain Lakes along Idaho's White Clouds Loop"
              />
            </div>

            <div className={classes["custom__container_scoop"]}>
              <img
                className={classes["custom__scoop__item-1"]}
                src={scoopLakeVert}
                alt="Scoop Lake in Idaho's White Clouds Mountains"
              />
              <img
                className={classes["custom__scoop__item-2"]}
                src={hummocksSamTrail}
                alt="Sam Stych hiking by Scoop Lake on the White Clouds Loop trail"
              />
            </div>
            <p className={classes["blog__text"]}>
              After some breakfast and coffee, Sam and I continued our journey
              which would take us past Scoop lake and up to the pass above,
              rightfully called Windy Devil Pass. The smoke had mostly cleared
              by this point and it was a beautiful sunny day. We headed back up
              to Scoop lake and continued past it to a series of rocky
              switchbacks. In not to long we were at the top of Windy Devil Pass
              which offered great views of the Boulder Chain Lakes we had just
              hiked up from. We were now in open rocky high country.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img
                src={scoopLakePano}
                alt="Scoop Lake on the White Clouds Loop trail"
              />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img
                src={windyDevilPano}
                alt="Windy Devil Pass on the White Clouds Loop in Idaho"
              />
            </div>

            <div className={classes["sony-thirty-sixty__container"]}>
              <img
                className={classes["sony-thirty-sixty__item-1"]}
                src={windyDevilVert}
                alt="Windy Devil Pass on the White Clouds Loop in Idaho"
              />
              <img
                className={classes["sony-thirty-sixty__item-2"]}
                src={windyDevilSam}
                alt="Sam hiking near Windy Devil Pass along the White Clouds Loop in Idaho"
              />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={windyDevilValley}
                alt="Mountains along the White Clouds Loop trail in Idaho"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={castleTarn}
                alt="A mountain tarn with Castle Peak in the background"
              />
            </div>
            <p className={classes["blog__text"]}>
              We continued a little ways until we saw a small alpine tarn with
              Castle Peak standing prominently behind it. We were heading to
              Quiet Lake which is located at the bottom of the South side of
              Castle Peak. This tarn marked where we must leave the trail and
              begin an off trail traverse down to Quiet Lake. We continued
              downhill to a couple of small lakes. The route got steep in some
              places but there was a well traveled goat trail to follow. The
              views of Castle Peak got better and were a lot different than the
              views from the Chamberlain Basin. We continued the steep descent
              down and got our first glimpse of Quiet Lake down below.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={slateLake} alt="Slate Lake and Castle Peak" />
            </div>

            <div className={classes["sony-sixty-thirty__container"]}>
              <img
                className={classes["sony-sixty-thirty__item-1"]}
                src={quietLakeTopShot}
                alt="Quiet Lake and Castle Peak"
              />
              <img
                className={classes["sony-sixty-thirty__item-2"]}
                src={quietLakeVert}
                alt="Near the shores of Quiet Lake in the White Clouds"
              />
            </div>
            <p className={classes["blog__text"]}>
              Finally we reached the bottom and headed South to the shores of
              Quiet Lake. The lake was stunning and located below a sawtooth
              ridge that extended from Castle Peak. We headed South along the
              Western Shore until we found a great campsite at the lake's
              southern end. We set up our tent and hammocks and enjoyed the
              afternoon. It appeared we had the lake all to ourselves. The lake
              was mostly windy but the Southern end, where we were, offered some
              shelter from it. I went on a little walk and took some photos in
              the afternoon. It was a very photogenic lake. I returned to our
              camp and continued taking photos as the light changed.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={quietLakeFieldPano} alt="Quiet Lake and Castle Peak" />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img
                src={quietLakeShorePano}
                alt="The peaceful shores of Quiet Lake on a lazy afternoon"
              />
            </div>

            <div className={classes["responsive__container-90"]}>
              <img src={quietLakeReflectionPano} alt="Quiet Lake" />
            </div>
            <p className={classes["blog__text"]}>
              We made dinner and were treated to a nice sunset. The smoke from
              the nearby wildfire was rising up behind Castle Peak and being lit
              up by the setting sun. Sam turned in for the night as it got
              darker. I decided to do a little fishing as we were in an ideal
              spot for that. Within four casts I had a fish on! It put up a good
              fight and was quite the specimen. I fried it up and ate it before
              turning in for the night.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={quietLakeSunsetPano}
                alt="A fiery Sunset behind Castle Peak and Quiet Lake"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 5</h2>
              <h3>Quiet Lake to Trailhead</h3>
            </div>
            <p className={classes["blog__text"]}>
              We awoke fairly early for we had some serious scrambling and
              hiking to do, not to mention a seven hour car ride back home. We
              ate breakfast and headed out. This was to be the most challenging
              section of our trip. There was no official trail for the next
              couple miles. We had to scramble up a boulder field to the rugged
              Four Lake Basin above us, then summit the pass above that, and
              descend steeply into the Born Lakes area on the other side. The
              trail description I had read noted it as very steep and
              precarious. We started our uphill scramble.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={fourLakeBasinPanoOne}
                alt="Four Lakes Basin in the White Clouds Mountains of Idaho"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={fourLakeBasinPanoTwo}
                alt="Four Lakes Basin in the White Clouds Mountains of Idaho"
              />
            </div>
            <p className={classes["blog__text"]}>
              After a while we reached the Four Lakes Basin and our route
              leveled out as we followed a path through the lakes. It was still
              a very rocky desolate area with a few groupings of trees. We
              continued on our faint and rugged path up the steep rocky slope to
              our pass.
            </p>
            <div className={classes["sony-thirty-sixty__container"]}>
              <img
                className={classes["sony-thirty-sixty__item-1"]}
                src={fourLakeSamVert}
                alt="Sam Stych hiking up from the Four Lakes Basin in the White Clouds Mountains of Idaho"
              />
              <img
                className={classes["sony-thirty-sixty__item-2"]}
                src={fourLakeShot}
                alt="Four Lakes Basin in the White Clouds Mountains of Idaho"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={fourLakeBasinGrandPano}
                alt="Panorama of the Four Lakes Basin in the White Clouds Mountains of Idaho"
              />
            </div>
            <p className={classes["blog__text"]}>
              At last we reached the top. I spotted our steep goat trail down to
              the valley below and we began to descend.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img
                src={devilsStaircaseShot}
                alt="The Devil's Staircase above Born Lakes on the White Clouds Loop trail"
              />
            </div>
            <p className={classes["blog__text"]}>
              On our way down we met a couple from White Salmon who were just
              starting their loop. They told us of a beautiful section of the
              White Clouds to the North that we should check out. After some
              chit chat we continued on down. We finally left the loose rocky
              slopes and followed a goat trail into sparse pine forest towards
              the largest of the Born Lakes. We emerged from the woods with the
              lake in sight and circled around the shoreline. We took a much
              deserved lakeside break and had some snacks. The lake was fairly
              shallow, rimmed with grassy meadows and had a mountainous
              backdrop.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={bornLakesPano}
                alt="Born Lakes on the White Clouds Loop trail"
              />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img
                src={bornLakesPanoWide}
                alt="Born Lakes on the White Clouds Loop trail"
              />
            </div>
            <p className={classes["blog__text"]}>
              The hardest hiking was behind us. We continued on, through
              sporadic stands of pine forest and open rocky areas. It was
              getting smokier as the day progressed. We entered the open Ants
              Basin area which yielded wide open views of the White Clouds
              mountains to the North. The trail started to switchback up a pass
              and we were treated to a grand view of the Ants Basin and
              surrounding mountains.
            </p>
            <div className={classes["sony-thirty-sixty__container"]}>
              <img
                className={classes["sony-thirty-sixty__item-1"]}
                src={samAntsBasinVert}
                alt="Sam Stych hiking towards the Ants Basin on the White Clouds Loop trail in Idaho"
              />
              <img
                className={classes["sony-thirty-sixty__item-2"]}
                src={samAntsBasinShot}
                alt="Sam Stych hiking towards the Ants Basin on the White Clouds Loop trail in Idaho"
              />
            </div>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={antsBasinMeadow}
                alt="The Ants Basin on the White Clouds Loop trail in Idaho"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={antsBasinTrailShot}
                alt="The Ants Basin on the White Clouds Loop trail in Idaho"
              />
            </div>

            <div className={classes["responsive__container-70"]}>
              <img
                src={antsBasinShot}
                alt="The Ants Basin on the White Clouds Loop trail in Idaho"
              />
            </div>

            <div className={classes["responsive__container-full"]}>
              <img
                src={antsBasinPano}
                alt="A panorama of the Ants Basin on the White Clouds Loop trail in Idaho"
              />
            </div>
            <p className={classes["blog__text"]}>
              We continued on leaving the Ants Basin behind and Fourth of July
              Lake came into view on the valley floor below. The end of our hike
              was near. The moderately graded trail took us past a large tarn
              and eventually took us back to Fourth of July lake, where we took
              the 1.5 mile trail back to the parking lot.
            </p>

            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={mtnBurn}
                alt="The trail passing through some burnt trees on the White Clouds Loop"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={mtnLake}
                alt="Fourth of July Lake from high up on the White Clouds Loop"
              />
            </div>

            <div className={classes["responsive__container-80"]}>
              <img
                src={mtnTarn}
                alt="A trailside alpine tarn along the White Clouds Loop"
              />
            </div>

            <p className={classes["blog__text"]}>
              This had been a wonderful trip. Lots of gorgeous unique views and
              not many other backpackers. I would definitely to it again. After
              the rugged 14 mile drive on a gravel road back to the main
              highway, we saw a huge smoke plume coming from the South a few
              miles away. High winds had apparently whipped up the wildfire into
              a roaring blaze. We were lucky to have completed this hike when we
              did because the smoke and fire continued to get much worse in the
              following weeks before eventually being put out from the weather.
            </p>

            <div className={classes["responsive__container-70"]}>
              <img
                src={brockSignage}
                alt="Brock Dallman standing near the White Clouds Wilderness sign"
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

export default WhiteClouds22Blog;
