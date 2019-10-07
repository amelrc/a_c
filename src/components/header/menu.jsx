import React from 'react';

const openMenu = () => {
    console.log('hello');
};

const Menu = () => {
    return (  
        <div className='header-icon'>
            <button onClick={openMenu} className="menu-toggle">Menu</button>
        </div>
    );
}
 
export default Menu;