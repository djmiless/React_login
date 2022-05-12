import React from "react";
import "./Login.css"

class Login extends React.Component {

    constructor(props){
        super(props)
        this.props = props

    }


    render(){

        return(
            <div className="login">
                <h4>Login Now</h4>
                <input/>
                <button>login</button>
                <p>not Registered ? <strong onClick={()=>this.props.loadReg()}>Register </strong>Now</p>
            </div>
        )

    }
}
export default Login;