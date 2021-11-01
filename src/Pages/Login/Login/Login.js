import React from 'react';
import { Button, Card } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';
import { useHistory, useLocation } from 'react-router'; 
import './Login.css';

const Login = () => {
   const {signInUsingGoogole} = UseAuth();
   const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from?.pathname || "/home";

        const handleGoogleSignIn = () =>{
      signInUsingGoogole()
        .then(result => {
                        history.push(redirect_uri)
              })
         }

    return (
        < div className="google-signin">
                 <Card className="form" style={{ width: '20rem' }}>
                    <Card.Body >
                        <h1>Please Login</h1>
                    <Card.Title></Card.Title>
                    <Button onClick={handleGoogleSignIn} className="btn">Google SignIn</Button>
                
                    
                </Card.Body>
                </Card>
            
        </div>
    );
};

export default Login;