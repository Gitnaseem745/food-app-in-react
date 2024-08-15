import React from 'react'
import styles from './Card.module.css'
import Button from '../Button/Button'

const Card = ({cardImg, cardTitle, cardText, cardPrice}) => {
  return (
    <div className={styles.mainCard}>
        <div className={styles.cardImg}>
            <img src={cardImg} className='w-full h-full' />
        </div>
        <div className={styles.cardContent}>
            <h2>{cardTitle}</h2>
            <p>{cardText}</p>
            <Button btnText={cardPrice} />
        </div>
    </div>
  )
}

export default Card
