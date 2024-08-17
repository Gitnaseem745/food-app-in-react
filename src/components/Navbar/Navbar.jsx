import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import Card from '../Card/Card'
import { foodOne } from '../../assets'

const foodCard = [
    {
        name: 'Spaghetti Carbonara',
        img: `${foodOne}`,
        des: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, savory, and perfectly seasoned.",
        price: '$20.00',
    },
    {
        name: 'Spaghetti Carbonara',
        img: `${foodOne}`,
        des: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, savory, and perfectly seasoned.",
        price: '$20.00',
    },
    {
        name: 'Spaghetti Carbonara',
        img: `${foodOne}`,
        des: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, savory, and perfectly seasoned.",
        price: '$20.00',
    },
]

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
        <div className="w-full flex h-screen flex-row gap-4 justify-center items-center">
        {foodCard.map( (food, index) => (
        <Card cardImg={food.img} key={index} cardTitle={food.name} cardText={food.des} cardPrice={food.price}/>
    ))}
        </div>
    </section>
  )
}

export default Navbar
