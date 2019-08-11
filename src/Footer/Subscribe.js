import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

import MailOutline from  "@material-ui/icons/MailOutline";


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function Subscribe() {
  const classes = useStyles();

  return (
    <div>
      <Fab variant="extended" aria-label="delete" className={classes.fab} color='secondary'>
        <MailOutline className={classes.extendedIcon} />
        Subscribe
      </Fab>
    </div>
  );
}