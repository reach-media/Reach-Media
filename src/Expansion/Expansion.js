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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

// import React, { useState } from "react";
// import "./Expansion.css";
// import { withStyles } from "@material-ui/core/styles";
// import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
// import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import MailOutline from "@material-ui/icons/MailOutline";
// import Fab from "@material-ui/core/Fab";

// const ExpansionPanel = withStyles({
//   root: {
//     border: "1px solid rgba(0, 0, 0, .125)",
//     boxShadow: "none",
//     "&:not(:last-child)": {
//       borderBottom: 0
//     },
//     "&:before": {
//       display: "none"
//     },
//     "&$expanded": {
//       margin: "auto"
//     }
//   },
//   expanded: {}
// })(MuiExpansionPanel);

// const ExpansionPanelSummary = withStyles({
//   root: {
//     backgroundColor: "rgba(0, 0, 0, .03)",
//     borderBottom: "1px solid rgba(0, 0, 0, .125)",
//     marginBottom: -1,
//     minHeight: 56,
//     "&$expanded": {
//       minHeight: 56
//     }
//   },
//   content: {
//     "&$expanded": {
//       margin: "12px 0"
//     }
//   },
//   expanded: {}
// })(MuiExpansionPanelSummary);

// const ExpansionPanelDetails = withStyles(theme => ({
//   root: {
//     padding: theme.spacing(2)
//   }
// }))(MuiExpansionPanelDetails);

// const useStyles = makeStyles(theme => ({
//   fab: {
//     margin: theme.spacing(1),
//     fontFamily: "Helvetica, Arial, Lucida, sans-serif",
//     fontSize: "14px",
//     letterSpacing: "2px",
//     lineHeight: "23.8px",
//     textAlign: "center",
//     backgroundColor: "#e2231a"
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1)
//   }
// }));

// export default function CustomizedExpansionPanels() {
//   const [expanded, setExpanded] = React.useState("panel1");
//   const [expand, setExpand] = useState(false);

//   const classes = useStyles();

//   const handleChange = panel => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };
//   const handleExpand = () => {
//     setExpand(false);
//   };

//   return (
//     <div id="expanding">
//       <ExpansionPanel
//         square
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <ExpansionPanelSummary
//           aria-controls="panel1d-content"
//           id="panel1d-header"
//         >
//           <Fab
//             // onClick={handleExpand}
//             variant="extended"
//             aria-label="delete"
//             className={classes.fab}
//             color="secondary"
//           >
//             <MailOutline className={classes.extendedIcon} />
//             Connect With Us
//           </Fab>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     </div>
//   );
// }
