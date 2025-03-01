import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const resInfo = resData?.card?.card?.info;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resInfo || {};

    return (
        <div className="res-card">
            <div className="image-container">
                <img className="res-image" src={CDN_URL+cloudinaryImageId} alt={name} />
                {avgRating && <span className="rating-badge">⭐ {avgRating}</span>}
            </div> 
            <div className="card-content">
                <h3 className="restaurant-name">{name}</h3>
                <p className="cuisines">{cuisines?.join(', ')}</p>
                <p className="cost">{costForTwo}</p>
                <button className="view-details">View Details</button>
            </div>
        </div>
    );
};

export default RestaurantCard;