import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      current_state: 'login'
    }
  }

  loadRegister = () =>{
    this.setState({
        current_state: 'register'
      })
  }

  loadLogin = () => {
    this.setState({
        current_state: 'login'
    })
  }


  render(){
    let current_state = this.state.current_state

    let current_page;

    switch(current_state){
      case'login':
      current_page = <Login loadReg={this.loadRegister} />
      break;

      case 'register':
        current_page = <Register loadLog={this.loadLogin} />
        break;
    }



    return(
      <div className="App">
        <div>
          {current_page}
        </div>
      </div>
    )
  }
}
export default App;