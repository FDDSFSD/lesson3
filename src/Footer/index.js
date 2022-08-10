import React from 'react'
import Britlex from '../Britlex.png'
import { Sc } from '../Page1';
import styles from './index.module.css'

export default function Footer() {
    console.log('footer');
  return (
    <Sc>
      <img src={Britlex} alt='britlex'/>
      <p className={styles.ft}>Terms and Conditions • Privacy Policy • Cookie Policy</p>
    
    </Sc>
  )
}