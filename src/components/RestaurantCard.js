import { IMG_CDN_URL } from '../config';

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return (
        <div className=' w-56 h-96 p-2 m-2 shadow-lg bg-amber-100 '>
            <img className='h-60 w-52 object-fill ' src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;