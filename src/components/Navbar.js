import React, { useState,useEffect } from 'react'
import '../navbar.css'
function Navbar() {
    const [show,handleshow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY >100){
                handleshow(true)
            }else{
                handleshow(false)
            }
        })
        return () => {
         window.removeEventListener("scroll");   
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflixlogo"/>
        </div>
    )
}

export default Navbar
