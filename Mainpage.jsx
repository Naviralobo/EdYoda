import React from 'react'
import ads from "../Assets/ads.svg"
import book from "../Assets/book.svg"
import scholar from "../Assets/scholar.svg"
import time from "../Assets/time.svg"
import tv from "../Assets/tv.svg"
import "./Mainpage.css"
import FormPage from './FormPage'

const Mainpage = () => {
    return (

        <div className="d-flex px-5 py-5 main-body justify-content-between">
            <div className="col-7">
                <div className="body-main-content pb-2">Access curated courses worth
                    <br />
                    <span className="amt-white"> &#8377; <span className="strike">18500</span> </span>&nbsp;at just <span className="amt-blue">&#8377; 99</span> per year!
                </div>
                <div className="d-flex py-3">
                    <img className="pe-5" src={book} alt="book" />
                    <div className="body-detail">
                        <span className="highlight">100+ </span>Job relevant courses
                    </div>
                </div>
                <div className="d-flex py-3">
                    <img className="pe-5" src={time} alt="time" />
                    <div className="body-detail">
                        <span className="highlight"> 20,000+ </span>Hours of content
                    </div>
                </div>
                <div className="d-flex py-3">
                    <img className="pe-5" src={tv} alt="tv" />
                    <div className="body-detail">
                        <span className="highlight">Exclusive</span> webinar access
                    </div>
                </div>
                <div className="d-flex py-3">
                    <img className="pe-5" src={scholar} alt="scholar" />
                    <div className="body-detail">
                        Scholarship worth  <span className="highlight">₹94,500</span>
                    </div>
                </div>
                <div className="d-flex py-3">
                    <img className="pe-5" src={ads} alt="ads" />
                    <div className="body-detail">
                        <span className="highlight">Ad Free</span> learning experience
                    </div>
                </div>
            </div>
            <div className="col-4 form-page">
                <FormPage />
            </div>
        </div>

    )
}

export default Mainpage