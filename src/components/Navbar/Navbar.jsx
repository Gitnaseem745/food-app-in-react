import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import FoodPage from '../FoodCardPage/FoodPage';
import { categories, foodCard } from '../../foodContent';
import { siteLogo } from '../../assets';

const Navbar = () => {
    const [filteredData, setFilteredData] = useState(foodCard);
    const onChangeFilter = (e) => {
        let searchValue = e.target.value;
        if(searchValue===""){
            setFilteredData(foodCard);
        }
        const filtered = foodCard.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredData(filtered);
    }
    const onClickChangeCategory = () =>{
        if(btnText===""){
            setFilteredData(foodCard);
        }
        const filtered = foodCard.filter((food)=> food.name.toLowerCase().includes(btnText));
        setFilteredData(filtered);
    }

  return (
    <section className={styles.navSection}>
        <nav>
            <img src={siteLogo} />
            <input type="text" onChange={onChangeFilter} placeholder='Search Food...' />
        </nav>
        <div className={styles.navCategory}>
        {categories.map((category, index)=>(
            <Button btnText={category} key={index} onClick={onClickChangeCategory} />
        ))}
        </div>
        <FoodPage data={filteredData} />
    </section>
  )
}
export default Navbar
