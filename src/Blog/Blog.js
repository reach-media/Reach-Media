import React from 'react'
import './blog.scss'
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core";
import Button from "reactstrap/es/Button";
import SocialCornerLogo from '../assets/socialcornerlogo.png'




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
            <section id='showme'>
                 <h2 id='goods'>Show me the goods!</h2>
                <p className='favorite'>You made it to our favorite page! Feel free to browse through some of our best work below.</p>
                <Fab variant="extended" aria-label="delete" className={classes.fab} color='secondary' size='large'>
        BOOK A COFFEE MEET-N-GREET
      </Fab>


            </section>
            <section className='projectsCont'>
                    <div className='socialCorner'>
                        <img src={SocialCornerLogo} alt='socialcornerproject' height={150}/>
                        <Button>Hit</Button>
                    </div>

                <div className='socialCorner'>
                        <img src={SocialCornerLogo} alt='socialcornerproject' height={150}/>
                        <Button>Hit</Button>
                    </div>

                <div className='socialCorner'>
                        <img src={SocialCornerLogo} alt='socialcornerproject' height={150}/>
                        <Button>Hit</Button>
                    </div>

                 <div className='socialCorner'>
                        <img src={SocialCornerLogo} alt='socialcornerproject' height={150}/>
                        <Button>Hit</Button>
                    </div>



                </section>
  <h1 id="connect">LET'S CONNECT!</h1>


    </article>
    )

}