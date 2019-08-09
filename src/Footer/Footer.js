import React from 'react'
import './footer.scss'
import Subscribe from './Subscribe'

export default function Footer(){
    return (
        <footer className='footer'>
            <section>
                <h3>TALK TO US</h3>
                <p>801-123-1234</p>
                <p>reachmedia@gmail.com</p>
            </section>
             <section>
                <h3>KEEP UP WITH REACH MEDIA</h3>
                 <Subscribe/>

            </section>
            <section className='social'>

            </section>
        </footer>
    )
}