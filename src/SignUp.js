import React, { useState } from "react";
import "./SignUp.css";

export default function SignUpForm() {
  let [salary, setSalary] = useState("20000");
  let [name, setName] = useState(null);

  function handleChange(event) {
    setSalary(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(name);
    alert(`Hello ${name}`);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  return (
    <div className="secondSignUpBorder">
      <form className="signUpForm">
        <div className="row">
          <div className="col titles">
            <p>Name </p>
            <p>Email </p>
            <p>Date of Birth </p>
          </div>
          <div className=" inputs col">
            <input
              type="text"
              placeholder="Name"
              required="required"
              onChange={handleName}
            ></input>
            <span className="required"></span>
            <input type="email" placeholder="Email" required="required"></input>
            <span className="required"></span>
            <br />
            <input
              type="date"
              required="required"
              min="1900-01-01"
              max="2021-10-02"
            ></input>
            <span className="required"></span>
          </div>

          <div className="titles col">
            <p>Favourite colour</p>

            <p>
              Salary
              <br />
              (£20,000 to £150,000+)
            </p>
          </div>

          <div className="col">
            <input
              type="color"
              className="colourPicker"
              placeholder="#ff5291"
            ></input>

            <div className="salary">
              <p className="salaryText">
                £
                <input
                  type="number"
                  min="20000"
                  max="150000"
                  value={salary}
                  onChange={handleChange}
                ></input>
              </p>

              <input
                type="range"
                className="salaryRange"
                min="20000"
                max="150000"
                value={salary}
                step="500"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
        <input type="submit" onClick={handleClick} />
      </form>
    </div>
  );
}
