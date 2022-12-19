import React from "react";
import classes from "./SectionBlog.module.css";
import videoBg from "../../assets/videos/Video_paradise_bg_hq.mp4";
import{ Link }from 'react-router-dom'
import profilePic from "../../assets/images/PROFILE_SHOT.jpeg";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const SectionBlog = () => {
  return (
    <div className={classes["section-blog"]}>
      <div className={classes["video-text-box__container"]}>
        <div className={classes["bg-video"]}>
          <video
            className={classes["bg-video__content"]}
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={videoBg} type={"video/mp4"} />
            Your browser is not supported
          </video>
        </div>
        <div className={classes["blog__feature"]}>
          <div className={classes["blog__feature__text"]}>
            <h1>Adventure Blog</h1>
            <p>
              The mountains are home. Follow me on my moutainous quests to
              get the shot.
            </p>
            <Link to="/blog" className={classes["feature-box__link"]}>
              Adventure
              <HiOutlineArrowSmRight className={classes.arrow} size="30px" />
            </Link>
          </div>
          <div className={classes["blog__feature__img-container"]}>
            <img src={profilePic} alt="brock dallman" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
