import React from 'react'
import "./Header.css"
import "./FormPage.css"
import SubscriptionForm from './SubscriptionForm'

const FormPage = () => {
    return (
        <>
            <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center">
                    <div className="numbers d-flex justify-content-center align-items-center">1</div>
                    <div className="header-content py-1">Sign Up</div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="numbers d-flex justify-content-center align-items-center">2</div>
                    <div className="header-content py-1">Subscribe</div>
                </div>
            </div>
            <div className="text-center payment-heading pt-3">Select your subcription plan</div>
            <SubscriptionForm />
        </>
    )
}

export default FormPage