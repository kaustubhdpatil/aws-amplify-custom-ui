import React from 'react';
import {Authenticator, SignIn} from 'aws-amplify-react';
import awsconfig from './aws-exports';
import Login from './app/pages/login/login';
import App from './App';

class AppWithAuth extends React.Component {
    constructor(props, context) {
        super(props, context);
      }
    
      render() {
        return (
          <div>
            <Authenticator hide={[SignIn]} amplifyConfig={awsconfig}>
              <Login />
              <App />
            </Authenticator>
          </div>
        );
      }
}

export default AppWithAuth;