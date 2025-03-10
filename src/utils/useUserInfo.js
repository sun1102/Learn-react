import { GET_USER_INFO } from "./constants";
import { useEffect, useState } from "react";

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        const response = await fetch(GET_USER_INFO);
        const json = await response.json();
        console.log('json', json);
        setUserInfo(json);
    }

    return userInfo;
}

export default useUserInfo;