import React, { Component } from 'react';
import AuthContext from './AuthContext';
import Login from './ContextComponents/Login';
import Profile from './ContextComponents/Profile';

export default class Context extends Component {
    state = {
        isAuth: false
    };

    isToggle = () => { }
    render() {
        return (
            <AuthContext.Provider value={{ isAuth: this.state.isAuth, isToggle: this.isToggle }}>
                <h1>Context API</h1>
                <Login />
                <Profile />
            </AuthContext.Provider>
        )
    }
}
