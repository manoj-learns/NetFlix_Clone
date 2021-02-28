import React from 'react'
import "./Navbar.css"

function Navbar() {

    const [scrollY, scrollFunc] = React.useState(false);

    const lscrollFun = () => {
        console.log(window.scrollY);
        if (window.scrollY > 100) {
            scrollFunc(true);
        }
        else {
            scrollFunc(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener('scroll', lscrollFun);
        return () => {
            document.removeEventListener('scroll', lscrollFun);
        }
    })

    return (
        <div className={`nav ${scrollY && "nav__black"}`}>
            <div className="navcontents">
                <img className="navbar__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="NetFlix" />
                <img className="navbar__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            </div>
        </div >
    )
}

export default Navbar
