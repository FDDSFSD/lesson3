import React from 'react'
import { Link } from 'react-router-dom'
import Britlex from '../Britlex.png'
import { Sc } from '../Page1'
import styles from './index.module.css'
export default function Header() {
    
  return (
    <section className={styles.dv}>
        <img src={Britlex} alt='britlex'/>
    <nav>
    
        <ul className={styles.nv}>
        <Link to='/'>Home</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/price'>Pricing</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/users'>users</Link>
        </ul>
    </nav>
        <button>Lets Talk</button>
    </section>
  )
}