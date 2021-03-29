import React from 'react';
import CartIcon from './CartIcon';

function NavigationBar() {
    return(
        <>
        <div className="leftNav"> <CartIcon /> </div>
        <div className="midNav"></div>
        <div className="rightNav"></div>
        </>
    )
}

export default NavigationBar