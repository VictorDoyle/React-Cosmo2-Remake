import React from 'react';

/* styling */
import '../../styles/organisms/NavigationBar.css';
/* components */
import CartIcon from './CartIcon';
import MainLogo from './MainLogo';
import MenuIcon from './MenuIcon';
import SearchButton from './SearchButton';

/* onMount color=transparent, on vh change to background: #1e1e1e; */

function NavigationBar() {
    return(
        <>
        <div className="navigationGrid" id="navigationBarMain">
            <div className="leftNav"> <CartIcon /> <SearchButton /> </div>
            <div className="midNav"> <MainLogo /> </div>
            <div className="rightNav"> <MenuIcon /> </div>
        </div>
        </>
    )
}

export default NavigationBar