import Profile from "./Profile";
import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Profile name={"Deepak Maurya"} />
            </div>
        )
    }
}

export default About;