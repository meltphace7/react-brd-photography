import React from "react";
import classes from "./About.module.css";
import brockBioPic from "../../assets/images/CA_PORTRAIT_lowRes.jpg";


const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes["about-container"]}>
        <div className={classes["about__text"]}>
          <h3>Amateur Photographer</h3>
          <h1>BROCK DALLMAN</h1>
          <p>
            For over two decades I have explored the mountains and high places
            of the West Coast. From the golden granite high country of the
            Sierras, to the jagged slopes of Washington and the wild mountains
            of Wyoming. Capturing the beauty of these places has evolved over
            the years. The challenge has become an obsession. Photography
            continues to enrich my wilderness experience.
          </p>
        </div>
        <div className={classes["about__image"]}>
          <img src={brockBioPic} alt="Brock Dallman" />
        </div>
      </div>
    </div>
  );
};

export default About;
