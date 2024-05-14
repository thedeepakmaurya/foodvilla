import { useState, useContext } from "react";
import Logo from "../assets/img/villa.png";
import { Link } from "react-router-dom"
import userContext from "../utils/userContext"

const Title = () => {
    return (
        <a href='/'><img className='h-28 p-2 ' alt='logo' src={Logo} /></a>
    )
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {user} = useContext(userContext);

    return (
        <div className='flex justify-between bg-amber-100'>
            <Title />
            <div className='nav-items'>
                <ul className="flex py-10">
                    <li className="px-2"> <Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            {user.name}
            {
                isLoggedIn ? <button className="p-10" onClick={() => setIsLoggedIn(false)}>Logout</button> : <button className="p-10" onClick={() => setIsLoggedIn(true)}> Login</button>
            }

        </div>
    )
}

export default Header;

