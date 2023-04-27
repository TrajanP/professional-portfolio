//Library Imports
import {React, useState} from 'react';
//CSS Imports
import css from'./CSS-Pages/contact.module.css';
import './CSS-Pages/pages.css';
//Component Imports
import Header from '../Components/Header.js'
//Bootstrap Imports
import Alert from 'react-bootstrap/Alert';

const Contact = () => {

    const [show, setShow] = useState(false);

    //State for Form Validation
    const [name, setName] = useState("");
    const [nameErrorMsg, setNameErrorMsg] = useState("")
    const [savedName, setSavedName] = useState("");

    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [savedEmail, setSavedEmail] = useState("");

    const [confirmEmail, setConfirmEmail] = useState("");
    const [confirmErrorMsg, setConfirmErrorMsg] = useState("");

    const [message, setMessage] = useState("");
    const [messageErrorMsg, setMessageErrorMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var submitFlag = true;
        var nameCheck = /^[A-Za-z]+$/;
        const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        //Name
        if(name === "")
        {
            submitFlag = false;
            setNameErrorMsg("This form is required!");
        }
        else if(!(name.match(nameCheck)))
        {
            submitFlag = false;
            setNameErrorMsg("Name should contain no numbers or special characters!");
        }
        else
            setNameErrorMsg("");
        //Email
        if(email === "")
        {
            submitFlag = false;
            setEmailErrorMsg("This form is required!");
        }
        else if(!emailCheck.test(String(email).toLowerCase()))
        {
            submitFlag = false;
            setEmailErrorMsg("Not an Email");
        }
        else   
            setEmailErrorMsg("");
        //Confirm Email
        if(confirmEmail === "")
        {
            submitFlag = false;
            setConfirmErrorMsg("This form is required!");
        }
        else if(confirmEmail !== email)
        {
            submitFlag = false;
            setConfirmErrorMsg("Your emails don't match!");
        }
        else
            setConfirmErrorMsg("");
        //Messaage
        if(message === "")
        {
            submitFlag = false;
            setMessageErrorMsg("This form is required!");
        }
        else if(message.length > 500)
        {
            submitFlag = false;
            setMessageErrorMsg("The max character length is 500!");
        }
        else
            setMessageErrorMsg("");
        if(submitFlag)
        {
            setShow(true);
            handleClear(event);
        }
    }

    const handleClear = (event) => {
        event.preventDefault();
        //Name
        setName("");
        document.getElementById("nameID").value  = "";
        setNameErrorMsg("");
        //Email
        setEmail("");
        document.getElementById("emailID").value  = "";
        setEmailErrorMsg("");
        //Confirm Email
        setConfirmEmail("");
        document.getElementById("confirmID").value  = "";
        setConfirmErrorMsg("");
        //Message
        setMessage("");
        document.getElementById("messageID").value = "";
        setMessageErrorMsg("");
        //Buttons
        document.getElementById("developerID").checked = true;
    }

    return (
        <div>
            <Header/>
            <div>
                <div style={{position:"absolute", zIndex: "10", width: "450px", top:"10%", left:"35%"}}>
                    <Alert show={show} variant="dark">
                        <Alert.Heading>Greetings Earthling!</Alert.Heading>
                        <p>
                            Thanks for reaching out {savedName}, I'm looking forward to hearing your questions or thoughts. I'll get back to you at {savedEmail}.
                        </p>
                        <hr/>
                        <div className="d-flex justify-content-end">
                            <button style={{borderRadius: "5px", width: "120px"}} onClick={() => setShow(false)}>Dismiss</button>
                        </div>
                    </Alert>
                </div>
                <div className={css.wrapper}>
                    <img className={css.contactImage} src="./Media/CampFirstContact.gif" alt ="First Contact"/>
                    <div className={css.formBox}>
                        <div className={css.formBoxTitle}>
                            Ready to make first contact?
                        </div>
                        <form>
                            <div className={css.formInput}>
                                    <label htmlFor="name"> First Name </label>
                                    <input id="nameID" type="text" name="name" placeholder="Enter your name" onChange={(event) => {setName(event.target.value); setSavedName(event.target.value)}}/>
                                    <span>{nameErrorMsg}</span>
                            </div>
                            <div className={css.formInputRow}>
                                <div className={css.formInput} style={{display:"flex"}}>
                                    <label htmlFor="email"> Email </label>
                                    <input id="emailID" type="email" name="email" placeholder="Enter your Email" style = {{width:"190px"}} onChange={(event) => setEmail(event.target.value)}/>
                                    <span>{emailErrorMsg}</span>
                                </div>  
                                <div className={css.formInput}>
                                    <label htmlFor="email"> Confirm Email </label>
                                    <input id="confirmID" type="email" name="confirmEmail" placeholder="Confirm your Email" style = {{width:"190px"}} onChange={(event) => {setConfirmEmail(event.target.value); setSavedEmail(event.target.value)}}/>
                                    <span>{confirmErrorMsg}</span>
                                </div>  
                            </div>
                            <div className={css.formInput}>
                                <label htmlFor="text"> Message </label>
                                <textarea id="messageID" name="message" rows="3" cols="50" placeholder="Enter your message here!" onChange={(event) => setMessage(event.target.value)}></textarea>
                                <span>{messageErrorMsg}</span>
                            </div>
                            <div className={css.formInputRadio}>
                                <label>Who are you?</label>
                                <div className={css.formRadioButtons}>
                                    Developer <input type="radio" name="contact" id="developerID"
                                        value="text" checked/>
                                    Employer <input type="radio" name="contact" id="employerID"
                                        value="email"/> 
                                    Just Curious <input type="radio" name="contact" id="curiousID"
                                        value="none"/>
                                </div>
                            </div>
                            <div style={{textAlign:"center", marginBottom: "10px"}}>
                                <button style={{borderRadius: "5px", width: "180px"}} onClick={handleSubmit}>Submit</button>
                                <button style={{borderRadius: "5px", width: "180px"}} onClick={handleClear}>Clear</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>   
        </div> 
    );
 }
    
export default Contact;