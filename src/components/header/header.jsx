import React from 'react';
import Logo from './logo';
import Menu from './menu';

const Header = () => {
    return ( 
        <div className='header'>
            <div className='header__logo'>
                <Logo />
            </div>
            <div className='header__icons'>
                <Menu />
                <Menu />
            </div>
        </div>
     );
}
 
export default Header;