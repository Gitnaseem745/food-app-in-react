import React from 'react'
import styles from './Button.module.css'

const Button = ({btnText}) => {
  return (
    <button className={styles.btnRed}>{btnText}</button>
  )
}

export default Button
