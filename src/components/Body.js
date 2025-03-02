import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import {Shimmer} from './Shimmer';

const Body = () => {
    //Local State Variable - Suport powerful variable
    let [listOfRestaurants, setListOfRestaurant] = useState([]);
    let [FilteredlistOfRestaurants, setFilteredlistOfRestaurants] = useState([]);
    let [searchInput, setSearchInput] = useState('');

  // useEffect will be called after render cycle is finised
    useEffect(() => {
     fetchData();
    }, []);

    fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
      const json = await data.json();
      const resList = json?.data?.cards?.filter(card => card?.card?.card?.info);
     setListOfRestaurant(resList);
      setFilteredlistOfRestaurants(resList);


    }

  return listOfRestaurants.length === 0 ? <Shimmer/> : ( 
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input type="text" className="search-box" value={searchInput} onChange={(event) => {
            setSearchInput(event.target.value);
          }}/>
          <button onClick={() => {
            if(searchInput) {
              const filteredList = listOfRestaurants.filter(res => res?.card?.card?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
              setFilteredlistOfRestaurants(filteredList);
            }
           
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList =  listOfRestaurants.filter(res => res.card.card.info.avgRating >= 4.5);
            setFilteredlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button className="reset-btn" onClick={() => {
          setFilteredlistOfRestaurants(listOfRestaurants);
        }}>Reset</button>
      </div>
      <div className="res-container">
        {FilteredlistOfRestaurants.map((res) => (
          <RestaurantCard key={res?.card?.card?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;