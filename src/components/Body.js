import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); // To create a state variable

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🚫 Offline, please check your internet connection.</h1>
    }


    if (!allRestaurants) return null;

    // if (filteredRestaurants.length === 0) return <h1>No restaurant match your search!!</h1>

    return allRestaurants.length === 0 ? (<Shimmer />) : (
        <>
            <div className="flex p-5 mb-10 bg-amber-100 justify-center items-center">
                <input data-testid = "search-input"
                    type="text"
                    className="bg-red-800 placeholder:text-white p-2 m-2 w-96 outline-none text-white rounded-md"
                    placeholder="Search for restaurants"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="p-2 m-2 text-white bg-neutral-900 rounded-md hover:bg-neutral-800"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"restaurant/" + restaurant.info.id}><RestaurantCard {...restaurant.info} key={restaurant.info.id} /></Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
