import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {

    const [restaurant, setRestaurant] = useState(null)
    const [items, setItems] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL +  resId);
        const json = await data.json();
        setRestaurant(json?.data);
        setItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return {restaurant, items};
}

export default useRestaurant;