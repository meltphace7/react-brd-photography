import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import classes from './SectionSierras.module.css'
import paradiseLake from "../../assets/images/CA_PARADISE-LAKE_DAY_HI-RES.jpg";
import sevenGables from "../../assets/images/CA_7-GABLES_LAKE_VERT_HI-RES.jpg";
import goldMtn from "../../assets/images/CA_GOLD-MTN_HI_RES.jpg";
import thousandIsland from "../../assets/images/CA_THOUSAND-ISLAND-LAKE_PANO_lowRes.jpg";
import raeGold from "../../assets/images/CA_RAE-LAKESE_EVE-PANO_HI-RES.jpg";
import graniteOrange from "../../assets/images/CA_GRANITE-PARK_ORANGE_HI-RES.jpg";
import minarets from "../../assets/images/CA_MINARETS-PANO_HI-RES-2.jpg";

import bullfrogVert from "../../assets/images/CA_BULLFROG-LAKE_VERT_HI-RES-1.jpg";
import sevenGablesCreek from "../../assets/images/CA_7-GABLES_VERT_HI-RES.jpg";
import marbleMtn from "../../assets/images/CA_MARBLE-STRIPE-MTN_HI_RES.jpg";
import bearBasinPano from "../../assets/images/CA_BEAR-LAKES_ALPINE-PANO_HI-RES.jpg";
import raeCalm from "../../assets/images/CA_RAE-LAKES_CALM-EVE_HI-RES.jpg";
import marieOrange from "../../assets/images/CA_MARIE-LAKE_ORANGE_HI-RES.jpg";
import bullfrogWide from "../../assets/images/CA_BULLFROG-LAKE_DAY-PANO_HI-RES.jpg";
import treasureLakePano from "../../assets/images/CA_TREASURE-LAKES_PANO_lowRes.jpg";
import { useInView } from "react-intersection-observer";
import kearsarge from "../../assets/images/CA_KEARSARGE-LAKE_REFLECTION_HI-RES.jpg";
import marieBlue from "../../assets/images/CA_MARIE-LAKE_SHADOW-BLUE_HI-RES.jpg";


const SectionSierras = () => {
  // Intersection Observer pop-up / fade animation
  const [sectionOneRevealed, setSectionOneRevealed] = useState(false);

  // Intersection Observer pop-up / fade animation
  const options = { root: null, threshold: 0.1 };

  const { ref: sectionRef, inView: featOneIsVisible } = useInView(options);


  useEffect(() => {
    if (featOneIsVisible) {
      setSectionOneRevealed(true);
    }
  }, [featOneIsVisible]);

  return (
    <section className={classes["section-sierras"]}>
      <div
        ref={sectionRef}
        className={`${classes["sierras__feature-box"]} ${
          !sectionOneRevealed ? classes["section--hidden"] : ""
        }`}
      >
        <Link to="/sierras" className={classes["sierras__feature-box__header"]}>
          <div className={classes["sierras__feature-box__header__text"]}>
            <h1>The Sierra Collection</h1>
            <p>Discover the Range Of Light</p>
          </div>
        </Link>
        <div className={classes["sierras__feature-box__text-box"]}>
          <h2>
            Select images from one of the most beautiful mountain ranges on
            Earth.
          </h2>
        </div>
        <div className={classes["homepage-grid"]}>
          <Link
            to={`/product-detail/6398ea3add1cb8c4baf82e4a`}
            className={`${classes["grid-item"]} ${classes["grid-item-1"]}`}
          >
            <img src={sevenGables} alt="paradise-lake" />
          </Link>
          <Link
            to={`/product-detail/639296261d72a73a340ba245`}
            className={`${classes["grid-item"]} ${classes["grid-item-2"]}`}
          >
            <img src={thousandIsland} alt="lucille-lake" />
          </Link>
          <Link
            to={"/product-detail/6398e878dd1cb8c4baf82e3a"}
            className={`${classes["grid-item"]} ${classes["grid-item-3"]}`}
          >
            <img src={treasureLakePano} alt="mt. st. helens" />
          </Link>
          <Link
            to={"/product-detail/6398e9b8dd1cb8c4baf82e47"}
            className={`${classes["grid-item"]} ${classes["grid-item-4"]}`}
          >
            <img src={bearBasinPano} alt="rae-lakes" />
          </Link>
          <Link
            to={"/product-detail/6398e7e9dd1cb8c4baf82e37"}
            className={`${classes["grid-item"]} ${classes["grid-item-5"]}`}
          >
            <img src={marieBlue} alt="granite park" />
          </Link>
          <Link
            to={"/product-detail/639299da1d72a73a340ba2c1"}
            className={`${classes["grid-item"]} ${classes["grid-item-6"]}`}
          >
            <img src={sevenGablesCreek} alt="rae-lakes" />
          </Link>
          <Link
            to={"/product-detail/639295df1d72a73a340ba23f"}
            className={`${classes["grid-item"]} ${classes["grid-item-7"]}`}
          >
            <img src={raeCalm} alt="bullfrog lake" />
          </Link>
          <Link
            to={"/product-detail/639296c61d72a73a340ba252"}
            className={`${classes["grid-item"]} ${classes["grid-item-8"]}`}
          >
            <img src={graniteOrange} alt="thousand island lake" />
          </Link>
          <Link
            to={"/product-detail/6398e95ddd1cb8c4baf82e42"}
            className={`${classes["grid-item"]} ${classes["grid-item-9"]}`}
          >
            <img src={marieOrange} alt="twin lakes" />
          </Link>
          <Link
            to={"/product-detail/6392968b1d72a73a340ba24c"}
            className={`${classes["grid-item"]} ${classes["grid-item-10"]}`}
          >
            <img src={paradiseLake} alt="McGowan Peak" />
          </Link>
          <Link
            to={"/product-detail/6398e8dfdd1cb8c4baf82e3f"}
            className={`${classes["grid-item"]} ${classes["grid-item-11"]}`}
          >
            <img src={marbleMtn} alt="Kearsarge Lakes" />
          </Link>
          <Link
            to={"/product-detail/6398eac4dd1cb8c4baf82e4d"}
            className={`${classes["grid-item"]} ${classes["grid-item-12"]}`}
          >
            <img src={minarets} alt="lil lakes" />
          </Link>
        </div>
      </div>
      <div className={classes["muir-quote-container"]}>
        <div className={classes["muir-quote-container__overlay"]}>
          <h2 className={classes["muir-quote"]}>
            “This grand show is eternal. It is always sunrise somewhere. The dew
            is never all dried at once. A shower is forever falling. Vapor ever
            rising." - John Muir
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SectionSierras
