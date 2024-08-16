import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <section className={styles.navSection}>
        <nav>
            <img src="src\assets\FoodHub.svg" />
            <input type="text" placeholder='Search Food...' />
        </nav>
        <div className={styles.navCategory}>
            <Button  btnText="All" />
            <Button btnText="Breakfast" />
            <Button btnText="Lunch" />
            <Button btnText="Dinner" />
        </div>
    </section>
  )
}

export default Navbar
