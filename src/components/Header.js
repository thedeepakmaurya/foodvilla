import { useState, useContext } from "react";
import Logo from "../assets/img/villa.png";
import { Link } from "react-router-dom"
// import userContext from "../utils/userContext"
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => {
    return (
        <a href='/'><img data-testid="logo" className='h-28 p-2 ' alt='logo' src={Logo} /></a>
    )
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const {user} = useContext(userContext);

    const cartItems = useSelector(store => store.cart.items)

    return (
        <div className='flex justify-between bg-amber-100'>
            <Title />
            <div className='nav-items'>
                <ul className="flex py-10">
                    <li className="px-2"> <Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <Link to="/cart"><li className="px-2" data-testid="cart">Cart- {cartItems.length} items</li></Link>
                </ul>
            </div>
            {/* {user.name} */}
            {
                isLoggedIn ? <button className="p-10" onClick={() => setIsLoggedIn(false)}>Logout</button> : <button className="p-10" onClick={() => setIsLoggedIn(true)}> Login</button>
            }

        </div>
    )
}

export default Header;

