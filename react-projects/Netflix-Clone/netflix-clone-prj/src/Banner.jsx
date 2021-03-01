import React from 'react'
import "./Banner.css"

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/329583.jpg")` }} alt="">
            <div className="banner__contents">
                <div className="banner__title">
                    <h1>Movie Name</h1>
                </div>
                <div className="banner__buttons">
                    <button className="banner_button">Watch</button>
                    <button className="banner_button">Add to list</button>
                </div>
                <h1 className="banner__description">{truncate(`Just another movie description`, 70)}</h1>
            </div>
            <div className="banner__fadebottom" />
        </header >
    )
}

export default Banner
