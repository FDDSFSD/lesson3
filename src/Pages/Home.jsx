import React from 'react'
import Light from '../light.png'
import Learning from '../Learning.png'
import { Bt, Sc } from '../Page1'
import styles from './Home.module.css'
// import { Link } from 'react-router-dom'
export default function Learn() {
  return (
    <>
    <Sc>
       <div className={styles.dv}>
        <div className={styles.dv1}>
          <h1>Learn any Foreign Language</h1>
          <img src={Light}  alt="light" />
          </div>
          <p>With our teachers who write a program for 
          each student, you will be able to make your
          first sketch after the first lesson.</p>
          <Bt>Get started</Bt>
       </div>
       <img src={Learning} className={styles.im} alt="learn" />
    </Sc>
    </>
  )
}