
import { useState, useEffect } from 'react';
import { GET_MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(GET_MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
    };

    return resInfo;
}

export default useRestaurantMenu;