import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./KingsCanyon22Blog.module.css";
// DAY 1 IMAGES - 6 IMAGES
import trailSign from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_Inyo_sign-vert.jpeg";
import potholeLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_Pothole-lake-vert.jpeg";
import gilbertLakePano from "../../../assets/images/blog-images/kcnp-22/CA_GILBERT-LAKE_PANO.jpg";
import flowersLakePano from "../../../assets/images/blog-images/kcnp-22/CA_FLOWER-LAKE_PANO.jpg";
import kearsargePano from "../../../assets/images/blog-images/kcnp-22/CA_KEARSARGE-PASS_PANO.jpg";
import potholeLakeLargePano from "../../../assets/images/blog-images/kcnp-22/CA_POTHOLE-LAKE_PANO_PANO.jpg";
import kearsargeLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_kearsarge-pano.jpeg";
import kearsargeAfternoonPano from "../../../assets/images/blog-images/kcnp-22/CA_KEARSARGE-LAKE-AFTERNOON_PANO_PANO.jpg";
import redMountainSundown from "../../../assets/images/blog-images/kcnp-22/CA_RED-MTN.jpg";
import kearsargeSundown from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_kearsarge-sundown.jpeg";
// DAY 2 IMAGES - 8 IMAGES
import kearsargePanoOne from "../../../assets/images/CA_KEARSARGE-LAKE_MORN-LIGHT_HI-RES.jpg";
import kearsargePanoTwo from "../../../assets/images/CA_KEARSARGE-LAKE_REFLECTION_HI-RES.jpg";
import samBullfrogLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP-cutie-babe-bullfrog-lk.jpeg";
import brockBullfrogLake from "../../../assets/images/blog-images/kcnp-22/KCNP_BLOG_BROCK_BULLFROG-LK.jpeg";
import bullfrogLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BULLFROG_LK_VERT.jpeg";
import bullfrogLakeDayPano from "../../../assets/images/CA_BULLFROG-LAKE_DAY-PANO_HI-RES.jpg";
import glennPass from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_GLENN_PASS_PANO.jpeg";
import paintedLadyVert from "../../../assets/images/blog-images/kcnp-22/CA_RAE-LAKE-VERT.jpg";
import samDeerVert from "../../../assets/images/blog-images/kcnp-22/CA_RAE-LAKE-SAM-DEER-VERT.jpg";
import paintedLadyTrailVert from "../../../assets/images/blog-images/kcnp-22/CA_PAINTED-LADY-TRAIL-VERT.jpg";
import paintedLadyPano from "../../../assets/images/blog-images/kcnp-22/CA_PAINTED-LADY-PANO.jpg";
import raeLakeTrailPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_LAKE_TRAIL_PANO.jpeg";
import raePeninsula from "../../../assets/images/blog-images/kcnp-22/BLOG_RAE_PENINSULA_BEAUT.jpeg";
import raeTentSpot from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_TENT.jpeg";
import raePeninsulaShot from "../../../assets/images/CA_RAE-LAKES_CALM-EVE_HI-RES.jpg";
// DAY 3 IMAGES - 4 IMAGES
import raeMeadowMornPano from "../../../assets/images/CA_RAE-LAKES-MORN-PANO_HI-RES.jpg";
import raeReflection from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_REFLECTION.jpeg";
import samBoat from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_SAM_BOAT.jpeg";
import brockBoatPano from "../../../assets/images/blog-images/kcnp-22/BROCK_BOAT_RAE_LAKES.jpg";
import raeFinn from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_FINN.jpeg";
import raeSunset from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_SUNSET.jpeg";
import raeMeadowSunsetPano from "../../../assets/images/CA_RAE-LAKESE_EVE-PANO_HI-RES.jpg";
// DAY 4 IMAGES - 4 IMAGES
import raeLakesHighView from "../../../assets/images/CA_RAE-LAKES_HIGH-VIEW_HI-RES.jpg";
import finDomePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_FINN_DOME_PANO.jpeg";
import finDomeMeadow from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_FINNDOME_MEADOW.jpeg";
import samJohnMuir from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_SAM_JOHN-MUIR.jpeg";
import bigLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_Big_LAKE-PANO.jpeg";
// DAY 5 IMAGES - 11 IMAGES
import uphillTrees from "../../../assets/images/blog-images/kcnp-22/BLOG_UPHILL-TREK_TREES-VERT.jpeg";
import offTrailRocks from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_OFFTRAIL_ROCKS.jpeg";
import sixtyLakeMTNVert from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-MTN.jpeg";
import sixtyLakeMtnPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-MTN-PANO.jpeg";
import paradiseFound from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_PARADISE-FOUND_VERT.jpeg";
import skinnyDipParadise from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_PARADISE_SAM_VERT.jpeg";
import cutieBabeBandit from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_CUTIE_BABE_BANDIT.jpeg";
import boatParadise from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BOAT-PARADISE.jpeg";
import paradiseLakeWide from "../../../assets/images/blog-images/kcnp-22/PARADISE_LAKE-WIDE.jpg";
import paradiseLake from "../../../assets/images/blog-images/kcnp-22/PARADISE_LAKE-2.jpg";
import paradiseSamMountainShot from "../../../assets/images/blog-images/kcnp-22/CA_SAM-PARADISE-SHOT.jpg";
import paradiseSamStormShot from "../../../assets/images/blog-images/kcnp-22/CA_SAM-PARADISE-STORM-CLOUDS-SHOT.jpg";
import paradiseLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_PARADISE-PANO.jpeg";
import raeValleyPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_VALLEY_PANO.jpeg";
import samValleyPortrait from "../../../assets/images/blog-images/kcnp-22/CA_SAM-VALLEY-PORTRAIT.jpg";
import brockValleyPortrait from "../../../assets/images/blog-images/kcnp-22/CA_BROCK-VALLEY-PORTRAIT-VERT.jpg";
// DAY 6 IMAGES - 10 IMAGES
import raeValleyMornPano from "../../../assets/images/CA_KINGS-BASIN-PANO-1.jpg";
import paradiseTopView from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP-PARADISE_TOP-VIEW-PANO.jpeg";
import sixtyLakeTrekLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-TREK.jpeg";
import trailSideLake from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_TRAILSIDE_LAKE.jpeg";
import sixtyLakeSideTrip from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_60-LAKE-SIDETRIP.jpeg";
import glennPassReturn from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RETURN_GLENN_PASS.jpeg";
import raeLakesReturn from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RETURN_RAE-LAKES-PANO.jpeg";
import bullfrogVistaCamp from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BULLFROG-CAMP.jpeg";
import bullfrogGrandPano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_GRAND-BULLFROG-PANO.jpeg";
import bullfrogEvening from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BULLFROG-EVENING.jpeg";

