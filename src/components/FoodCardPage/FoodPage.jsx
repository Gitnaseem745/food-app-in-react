import FoodCard from '../FoodCard/FoodCard.jsx'
const FoodPage = ({data}) => {
  return (
    <div className="foodPage">
    {data.map( (food, i) => (
    <FoodCard key={i} foodImg={food?.img} foodName={food?.name} foodType={food?.type} foodPrice={food?.price} footRating={food?.rating}/>
))}
    </div>
  )
}

export default FoodPage
