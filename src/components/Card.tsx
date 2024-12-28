import Image from 'next/image'
import React from 'react'
import './components.css'
import CardType from '@/types/cardType'

type PropType = {
  event: CardType
}

const Card = ({ event }: PropType) => {
  return (
    <div className='card'>
      <Image className='card-image' src={event.image} alt='' />
      <h2 className='card-heading'>{event.heading}</h2>
      <p className='card-text'>{event.para1}</p>
      <p className='card-text'>{event.para2}</p>
    </div>
  )
}

export default Card