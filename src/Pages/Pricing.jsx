import React from 'react'
import Online from '../Online.png'
import Lesson from '../Lesson.png'
import Webinar from '../Webinar.png'
import { H1, H2, Pn, Sc } from '../Page1'

export default function Pricing() {
  return (
    <>
    <H1>Pricing</H1>
    <Sc>
      <div>
        <img src={Online} alt="online" />
        <H2>Self-study online course</H2>
        <Pn>Start learning English online in live classes
with qualified EC teachers and students 
from all over the world.</Pn>
        <button><div> £5.99</div> per month</button>
      </div>
      <div>
        <img src={Lesson} alt="lesson" />
        <H2>Live online classes</H2>
        <Pn>Interactive group classes with expert
teachers. Free 7-day trial</Pn>
        <button><div> £12.99</div> per month</button>
      </div>
      <div>
        <img src={Webinar} alt="webinar" />
        <H2>Personal Tuition</H2>
        <Pn>Online one-to-one English tutoring – enjoy
our first session for only $1</Pn>
        <button><div> £20.99</div> per month</button>
      </div>
    </Sc>
    </>
  )
}
