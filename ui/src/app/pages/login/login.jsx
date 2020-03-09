import React from 'react';
import { SignIn } from 'aws-amplify-react';
import TextField from '@bit/mui-org.material-ui.text-field';
import Button from '@bit/mui-org.material-ui.button';

class Login extends SignIn {
    constructor(props) {
        super(props);
        this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    }

    showComponent(theme) {
        return (
            <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <TextField
                            label="Username"
                            placeholder="Enter Username"
                            onChange={(event) => { 
                                console.log(Event); 
                                super.handleInputChange(event); 
                            } }
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            placeholder="Enter password"
                            type="password"
                            onChange={(event) => super.handleInputChange(event)}
                            required
                        />
                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <Button
                            title="Log In"
                            type="submit"
                            onClick={() => super.signIn()}
                            style={{marginRight:20}}
                        >Log In</Button>
                        <Button
                            title="Forgot password"
                            type="button"
                            onClick={() => super.changeState("forgotPassword")}
                            style={{marginRight:20}}
                        >Forgot password</Button>
                        <Button
                            title="Sign Up"
                            type="button"
                            onClick={() => super.changeState("signUp")}
                        >Sign Up</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;