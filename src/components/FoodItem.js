import { MENU_IMG_CDN_URL } from '../config';

const FoodItem = ({ item }) => {


    return (
        <div className=' w-56 h-400px p-2 m-2 shadow-lg bg-amber-100 '>
            <img className='h-60 w-52 object-fill ' src={MENU_IMG_CDN_URL + item.card.info.imageId} />
            <h2 className='font-bold text-xl'>{item.card.info.name}</h2>
            <h3>{item.card.info.description}</h3>
            <h4>Price {item.card.info.defaultPrice / 100}</h4>
        </div>
    )
}

export default FoodItem;