import useUserInfo from "../utils/useUserInfo";

const User = () => {
  const userInfo = useUserInfo();
  console.log("useInfo", userInfo);

    if (!userInfo) {
        return <h1>Loading...</h1>
    }
    const { name, location, avatar_url } = userInfo;
  return (
    <div className="user-card">
      <img width="200px" src={avatar_url} alt="User Avatar" />
      <div>
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        <h3>Contact - 7401167860</h3>
      </div>
    </div>
  );
};

export default User;
