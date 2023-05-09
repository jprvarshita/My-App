import React from "react"
import LittleLemon from "./LittleLemon"
import { Form } from "react-router-dom";

function Contact() {

    const onSubmitHandler = (event) => {
        event.preventDefault();

        alert("We received your Feedback, thanks!")
        //Form[0].reset()
        document.getElementById("contactUsForm").reset();
    }

    const validateFirstName = () => {
        let firstNameValid = false

        let span = document.getElementById("first-name-span");
        if (document.getElementById("first-name").checkValidity()) {
            firstNameValid = true;
            span.innerHTML="";
        } else {
            firstNameValid = false;
            span.innerHTML="Not valid input First Name.";
        }
        
        
        return firstNameValid;
    }

    const validateLastName = () => {
        let lastNameValid = false

        let span = document.getElementById("last-name-span");
        if (document.getElementById("last-name").checkValidity()) {
            lastNameValid = true;
            span.innerHTML="";
        } else {
            lastNameValid = false;
            span.innerHTML="Not valid input Last Name.";
        }

        return lastNameValid;
    }

    const validateEmail = () => {
        let emailValid = false;

        let span = document.getElementById("email-span");
        if (document.getElementById("email").checkValidity()) {
            emailValid = true;
            span.innerHTML="";
        } else {
            emailValid = false;
            span.innerHTML="Not valid input Email.";
        }

        return emailValid
    }

    const validatePhone = () => {
        let phoneValid = false;

        let span = document.getElementById("phone-span");
        if (document.getElementById("phone").checkValidity()) {
            phoneValid = true;
            span.innerHTML="";
        } else {
            phoneValid = false;
            span.innerHTML="Not valid input Phone. Valid format is xxx-xxx-xxxx";
        }

        return phoneValid
    }

    const validateFeedback = () => {
        let FeedbackValid = false;

        let span = document.getElementById("feedback-span");
        if (document.getElementById("feedback").checkValidity()) {
            FeedbackValid = true;
            span.innerHTML="";
        } else {
            FeedbackValid = false;
            span.innerHTML="Not valid input for Feedback";
        }

        return FeedbackValid
    }

    const checkInputFieldsAndEnableSubmitButton = () => {
        
        if (validateFirstName() & validateLastName() &  
                validateEmail() & validatePhone() & validateFeedback()) {
            document.getElementById("submitFeedback").removeAttribute("disabled")
        } else {
            document.getElementById("submitFeedback").disabled = true
        }
        
    }

    const onChangeHandler = (event) => {

        checkInputFieldsAndEnableSubmitButton();
    };

    return <>
         <div className="main"> 

            <LittleLemon></LittleLemon>

            <div>
                <div>
                    <h3>Contact Us</h3>
                </div>
                <div>
                    <span><strong>Phone: </strong>123-456-7890</span>
                </div>
                <div>
                    <span><strong>Hours: </strong></span>
                </div>  
                <div>
                    <span>Tue - Thu : 11:00 AM to 10:00 PM</span><br/>
                    <span>Sat - Sun : 11:00 AM to 11:00 PM</span><br/>
                    <span>Sun : 11:00 AM to 10:00 PM</span>
                </div>               
            </div>
            <div>
                <br/><br/>
            </div>
            <div>
                <div>
                    <span><strong>Give Us Your Feedback</strong></span>
               
                    <form id="contactUsForm" name="contactUsForm" onSubmit={onSubmitHandler}>
                        <div >
                            <div className="contactus-div">
                                <label className="required" for="first-name">First Name: </label>
                                <input  type="text" id="first-name" aria-label="On Click" name="firstName" 
                                    required onChange={onChangeHandler} onBlur={validateFirstName} ></input>
                                <span title="first-name-span" id="first-name-span"></span>
                            </div>

                            <div className="contactus-div">
                                <label className="required" for="last-name"> Last Name: </label>
                                <input type="text" id="last-name" name="lastName" onBlur={validateLastName} 
                                      onChange={onChangeHandler} required aria-label="On Click"></input>
                                <span title="last-name-span" id="last-name-span"></span>
                            </div>
                        
                            <div className="contactus-div">
                                <label className="required" for="email">Email Address: </label>
                                <input type="email" id="email" name="email" required onBlur={validateEmail} 
                                     aria-label="On Click"  onChange={onChangeHandler}></input>
                                <span title="email-span" id="email-span"></span>
                            </div>
                            <div className="contactus-div">
                                <label className="required" for="phone">Contact Number: </label>
                                <input className="required" type="tel" id="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    aria-label="On Click" onBlur={validatePhone} onChange={onChangeHandler} ></input>
                                <span title="phone-span" id="phone-span"></span>
                            </div>
                            <div className="contactus-div">
                                <label className="required" for="feedback">Feedback: </label>
                                <textarea className="required" type="text" id="feedback" name="feedback"  required
                                    aria-label="On Click" rows={3} cols={30} 
                                    onBlur={validateFeedback} onChange={onChangeHandler} ></textarea>
                                <span title="feedback-span" id="feedback-span"></span>
                            </div>
                            <div className="contactus-div">
                                <button className="button" type="submit" id="submitFeedback" name="submitFeedback" 
                                    disabled>Submit Feedback</button>
                            </div>
                        </div>
                    </form> 
                </div>                           
            </div>
        </div>
    </>
}

export default Contact