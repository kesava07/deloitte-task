import React from 'react';
import AuthContext from '../AuthContext';

const Login = () => {
    return (
        <AuthContext.Consumer>
            {
                authConsumer => {
                    return (
                        <div>
                            {authConsumer.isAuth ? <div>Logged in</div> : <div>Logged Out</div>}
                        </div>
                    )
                }
            }
        </AuthContext.Consumer>
    )
};

export default Login;