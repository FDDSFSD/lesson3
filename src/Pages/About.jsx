import React from 'react'
import Business from '../Business.png'
import { H1, Pn, Sc } from '../Page1'
import styles from './About.module.css'

export default function About() {
  return (
    <>
    <Sc>
       <div>
          <H1>About</H1>
          <Pn>The model offers a framework for discussing problems
             related to the user's experience, as well as possible
             ways and means of solving them. Application development
             begins at the top level (strategy), where the future 
             software product is described quite abstractly from the
             point of view of the expectations of both users and the
            customer.
          </Pn>
          <div className={styles.dv}>
            <H1>800</H1>
            <H1>18</H1>
            <H1>6</H1>
          </div>
          <div className={styles.dv} >
            <p>Pupils</p>
            <p>Teachers</p>
            <p>Foreign languages</p>
          </div>
        </div>
        <div>
          <h1>Contact Us</h1>
          <img src={Business} alt='business'/>
        </div>
    </Sc>
    </>
  )
}