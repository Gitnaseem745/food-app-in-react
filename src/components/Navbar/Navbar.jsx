import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import FoodPage from '../FoodCardPage/FoodPage';
import { categories, foodCard } from '../../foodContent';
import { siteLogo } from '../../assets';

const Navbar = () => {
    const [filteredData, setFilteredData] = useState(foodCard);
    const onChangeFilterFood = (e) => {
        let searchedFood = e.target.value;
        const filteredFood = foodCard.filter((food) => food.name.toLowerCase().includes(searchedFood.toLowerCase()));
        { searchedFood==="" ? setFilteredData(foodCard) : setFilteredData(filteredFood) }
    }
    const onClickFilterFoodByMenu = (e) => {
        const currMenu = e.target.innerHTML;
        const filteredFood = foodCard.filter((food) => food.type.toLowerCase().includes(currMenu.toLowerCase()));
        { currMenu.toLowerCase()==="all" ? setFilteredData(foodCard) : setFilteredData(filteredFood) }
    }
  return (
    <section className={styles.navSection}>
        <nav>
            <img src={siteLogo} />
            <input type="text" onChange={onChangeFilterFood} placeholder='Search Food...' />
        </nav>
        <div className={styles.navCategory}>
        {categories.map((category, index)=>(
            <Button btnText={category} key={index} changeMenu={onClickFilterFoodByMenu} />
        ))}
        </div>
        <FoodPage data={filteredData} />
    </section>
  )
}
export default Navbar
