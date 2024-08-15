import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <section className={styles.navSection}>
        <nav>
            <img src="src\assets\Food Hub.svg" />
            <input type="text" placeholder='Search' />
        </nav>
        <div className={styles.navCategory}>
            <Button  btnText="All" />
            <Button btnText="All" />
            <Button btnText="All" />
            <Button btnText="All" />
        </div>
    </section>
  )
}

export default Navbar
