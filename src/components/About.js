import { Outlet } from "react-router-dom";


const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p> This is React Live</p>
            <Outlet />
        </div>
    )
}

export default About;