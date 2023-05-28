import React from 'react'
import dropdown from "../Assets/dropdown.svg"
import search from "../Assets/search.svg"
import "./Header.css"



const Header = () => {
    return (
        <div className="d-flex justify-content-between align-items-center px-5 main-div">
            <div className="col-4 d-flex  justify-content-between align-items-center">
                <div className="title">
                    EDYODA
                </div>
                <div className="header-content">
                    Courses <span className="px-2"><img src={dropdown} alt="" /></span>
                </div>
                <div>
                    Programs<span className="px-2"><img src={dropdown} alt="" /></span>
                </div>
            </div>
            <div className="col-3 d-flex  justify-content-between align-items-center">
                <div>
                    <img src={search} alt="" />
                </div>
                <div>
                    Log in
                </div>
                <div>
                    <button className="join-now-btn">
                        JOIN NOW
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header