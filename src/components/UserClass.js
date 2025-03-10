import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            name: '',
            location: '',
            avatar_url: '',
            bio: '',

        }
    }
    // console.log('UserClass constructor');
  }

  // This method is called only once in the lifecycle of a component
  async componentDidMount() {
    const response = await fetch("");
    const data = await response.json();
    console.log(data);

    this.setState({
        userInfo: data
    })

  }

  componentDidUpdate() {
    console.log('UserClass componentDidUpdate');
  }

  render() {
    // console.log('UserClass Render');

    const { name, location, avatar_url } = this.state.userInfo;
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
  }
}

export default UserClass;
