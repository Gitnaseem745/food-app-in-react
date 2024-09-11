import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import Card from '../Card/Card'
import { foodOne } from '../../assets'

const Navbar = () => {
    const [filteredData, setFilteredData] = useState([]);
    const onChangeFilter = (e) => {
        let searchValue = e.target.value;
        console.log(searchValue);
        if(searchValue===""){
            setFilteredData(null);
        }
        const filtered = foodCard.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredData(filtered);
    }

  return (
    <section className={styles.navSection}>
        <nav>
            <img src="src\assets\FoodHub.svg" />
            <input type="text" onChange={onChangeFilter} placeholder='Search Food...' />
        </nav>
        <div className={styles.navCategory}>
            <Button  btnText="All" />
            <Button btnText="Breakfast" />
            <Button btnText="Lunch" />
            <Button btnText="Dinner" />
        </div>
        <div className="w-full flex h-screen flex-row flex-wrap gap-4 justify-center items-center">
        {filteredData.map( (food, index) => (
        <Card cardImg={food.img} key={food.name} cardTitle={food.name} cardText={food.des} cardPrice={food.price}/>
    ))}
        </div>
    </section>
  )
}

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

export default Navbar
