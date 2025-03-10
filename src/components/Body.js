import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import { Shimmer } from "./Shimmer";
import { GET_RESTAURANT_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - Suport powerful variable
  let [listOfRestaurants, setListOfRestaurant] = useState([]);
  let [FilteredlistOfRestaurants, setFilteredlistOfRestaurants] = useState([]);
  let [searchInput, setSearchInput] = useState("");

  // useEffect will be called after render cycle is finised
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(GET_RESTAURANT_LIST_URL);
    const json = await data.json();
    const resList = json?.data?.cards?.filter((card) => card?.card?.card?.info);
    setListOfRestaurant(resList);
    setFilteredlistOfRestaurants(resList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Offline!! Please check internet!!!</h1>;

  if (listOfRestaurants?.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              if (searchInput) {
                const filteredList = listOfRestaurants.filter((res) =>
                  res?.card?.card?.info?.name
                    ?.toLowerCase()
                    ?.includes(searchInput.toLowerCase())
                );
                setFilteredlistOfRestaurants(filteredList);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating >= 4.5
            );
            setFilteredlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setFilteredlistOfRestaurants(listOfRestaurants);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {FilteredlistOfRestaurants.map((res) => (
          <Link
            key={res?.card?.card?.info?.id}
            to={"/restaurants/" + res?.card?.card?.info?.id}
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
