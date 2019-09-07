import React, { useState } from "react";
import "./WhoWeAre.css";
import { makeStyles } from "@material-ui/core/styles";
import MailOutline from "@material-ui/icons/MailOutline";
import Fab from "@material-ui/core/Fab";
import Expansion from "../Expansion/Expansion";
import VisionExpansion from "../Expansion/VisionExpansion";
import LoveExpansion from "../Expansion/LoveExpansion";

import NewStory from "../assets/newStory1.jpg";
import NewLove from "../assets/newLove1.jpg";
import NewVision from "../assets/newVision1.jpg";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    fontFamily: "Helvetica, Arial, Lucida, sans-serif",
    fontSize: "14px",
    letterSpacing: "2px",
    lineHeight: "23.8px",
    textAlign: "center",
    backgroundColor: "#e2231a"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function WhoWeAre() {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <div id="WhoWeAre_background">
        <div id="we_are">
          <h1 id="fully_service_statement">
            We are a full-service software and digital marketing agency here to
            help you <span>Reach</span> your full potential.
          </h1>
          <p>
            Our methodology is simple: Provide Excellent solutions and build
            lasting relationships. We Learn about your vision, create solutions,
            and provide continious support.
          </p>
          {/* <div id="fab">
            <Fab
              variant="extended"
              aria-label="delete"
              className={classes.fab}
              color="secondary"
            >
              <MailOutline className={classes.extendedIcon} />
              Connect With Us
            </Fab>
          </div> */}
        </div>
      </div>
      <div id="all_about_us">
        <div id="our_story">
          <img src={NewStory} alt="" />
          <h2>Learn About Our Story</h2>

          <Expansion />
        </div>
        <div id="we_love_whatWeDo">
          <img src={NewLove} alt="" />
          <h2>We Love What We Do</h2>
          <LoveExpansion />
        </div>
        <div id="our_vision">
          <img src={NewVision} alt="" />
          <h2>Our Vision</h2>
          <VisionExpansion />
        </div>

        <div />
      </div>
      {/* {expand ? <Expansion /> : <div>Hi</div>} */}
    </div>
  );
}
