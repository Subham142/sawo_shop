import React, { useEffect, useState } from "react";
import Sawo from "sawo";
import styles from "./styles"

//for redirecting to home page
import { useHistory } from "react-router-dom";

function LoginScreen() {

  // state values
  const [userPayload, setUserPayload] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {

    // Sawo Configuration, required to render form in the container
    // onSuccess callback will get invoke, after successful login

    const sawoConfig = {
      // should be same as the id of the container
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "email",
      // Add the API key
      apiKey: "505fb96a-b8bf-4585-9bf7-bc07a0bfa255",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: onSuccessLogin
    };

    // creating instance
    let sawo = new Sawo(sawoConfig)

    // calling method to show form
    sawo.showForm();
  }, [])


  const history = useHistory();
  // Sawo: 
  // OnSuccess Callback method

  const onSuccessLogin = async(payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);
    console.log(payload);
   
    // history.push('/');
    localStorage.setItem('userId',payload.identifier);
// console.log("email",payload.identifier )
console.log(localStorage.getItem('userId'))
  }

  return (
    <React.Fragment>
      
      <div>
        <section>
          <h1>React | Sawo Form Example</h1>
          {/* Showing Successful login message */}
          {isLoggedIn && (
            <React.Fragment>
              <div style={styles.containerStyle}>
                <h2>User Successfull login</h2>
                <div>UserId: {userPayload.user_id}</div>
                <div>Verification Token: {userPayload.verification_token}</div>
              </div>
            </React.Fragment>
          )}

          {/* Showing login form */}
          {
            !isLoggedIn && (
             
              <div style={styles.formContainer} id="sawo-container">
                {/* Sawo form will appear here */}
              </div>
            
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default LoginScreen;