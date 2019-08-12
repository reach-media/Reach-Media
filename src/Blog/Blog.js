import React from 'react'
import './blog.scss'
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



export default function Blog() {
    const classes = useStyles();
    return (
        <article>
            <section id='marketing'>
                 <h2 id='goods'>Eager to learn about marketing?</h2>
                 <h2 id='goods'>Read our blog!</h2>
                <p className='favorite'>We love to teach you about the latest in web design, digital marketing, and more!</p>
                <Fab variant="extended" aria-label="delete" className={classes.fab} color='secondary' size='large'>
        BOOK A COFFEE MEET-N-GREET
      </Fab>


            </section>


    </article>
    )

}