import bullfrogEveningGolden from "../../../assets/images/CA_BULLFROG-LAKE_GOLDEN_HI-RES.jpg";
// DAY 7 IMAGES - 4 IMAGES
import brockKearsarge from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_BROCK_KEARSARGE-PASS.jpeg";
import potholeLakePano from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_POTHOLE-LAKE-PANO.jpeg";
import backToTrailhead from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_DOWN_TO_TRAILHEAD.jpeg";
import raeLakeCouples from "../../../assets/images/blog-images/kcnp-22/BLOG_KCNP_RAE_COUPLES.jpg";

// VIDEOS - 5 videos
import paradiseVideo from "../../../assets/videos/Video_paradise_bg_hq.mp4";
import bullfrogGoldenVideo from "../../../assets/videos/Video_BullfrogGoldenHour.mp4";
import raeValleyVideo from "../../../assets/videos/Video_RAE_VALLEY.mp4";
import glennPassVideo from "../../../assets/videos/Video_GLENN_PASS.mp4";
import kearsargePassVideo from "../../../assets/videos/Video_KEARSARGE_PASS.mp4";

const KingsCanyon22Blog = () => {
  // Header Parallax Effect
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
              A 7 day trek featuring Kearsarge Pass, Kearsarge Lakes, Bullfrog
              Lake, Glenn Pass, Rae Lakes and The 60 Lakes Basin
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
              This week long trek through Kings Canyon National Park was to be
              the first of two, on our two week adventure in the Eastern
              Sierras. The drive to Onion Valley trailhead was scenic and
              incredibly steep! The trailhead was packed when we arrived at
              around 7:30am Sunday morning. Sam and I started our journey from
              the trailhead around 8am. There were quite a lot of people on the
              trail, which was to be expected. The majority of which were day
              hikers. There was some wildfire smoke in the air but it was a
              bright, beautiful sunny day.
            </p>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={trailSign}
                alt="Inyo National Forest Sign"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={potholeLake}
                alt="Pothole Lake near Kearsarge Pass in the Eastern Sierras"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={gilbertLakePano}
                alt="Gilber Lake in the Easter Sierras"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={flowersLakePano}
                alt="Flower Lake in the Eastern Sierras"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={potholeLakeLargePano}
                alt="Pothole Lake near Kearsarge Pass in the Eastern Sierras"
              />
            </div>
            <p className={classes["blog__text"]}>
              The trail switch backed steadily and took us past several
              beautiful small alpine lakes. Little Pothole, Gilbert and Flower
              lakes. We took short breaks at each one but I was eager to get
              past the crowds and to our destination at Kearsarge Lakes on the
              other side of the pass. The trail didn’t waste much time getting
              us up there. Once you pass Flower Lake, you ascend past the tree
              line and the trail wraps around the rocky scree shores of Big
              Pothole lake below. At this point you get a good panoramic view of
              the rugged mountains in the area.
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
            <div className={classes["responsive__container-90"]}>
              <img
                src={kearsargePano}
                alt="Kearsarge Pass in Kings Canyon National Park, Easter Sierras, California"
              />
            </div>
            <p className={classes["blog__text"]}>
              Kearsarge Pass had a quite a few people there, admiring the view.
              You could see Kearsarge Lakes in the valley below, under a ridge
              of impressive spires. North down the valley, you could see
              Bullfrog Lake. A famous and incredibly photogenic alpine lake.
              After taking in the sights, we descended down the rocky pass.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img
                src={kearsargeLakePano}
                alt="Kearsarge Lakes, Kings Canyon National Park"
              />
            </div>
            <p className={classes["blog__text"]}>
              As we continued down the other side of the pass, the crowds
              thinned out dramatically. We finally approached the spur trail
              that took us down to the lakes. The Kearsage lakes unveiled
              themselves one at a time. Each one more charming than the last. We
              decided to set up camp at the lowest and largest of the lakes. We
              found a nice partially shaded spot in a grove of bristlecone pines
              about a hundred feet from the shore of the lake. Once our camp was
              set up, we spent the afternoon just taking in the gorgeous views.
              The dramatic rock spires above the lake were mesmerizing. The
              water was a sparkling and blue. Massive granite boulders were
              strewn about. The huge walls of the canyon really made you feel
              small. The sound of trickling water everywhere was like a lullaby
              to the ears. We inflated our pack raft and went on a little tandem
              boat ride to explore the lake. After a leisurely afternoon the sun
              finally set. We had dinner and went to sleep excited for the next
              day’s journey.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img
                src={kearsargeAfternoonPano}
                alt="Afternoon sun at Kearsarge Lakes, Kings Canyon National Park, Easter Sierras, California"
              />
            </div>
            <div className={classes["custom__container-red-dusk"]}>
              <img
                className={classes["custom__container-red-dusk__item-1"]}
                src={redMountainSundown}
                alt="Red sunset on a mountain near Kearsarge Lakes"
              />
              <img
                className={classes["custom__container-red-dusk__item-2"]}
                src={kearsargeSundown}
                alt="Sundown over Kearsarge Lake"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 2</h2>
              <h3>Kearsarge Lakes to Rae Lakes</h3>
            </div>
            <p className={classes["blog__text"]}>
              I woke up around 5am to clear skies. The wind had changed and blew
              the smoke away over night. I grabbed my camera and went on a walk
              around the lake, looking for some good photo spots in anticipation
              of the sun rise. I took some nice panoramas of the early sunlight
              shining on the spires above the lowest Kearsarge Lake. As the sun
              rose higher, I ventured to the smaller lake above. I got some more
              great panoramas of the mountains reflecting off the still water of
              the lake. It was hard to stop taking pictures but I knew we had a
              long beautiful hike ahead of us so I went back, had breakfast,
              packed up and took off.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={kearsargePanoOne}
                alt="Panorama of Kearsarge Lakes, Eastern Sierras"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={kearsargePanoTwo}
                alt="Panorama of Kearsarge Lakes, Eastern Sierras"
              />
            </div>
            <p className={classes["blog__text"]}>
              We hiked back up the the main trail and headed North. The views
              were amazing. Everywhere you looked was breathtaking. Bullfrog
              Lake was hard to take your eyes off of. It lays a few hundred feet
              below the trail and is off limits to camping to preserve its
              beauty. We took a break at a nice vista and took some pictures of
              the lake and had a snack. We then continued above and then away
              from the gorgeous lake below, eventually leaving the Kearsarge
              Valley.
            </p>
            <div className={classes["responsive__container-triple"]}>
              <img
                className={classes["responsive__container-triple__item"]}
                src={samBullfrogLake}
                alt="Sam Stych at Bullfrog Lake, Kings Canyon National Park"
              />
              <img
                className={classes["responsive__container-triple__item"]}
                src={bullfrogLake}
                alt="Bullfrog Lake, Kings Canyon National Park"
              />
              <img
                className={classes["responsive__container-triple__item"]}
                src={brockBullfrogLake}
                alt="Brock Dallman at Bullfrog Lake, Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={bullfrogLakeDayPano}
                alt="Bullfrog Lake Panorama, Kings Canyon National Park, Eastern Sierras"
              />
            </div>
            <p className={classes["blog__text"]}>
              The trail then connects with the world famous John Muir Trail and
              steadily climbed, taking us far above Gilbert Lake and higher into
              the mountains. We rose above the tree line and into granite
              boulder fields. We took a lunch break at an unnamed high alpine
              lake below Glenn Pass. We finished our lunch and made the final
              arduous push up to the Pass. After several switchbacks across a
              steep and loose rocky terrain, we arrived at Glenn Pass, elevation
              11,900 ft. We were rewarded with a grand view of the Rae Lakes
              Basin far below us and the rugged rocky topography of the
              surrounding area. After taking it all in, we began our long
              journey down to the Rae Lakes.
            </p>
            <div className={classes["responsive__container-80"]}>
              <img
                src={glennPass}
                alt="Glenn Pass along the John Muir Pass in Kings Canyon National Park"
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
                <source src={glennPassVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
            <p className={classes["blog__text"]}>
              After a beautiful descent back into the tree line and crossing
              several creeks, we arrived at the shores of the first Rae Lake. A
              distinct and picturesque rock formation called the Painted Lady,
              lords over the crystal blue waters of the lake. We were greeted by
              a deer who seemed to follow us for a short while.
            </p>

            <div className={classes["responsive__container-triple"]}>
              <img
                className={classes["responsive__container-triple__item"]}
                src={paintedLadyTrailVert}
                alt="The Painted Lady above the Rae Lakes Basin in Kings Canyon National Park"
              />
              <img
                className={classes["responsive__container-triple__item"]}
                src={samDeerVert}
                alt="Sam Styck and a deer at Rae Lakes"
              />
              <img
                className={classes["responsive__container-triple__item"]}
                src={paintedLadyVert}
                alt="Painted Lady above Rae Lakes, Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={paintedLadyPano}
                alt="Painted Lady above Rae Lakes, Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={raeLakeTrailPano}
                alt="Rae Lakes, Kings Canyon National Park"
              />
            </div>
            <p className={classes["blog__text"]}>
              We continued our journey to the next and largest of the Rae Lakes.
              The area was stunning. A true alpine paradise. After some
              exploring we found a jaw dropping camp up on a rock outcropping,
              looking out over a peninsula towards the Painted Lady and
              surrounding mountains. We set up camp and took in the amazing
              views. It was a long hard day of hiking but we were at our
              premiere destination, with nothing planned for the next day except
              enjoying the area. The mountains turned orange as the sun set and
              we enjoyed our dinner and hit the sack after a long day.
            </p>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={raePeninsula}
                alt="A Peninsula at Rae Lakes in Kings Canyon National Park"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={raeTentSpot}
                alt="Tent spot at Rae Lakes"
              />
            </div>
            <div className={classes["responsive__container-80"]}>
              <img
                src={raePeninsulaShot}
                alt="Sunset at Rae Lakes, Kings Canyon National Park"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 3</h2>
              <h3>Rae Lakes Layover Day</h3>
            </div>
            <p className={classes["blog__text"]}>
              I woke up around 5am to enjoy the morning and get some pictures of
              the sunrise. I ventured above our camp a few hundred yards to
              another rock outcropping that was above a grassy meadow
              overlooking the Lake. There in the meadow, three bucks were
              grazing. It was quite a scene and I took many pictures. The
              morning sun rose illuminating the Rae Lakes basin. I returned to
              camp having taken some great shots and Sam and I enjoyed our
              coffee and breakfast.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img
                src={raeMeadowMornPano}
                alt="Morning View over a meadow of Rae Lakes, Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={raeReflection}
                alt="Mountain Reflection at Rae Lakes, Kings Canyon National Park"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={samBoat}
                alt="Sam Stych with a Alpacka Pack raft at Rae Lakes, Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={brockBoatPano}
                alt="Brock Dallman with an Alpacka Raft at Rae Lakes, Kings Canyon National Park"
              />
            </div>
            <p className={classes["blog__text"]}>
              After breakfast we inflated the pack raft and went on a boat
              mission to circumnavigate the lake and take in the sights. We
              spent most of the afternoon on the boat exploring the many inlets
              and sandy beaches of the lake. Some box wine was also enjoyed. It
              was slightly windy but warm most of the day, but around late
              afternoon we could see some storm clouds rolling in. We decided to
              return to camp and right as we got back the raindrops started
              falling. We took shelter inside the tent and waiting out the rain
              for the next couple hours. Around 6pm the rain stopped and we
              emerged from the tent to have dinner. We were treated to a
              beautiful orange sunset. It had been a lovely day.
            </p>
            <div className={classes["custom__container-fin-rae"]}>
              <img
                className={classes["custom__container-fin-rae__item-1"]}
                src={raeFinn}
                alt="Fin Dome in Kings Canyon National Park"
              />
              <img
                className={classes["custom__container-fin-rae__item-2"]}
                src={raeSunset}
                alt="Sunset at Rae Lakes"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={raeMeadowSunsetPano}
                alt="Sunset at Rae Lakes, Kings Canyon National Park"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 4</h2>
              <h3>Rae Lakes to Off-Trail Backcountry Camp</h3>
            </div>
            <p className={classes["blog__text"]}>
              Again, I awoke early to get some pictures. It was slightly
              overcast. I wanted to scramble up the sides of the canyon to get
              some nice sweeping views of the area. My first destination was a
              high tarn, nestled on the slopes above the middle Rae Lake. The
              tarn turned out to not offer the most open views, so I ventured
              higher, climbing up some boulder fields until I found an open
              vista of the valley below. There were lots of clouds with breaks
              of sunlight. After taking my pictures I began my off trail descent
              back to camp.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img
                src={raeLakesHighView}
                alt="Rae Lakes Basin from high above"
              />
            </div>
            <p className={classes["blog__text"]}>
              Our destination for the night was only a few miles away and I
              convinced Sam to take another boat ride before we left the
              beautiful Rae Lakes Basin. After the boat ride we continued
              downhill to Arrowhead Lake which offered a great view of the
              mighty Fin Dome above it. We continued past the lake, through some
              beautiful alpine meadows. Our plan was to follow the JMT past
              Dollar Lake and then leave the trail and ascend to the 60 Lakes
              Basin on a route I had scouted on Google Earth.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={finDomePano} alt="Fin Dome and Arrowhead Lake" />
            </div>
            <div className={classes["sixty-thirty__container "]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={finDomeMeadow}
                alt="Fin Dome and a meadow in Kings Canyon National Park"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={samJohnMuir}
                alt="Sam Stych doing a John Muir Pose"
              />
            </div>
            <p className={classes["blog__text"]}>
              The weather became overcast and foreboding. Raindrops began
              falling gently at first and then it started pouring. Thunder
              started erupting nearby and echoed loudly through the canyon. It
              appeared we were getting more than we bargained for. After
              reaching our creek crossing we broke away from the trail and began
              climbing off trail uphill towards the 60 Lake Basin. The weather
              did not let up. After a short while it became clear to me it would
              be unwise to continue back above the tree line in the deluge so we
              set up camp between two trees and spent the night hiding from the
              relentless storm outside.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img
                src={bigLakePano}
                alt="Dollar Lake along the John Muir Trail in Kings Canyon National Park"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 5</h2>
              <h3>Off-trail backcountry Camp to 60 Lake Basin</h3>
            </div>
            <p className={classes["blog__text"]}>
              It had finally stopped raining by the morning. We quickly broke
              down camp, had a quick breakfast and continued our off trail quest
              to the 60 Lakes Basin. After about an hour of steep climbing we
              reached the Basin and the terrain leveled off. The rocky boulder
              fields gave way to a series of grassy open meadows with pockets of
              alpine trees. As we continued, alpine tarns and small lakes
              appeared. The clouds started to give way to sunlight. It was a
              gorgeous area.
            </p>
            <div className={classes["custom__container-off-trail"]}>
              <img
                className={classes["custom__container-off-trail__item-1"]}
                src={uphillTrees}
                alt="Sam Stych hiking offtrail towards the Sixty Lake Basin in Kings Canyon National Park"
              />
              <img
                className={classes["custom__container-off-trail__item-2"]}
                src={offTrailRocks}
                alt="Sam Stych hiking offtrail towards the Sixty Lake Basin in Kings Canyon National Park"
              />
              <img
                className={classes["custom__container-off-trail__item-3"]}
                src={sixtyLakeMTNVert}
                alt="Sam Stych resting at a lake in the Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-full"]}>
              <img
                src={sixtyLakeMtnPano}
                alt="Alpine Lake in the Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <p className={classes["blog__text"]}>
              We finally stumbled onto a beautiful alpine lake dotted with small
              islands which featured a grand mountinous backdrop. It was clear
              this would be home for the day and night. I was suprised the lake
              had no name on the map. It was simply stunning. I fittingly gave
              it the name Paradise Lake. It was a perfect place to spend the
              day.
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
            <div className={classes["responsive__container-90"]}>
              <img
                src={paradiseLakeWide}
                alt="Paradise Lake in the Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <div className={classes["thirty-sixty__container"]}>
              <img
                className={classes["thirty-sixty__item-1"]}
                src={paradiseFound}
                alt="Sam Stych at Paradise Lake in the Sixty Lake Basin in Kings Canyon National Park"
              />
              <img
                className={classes["thirty-sixty__item-2"]}
                src={paradiseLake}
                alt="Paradise Lake in the Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-triple"]}>
              <img
                className={classes["responsive__container-triple__item"]}
                src={cutieBabeBandit}
                alt="Cutie Babe nursing on some Bandit Box Wine"
              />
              <img
                className={classes["responsive__container-triple__item"]}
                src={skinnyDipParadise}
                alt="Enjoying the Sixty Lake Basin"
              />
              <img
                className={classes["responsive__container-triple__item"]}
                src={boatParadise}
                alt="Alpacka Pack Raft in the Sixty Lake Basin, Kings Canyon National Park"
              />
            </div>
            <p className={classes["blog__text"]}>
              We enjoyed some wine and boated around the lake, exploring the
              many inlets and islands. The white puffy clouds glided high above.
              We had the whole place to ourselves. It was a magical afternoon.
              As the day grew later it got overcast and rained a little but
              never got too bad. After a full day of alpine enjoyment, we had
              dinner and retired for the night.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img
                src={paradiseLakePano}
                alt="Sam Stych in the Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-split"]}>
              <img
                className={classes["responsive__container-split__item-1"]}
                src={paradiseSamMountainShot}
                alt="Sam Stych in the Sixty Lake Basin in Kings Canyon National Park"
              />
              <img
                className={classes["responsive__container-split__item-2"]}
                src={paradiseSamStormShot}
                alt="Sam Stych in the Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={raeValleyPano}
                alt="Glaciated Valley in Kings Canyon National Park"
              />
            </div>
            <div className={classes["sony-sixty-thirty__container"]}>
              <img
                className={classes["sony-sixty-thirty__item-1"]}
                src={samValleyPortrait}
                alt="Sam Stych"
              />
              <img
                className={classes["sony-sixty-thirty__item-2"]}
                src={brockValleyPortrait}
                alt="Brock Dallman"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 6</h2>
              <h3>60 Lake Basin to Bullfrog Lake Vista</h3>
            </div>
            <p className={classes["blog__text"]}>
              I arose early to scramble the small ridge that divided the 60
              Lakes Basin from the larger basin below, containing Arrowhead and
              Rae Lakes. I took some pictures of the dramatic and beautiful
              landscape around me. I could see the Rae Lakes, the Painted Lady,
              the Fin Dome and the 60 Lakes Basin.
            </p>
            <div className={classes["responsive__container-80"]}>
              <img
                src={raeValleyMornPano}
                alt="Rae Lakes Basin from high above"
              />
            </div>
            <div className={classes["responsive__container-80"]}>
              <img
                src={paradiseTopView}
                alt="Sixty Lake Basin from high above"
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
                <source src={raeValleyVideo} type={"video/mp4"} />
                Your browser is not supported
              </video>
            </div>
            <p className={classes["blog__text"]}>
              After enjoying the sights, I went back down to camp and we packed
              up. We had a long day ahead of us. We had to hike off trail
              through the rest of the 60 Lake Basin and hook into a trail that
              would take us back down to the Rae Lakes and the JMT, where we
              would need to make it over Glenn Pass again. The rest of the 60
              Lakes Basin was beautiful but we had made the right choice staying
              at Paradise Lake. It was indeed the highlight of the area. We took
              a small side trip to one of the larger lakes in the area and got
              some pictures. We returned to the trail, made our descent back
              down to Rae Lakes and headed towards Glenn Pass, our major
              obstacle of the day.
            </p>
            <div className={classes["custom__container-mtn-lakes"]}>
              <img
                className={classes["custom__container-mtn-lakes__item-1"]}
                src={sixtyLakeTrekLake}
                alt="Sixty Lake Basin in Kings Canyon National Park"
              />
              <img
                className={classes["custom__container-mtn-lakes__item-2"]}
                src={sixtyLakeSideTrip}
                alt="Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <div className={classes["responsive__container-90"]}>
              <img
                src={trailSideLake}
                alt="Sixty Lake Basin in Kings Canyon National Park"
              />
            </div>
            <p className={classes["blog__text"]}>
              It started raining as we ascended up the pass. I became nervous
              that we would get stuck in another thunderstorm so I decided we
              should hunker down in one of the last groves of trees before the
              shelterless rocky expanse that lay ahead. The rain got a little
              worse before dying down a bit and luckily the lightning never
              came. We continued up the pass, in the light sporadic rain, and
              finally made it to the top.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={raeLakesReturn} alt="Hiking down to Rae Lakes from the Sixty Lakes Basin in Kings Canyon National Park" />
            </div>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={glennPassReturn}
                alt="Hiking up Glenn Pass on the John Muir Trail"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={bullfrogVistaCamp}
                alt="A nice campspot above Bullfrog Lake"
              />
            </div>
            <p className={classes["blog__text"]}>
              The clouds slowly began to dissipate as we continued down the
              other side of Glenn Pass, back towards Kearsarge Valley. We were
              pretty tired and soggy as we finally made our way back over
              Bullfrog Lake. We found a very scenic open vista to set up camp
              with a wondrous view of Bullfrog Lake and the valley. As we set up
              camp, the golden setting sun burst through the clouds and
              illuminated the lake and valley below. I got some great photos. As
              the sun set, we enjoyed our dinner then turned in for the night.
            </p>
            <div className={classes["responsive__container-full"]}>
              <img src={bullfrogGrandPano} alt="Bullfrog Lake and Kearsarge Valley" />
            </div>
            <div className={classes["responsive__container-70"]}>
              <img src={bullfrogEvening} alt="Bullfrog Lake Sunset" />
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
            <div className={classes["responsive__container-full"]}>
              <img
                src={bullfrogEveningGolden}
                alt="Golden hour shot of Bullfrog Lake and Kearsarge Valley"
              />
            </div>
          </section>
          <section className={classes["blog__section"]}>
            <div className={classes["blog__section-title-container"]}>
              <h2>Day 7</h2>
              <h3>Bullfrog Lake Vista to Trailhead</h3>
            </div>
            <p className={classes["blog__text"]}>
              We awoke to mostly clear skies. It was hard to leave this
              incredible place but we were also eager to get some hot meals and
              showers back in town. After our last breakfast and some more
              photos, we got back on the trail and headed back up the valley
              towards Kearsarge Pass. It was a bright and sunny day. Up at the
              pass, we enjoyed the spectacle one last time, and continued down
              the busy trail to the car.
            </p>
            <div className={classes["responsive__container-90"]}>
              <img src={potholeLakePano} alt="Pothole Lake near Kearsarge Pass" />
            </div>
            <div className={classes["sixty-thirty__container"]}>
              <img
                className={classes["sixty-thirty__item-1"]}
                src={brockKearsarge}
                alt="Brock Dallman at Kearsarge Pass"
              />
              <img
                className={classes["sixty-thirty__item-2"]}
                src={backToTrailhead}
                alt="Sam Stych hiking down to the Onion Valley Trailhead"
              />
            </div>
            <p className={classes["blog__text"]}>
              It was an incredibly beautiful and scenic trip. We had seen lot.
              Our route took us through some of the finest scenery in the
              Sierras. The weather made it challenging at times but overall it
              was in incredible trip we would not soon forget. We still had one
              more week long trek on our Sierra vacation which would prove to be
              quite more challenging than this one.
            </p>
            <div className={classes["responsive__container-70"]}>
              <img src={raeLakeCouples} alt="Brock Dallman and Sam Stych at Rae Lakes in Kings Canyon National Park" />
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

export default KingsCanyon22Blog;
