import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import Card from '../Card/Card'

const foodCard = [
    {
        name: 'Spaghetti Carbonara',
        img: 'src\assets\food_1.png',
        des: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, savory, and perfectly seasoned.",
        price: `$20.00`,
    },
    {
        name: 'Spaghetti Carbonara',
        img: 'src\assets\food_1.png',
        des: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, savory, and perfectly seasoned.",
        price: `$20.00`,
    },
    {
        name: 'Spaghetti Carbonara',
        img: 'src\assets\food_1.png',
        des: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, savory, and perfectly seasoned.",
        price: `$20.00`,
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
        <div className="foodcar">
        {foodCard.map((food) => {
        <Card cardImg={food.img} cardTitle={food.name} cardText={food.des} cardPrice={food.price}/>
    })}
        </div>
    </section>
  )
}

export default Navbar
