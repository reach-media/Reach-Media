import React from "react";
import "./WhoWeAre.css";
import { makeStyles } from "@material-ui/core/styles";
import MailOutline from "@material-ui/icons/MailOutline";
import Fab from "@material-ui/core/Fab";

import Us from "../assets/fatos-bytyqi-Agx5_TLsIf4-unsplash.jpg";

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

  return (
    <div>
      <div id="WhoWeAre_background">
        <div>
          <h1 id="fully_service_statement">
            We are a full-service software and digital marketing agency here to
            help you <span>Reach</span> your full potential.
          </h1>
          <p>
            Our methodology is simple: Provide Excellent solutions, build
            lasting relationships. We Learn about your vision, create solutios,
            and provide continious support.
          </p>
          <Fab
            variant="extended"
            aria-label="delete"
            className={classes.fab}
            color="secondary"
          >
            <MailOutline className={classes.extendedIcon} />
            Connect With Us
          </Fab>
        </div>
      </div>
      <div id="all_about_us">
        <div id="our_story">
          <img src={Us} alt="" />
          <h2>Learn About Our Story</h2>
          <Fab
            variant="extended"
            aria-label="delete"
            className={classes.fab}
            color="secondary"
          >
            <MailOutline className={classes.extendedIcon} />
            What Inspired Us
          </Fab>
        </div>
        <div id="we_love_whatWeDo">
          <img src={Us} alt="" />
          <h2>We Love What We Do</h2>
          <Fab
            id="fab"
            variant="extended"
            aria-label="delete"
            className={classes.fab}
            color="secondary"
          >
            <MailOutline className={classes.extendedIcon} />
            What Inspired Us
          </Fab>
        </div>
        <div id="our_vision">
          <img src={Us} alt="" />
          <h2>Our Vision</h2>
          <Fab
            variant="extended"
            aria-label="delete"
            className={classes.fab}
            color="secondary"
          >
            <MailOutline className={classes.extendedIcon} />
            Learn More
          </Fab>
        </div>

        <div />
      </div>
    </div>
  );
}
