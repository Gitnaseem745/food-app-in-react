import React from 'react'
import styles from './Button.module.css'

const Button = ({btnText, changeMenu, selectedMenu}) => {
  return (
    <button className={`${selectedMenu==btnText ? styles.selectedMenu : styles.nonSelectedMenu}`} onClick={changeMenu}>{btnText}</button>
  )
}

export default Button
