import React from 'react'
import './ourWork.scss'
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    fontFamily: 'Helvetica, Arial, Lucida, sans-serif',
      fontSize: '14px',
      letterSpacing: '2px',
      lineHeight: '23.8px',
      textAlign: 'center',
      backgroundColor: '#e2231a'

  },
}));



export default function OurWork() {
    const classes = useStyles();
    return (
        <article>
            <section id='showme'>
                 <h2 id='goods'>Show me the goods!</h2>
                <p className='favorite'>You made it to our favorite page! Feel free to browse through some of our best work below.</p>
                <Fab variant="extended" aria-label="delete" className={classes.fab} color='secondary' size='large'>
        BOOK A COFFEE MEET-N-GREET
      </Fab>
            </section>

    </article>
    )

}