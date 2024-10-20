import { FaHeart, FaStar } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

const FoodCard = ({isFavorite, foodName, foodType, foodImg, foodPrice, footRating}) => {
  return (
    <div className='w-[380px] h-[140px] bg-white flex flex-row relative rounded-xl drop-shadow-md hover:scale-105 p-4 hover:drop-shadow-xl'>
        <div className='flex flex-col gap-2'>
            <p className='text-[#A3A3A3] text-xs font-bold'>In {foodType}</p>
            <h2 className='font-bold text-xl h-3/6 content-center max-sm:text-[18px]'>{foodName}</h2>
            <div className='flex flex-row gap-8 justify-center items-center'>
                <p className='text-[16px] font-semibold'><span className='text-[#F66263] text-xl font-semibold'>$</span>{foodPrice}</p>
                <div className='flex flex-row gap-1 justify-center items-center'>
                    <FaStar className='text-[#FF7A28]'/>
                    <p className='text-[#5A5C62] text-[16px] font-semibold'>{footRating ? footRating : 4.5}</p>
                    <div className='bg-[#2A6E4F] ml-2 text-white text-[11px] w-[25px] h-[25px] flex justify-center items-center rounded-md cursor-pointer hover:scale-110'>
                    <FaCartShopping />
                    </div>
                </div>
            </div>
        </div>
        <img src={foodImg} className='w-[120px] h-[120px] rounded-full absolute right-6 top-[-25px] shadow-xl' />
        <div className='flex w-full justify-end items-end pr-2 text-xl'>
            <FaHeart className={`hover:scale-110 ${isFavorite ? 'text-[#FF7A28]' : 'text-[#D9D9D9]'} cursor-pointer`}/>
        </div>
    </div>
  )
}

export default FoodCard
