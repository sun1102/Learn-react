import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Shimmer/>;

    let {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card.itemCards || undefined;
    console.log(itemCards)
    return (
        <div className="menu">
            <h2>{name}</h2>
            <h3>{cuisines?.join(', ')} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li> )}
               
            </ul>
        </div>
    )
}

export default RestaurantMenu;