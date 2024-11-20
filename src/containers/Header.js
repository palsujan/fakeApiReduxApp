import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/movieaapp_logo.png";

const Header = () => {
  return (
    <div className='ui fixed menu'>
        <div className="ui container center logo_img">
            <Link to="/">
                <img src={logo} className='ui small' width="20%" height="100%" alt='Image_logo'/>
            </Link>
            {/* <Link to="/"><h2>Fake Shop</h2></Link> */}
        </div>
    </div>
  )
}

export default Header