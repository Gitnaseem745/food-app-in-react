import Card from '../Card/Card.jsx';
const FoodPage = ({data}) => {
  return (
    <div className="foodPage">
    {data.map( (food) => (
    <Card cardImg={food.img} key={food.name} cardTitle={food.name} cardText={food.des} cardPrice={food.price}/>
))}
    </div>
  )
}

export default FoodPage
