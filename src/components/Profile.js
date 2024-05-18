// Class Component
import React from "react";
class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                userName: "Dummy name",
                location: "Dummy Location"
            }
        }
    }

    //best  place to make api calll
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/thedeepakmaurya");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }

    render() {
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-orange-800 mb-2 mt-5">Profile Component</h1>
                <img className="w-56 mb-2" src={this.state.userInfo.avatar_url}/>
                <h2 className="font-bold">Name: {this.state.userInfo.name}</h2>
                <h2 className="font-bold">Location: {this.state.userInfo.location}</h2>
                <h2 className="font-bold">Bio: {this.state.userInfo.bio}</h2>
            </div>
        )
    }
}

export default Profile;