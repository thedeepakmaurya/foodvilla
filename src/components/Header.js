const Title = () => {
    return (
        <a href='/'><img className='logo' alt='logo' src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/kehzqzlsccbtkwqx7ckf" /></a>
    )
}

const Header = () => {
    return (
        <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

