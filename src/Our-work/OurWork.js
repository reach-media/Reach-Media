import React from 'react'
import './ourWork.scss'
import Fab from "@material-ui/core/Fab";
import MailOutline from  "@material-ui/icons/MailOutline";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
}));



export default function OurWork() {
    const classes = useStyles();
    return (
        <article>
            <section id='showme'>
                 <h2>Show me the goods!</h2>
                <p>you made it to our favorite page! Feel free to browse through some of our work below</p>
                <Fab variant="extended" aria-label="delete" className={classes.fab} color='secondary'>
        BOOK A COFFEE MEET-N-GREET
      </Fab>
            </section>

    </article>
    )

}