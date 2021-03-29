import React from 'react';
import heroBannerMain from '../../images/heroBannerMain.jpg'
import '../../styles/molecules/HeroBanner.css'

function HeroBanner() {
    return(
        <>
        <div className="mainBanner">
        <img src={heroBannerMain}/>
        </div>
        </>
    )
}

export default HeroBanner