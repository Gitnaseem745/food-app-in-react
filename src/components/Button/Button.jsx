import React from 'react'
import styles from './Button.module.css'

const Button = ({btnText, changeMenu}) => {
  return (
    <button className={styles.btnRed} onClick={changeMenu}>{btnText}</button>
  )
}

export default Button
