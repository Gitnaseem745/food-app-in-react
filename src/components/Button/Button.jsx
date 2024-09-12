import React from 'react'
import styles from './Button.module.css'

const Button = ({btnText, ...res}) => {
  return (
    <button className={styles.btnRed} {...res}>{btnText}</button>
  )
}

export default Button
