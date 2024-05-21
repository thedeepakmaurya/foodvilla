import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config"
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import {addItem} from "../utils/cartSlice"
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
    const { id } = useParams();
    const {restaurant, items} = useRestaurant(id); 

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
          dispatch(addItem(item));    }

    return (!restaurant) ? <Shimmer /> : (
        <div className="flex justify-center align-middle gap-20 p-10">
            <div >
                <h1 className=" mb-2">Restaurant id : {id}</h1>
                <h2 className="text-xl font-bold mb-1">{restaurant?.cards[0]?.card?.card?.text}</h2>
                <img className="h-60 w-52 mb-1" src={IMG_CDN_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating} star</h3>
                <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1 className="font-bold text-xl mb-2">Menu</h1>
                <ul data-testid="menu">
                    {Array.isArray(items) && items.map((item) => (
                        <li className="list-decimal" key={item.card.info.id}>{item.card.info.name} - <button data-testid="addBtn" className="p-1 bg-green-50" onClick={() => addFoodItem(item)}>Add</button></li>))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;




