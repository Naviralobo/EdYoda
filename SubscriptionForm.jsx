import React, { useState } from 'react';
import "./SubscriptionForm.css"
import timelimit from "../Assets/timelimit.svg"
import razorpay from "../Assets/razorpay.svg"

const SubscriptionForm = () => {
  const [selectedOption, setSelectedOption] = useState('option2');
  const [amount, setAmount] = useState(99)

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    let amountSelected = e.target.value === "option1" ? setAmount(99) : ((e.target.value === "option2" ? setAmount(179) : ((e.target.value === "option3" ? setAmount(149) : setAmount(99)))))
  };

  return (
    <div>

      <div className="options-disabled ">
        <div className="expired ">Offer expired</div>
        <label >
          <input
            className="mx-2"
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
            disabled
          />
          12 Months Subscription
        </label>
        <div className="px-2">
          <div className><span className="total">Total </span><span className="total-amt">&nbsp;&#8377;99</span></div>
          <div className="text-end"><span className="monthly-amt"> &#8377;8 &nbsp;</span><span className="per-month">/mo</span></div>
        </div>
      </div>
      <div className={selectedOption === 'option2'?"options-select":"options"}>
        <div className="recommended ">Recommended</div>
        <label>
          <input
            className="mx-2"

            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          12 Months Subscription
        </label>
        <div className="px-2">
          <div className><span className="total">Total </span><span className="total-amt">&nbsp;&#8377;179</span></div>
          <div className="text-end"><span className="monthly-amt"> &#8377;15 &nbsp;</span><span className="per-month">/mo</span></div>
        </div>
      </div>
      <div className={selectedOption === 'option3'?"options-select":"options"}>
        <label>
          <input
            className="mx-2"

            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          12 Months Subscription
        </label>
        <div className="px-2">
          <div className><span className="total">Total </span><span className="total-amt">&nbsp;&#8377;149</span></div>
          <div className="text-end"><span className="monthly-amt"> &#8377;8 &nbsp;</span><span className="per-month">/mo</span></div>
        </div>
      </div>
      <div className={selectedOption === 'option4'?"options-select":"options"}>
        <label>
          <input
            className="mx-2"

            type="radio"
            value="option4"
            checked={selectedOption === 'option4'}
            onChange={handleOptionChange}
          />
          12 Months Subscription
        </label>
        <div className="px-2">
          <div className><span className="total">Total </span><span className="total-amt">&nbsp;&#8377;99</span></div>
          <div className="text-end"><span className="monthly-amt"> &#8377;8 &nbsp;</span><span className="per-month">/mo</span></div>
        </div>
      </div>
      <hr />
      <div className=" d-flex px-4 justify-content-between">
        <div className="subscription ">Subscription Fee</div>
        <div className="subs-fee ">&#8377;18500 </div>
      </div>
      <div className="offer-limit my-4">
        <div className="d-flex px-2 justify-content-between">
          <div className="limit-desc">Limited time offer</div>
          <div>-&#8377;{Number(18500) - Number(amount)}</div>
        </div>
        <div className="d-flex px-2 ">
          <img src={timelimit} className="pe-2" alt="" />
          <div className="limit-validity pt-2">Offer valid till 25th March 2023 </div>
        </div>
      </div>
      <div className=" d-flex px-4 justify-content-between align-items-center">
        <div ><span style={{ fontSize: "16px", fontWeight: "600" }}>Total </span>(Incl. of 18% GST)</div>
        <div className="final-amt">&#8377;{amount} </div>
      </div>
      <div className="d-flex gap-2 pt-5">
        <button className="cancel ">CANCEL</button>
        <button className="proceed ">PROCEED TO PAY</button>
      </div>
      <img className="pt-5" src={razorpay} alt="" />
    </div>
  );
}

export default SubscriptionForm;

