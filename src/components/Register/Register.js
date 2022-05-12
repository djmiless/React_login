import React from "react";
import '../Login/Login.css'


class Register extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="login">
                <h4>Register Now</h4>
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" className="form-control"/>
                <button>Register</button>
                <p> Already Registered ? <strong onClick={() => this.props.loadLog()}>Login</strong></p>
            </div>
        )
    }
}

export default Register;