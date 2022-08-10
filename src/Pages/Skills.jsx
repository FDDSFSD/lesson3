import React from 'react'
import Shared from './Shared.png'
import Typewriter from './Typewriter.png'
import House from './House.png'
import Podcast from './Podcast.png'
import { Bt, H1, H2, P3, Pn, Sc } from '../Page1'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <>
    <H1>Skills</H1>
    <Sc>
    
      <div className={styles.dv}>
        <img src={Shared} alt='shared'/>
        <H2>Speaking</H2>
        <Pn>Improve your English skills and confidence. 
Live classes and interactive lessons online. 
20% extra free for a limited time only</Pn>

<Pn>Learn English online and improve your 
skills through our high-quality courses
and resources – all designed for adult language learners.</Pn>
        <Bt>Learn more</Bt>
      </div>
      <section>
      <section className={styles.dvd}>
      <div className={styles.dva}>
        <img src={Typewriter} alt='Typewriter'/>
        <H2>Writing</H2>
        <Pn>One of the most important and extensive 
areas of natural science, the science that 
studies substances, also their composition </Pn>
        <Bt><P3>Learn more</P3></Bt>
      </div>
      <div className={styles.dvb}>
        <img src={House} alt='House'/>
        <H2>Reading</H2>
        <Pn>perception and response actions of the user
resulting from the use and/or upcoming use 
of the product, system or service</Pn>
        <Bt><P3>Learn more</P3></Bt>
      </div>
      </section>
      <div className={styles.dvc}>
        <div >
        <H2>Listening</H2>
        <Pn>Here you can find activities to practise
your listening skills. Listening will help you
to improve your understanding </Pn>
        <Bt><P3>Learn more</P3></Bt>
        </div>
        <img src={Podcast} alt='Podcast'/>
      </div>
      </section>
      </Sc>
    </>
  )
}
