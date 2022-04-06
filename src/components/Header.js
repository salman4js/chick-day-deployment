import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className = "header-wrapper" id = "home">
            <div className = "container">
                <Typed
                        className = "typed-text"
                        strings = {["Welcome to Chick-Day!"]}
                        typeSpeed = {80}
                        backSpeed = {80}
                        loop
                    />
            </div>
            
        </div>
        
    )
}

export default Header