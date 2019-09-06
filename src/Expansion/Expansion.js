import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailOutline from "@material-ui/icons/MailOutline";
import Fab from "@material-ui/core/Fab";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Fab
            id="fab"
            variant="extended"
            aria-label="delete"
            className={classes.fab}
            color="secondary"
          >
            <MailOutline className={classes.extendedIcon} />
            Our Story
          </Fab>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            In this digital age, the need for software is now more than ever, but it is not just that simple fact inspired us. What really motivated us was a passion
            to provide <em>great</em> solutions to growing businesses. Making a website is the easy part; making a great application that will easily connect to
            customers and optimized to bring in sales with continious support is a service that cannot be provided by everyone, and it is exactly What
            we do here at Reach Media IT.
            {/* customers and transform a 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. */}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
