import React, { useEffect, useState } from "react";
import Sawo from "sawo";
import styles from "./styles"
// import styles from "./styles"

function App() {

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
      identifierType: "phone_number_sms",
      // Add the API key
      apiKey: "3cd03d45-468b-4a01-902c-97b678143caf",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: onSuccessLogin
    };

    // creating instance
    let sawo = new Sawo(sawoConfig)

    // calling method to show form
    sawo.showForm();
  }, [])



  // Sawo: 
  // OnSuccess Callback method

  const onSuccessLogin = async(payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);
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

export default App;