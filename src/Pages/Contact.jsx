import React from 'react'
import { Bt, H1, P3, Pn, Sc } from '../Page1'
import Resurse from '../Resurse.png'

export default function Contact() {
  return (
    <>
    <Sc>
    <img src={Resurse} alt="resurse" />
    <div>
       <H1>Contact Us</H1>
       <Pn>Discover your current English level by taking our free online English test.
        Sign up to our newsletter for learning tips and free resources</Pn>
      <div>
          <input type="email" placeholder='Enter Your E-mail'/>
          <Bt><P3>Subscribe</P3></Bt>
      </div>

    </div>
    </Sc>
    </>
  )
}