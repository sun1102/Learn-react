import RestaurantCard  from './RestaurantCard';
import { resList } from '../utils/mockData';

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <h2>Search Bar</h2>
            </div>
            <div className="res-container">
                {
                    resList.map((res) => (<RestaurantCard key={res?.card?.card?.info?.id} resData={res}/>))
                }
            </div>

        </div>
    )
}

export default Body;