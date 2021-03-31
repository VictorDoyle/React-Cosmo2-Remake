import React from 'react';
import heroBannerMain from '../../images/heroBannerMain.jpg'
import '../../styles/molecules/HeroBanner.css'

function HeroBanner() {
    return(
        <>
        <div className="mainBanner">
        <img src={heroBannerMain}/>
        </div>
        <div className="mainBannerText">
            <h1>MADE TO PERFECTION</h1>
        </div>
        </>
    )
}

export default HeroBanner