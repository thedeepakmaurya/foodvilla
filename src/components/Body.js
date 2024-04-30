import { useState } from "react";
import { restrauList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restrauList);
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // To create a state variable

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
