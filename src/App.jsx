import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
    <Navbar />
    {/* {foodCard.map((food) => {
        <Card cardImg={food.img} cardTitle={food.name} cardText={food.des} cardPrice={food.price}/>
    })} */}
    </>
  )
}

// const foodCard = [
//     {
//         'name': 'Spaghetti Carbonara',
//         'img': './assets/food_1.png',
//         'des': "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, savory, and perfectly seasoned.",
//         'price': `$20.00`,
//     }
// ]

export default App
