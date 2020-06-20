import React,{Component} from 'react';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isReg:false,
      isLogin:false
    }
    this.validateReg(this);
  }
  validateReg=(event)=>{
    // event.preventDefault()
    if(localStorage.getItem('email')==null){
      this.setState({
        isReg:false
      });
      // alert(this.state.isReg+" "+localStorage.getItem('email'))
    }
    else{
      this.setState({
        isReg:true
        
      });
      // alert(this.state.isReg+" "+localStorage.getItem('email'))
    }
    
  }
  onRegistered=()=>{
    this.setState({
        isReg:true
    });
  }
  onLogin=()=>{
    this.setState({
      onLogin:true
    });
  }
  onLogout=()=>{
    this.setState({
      onLogin:false
    });
  }
  unRegistered=()=>{
    this.setState({
      onReg:false
    });
  }
  render(){
    return (
     <div>
       {this.state.isReg && <Login onLogin={this.onLogin} unReg={this.unRegistered}/>}
       {!this.state.isReg && <Registration onReg={this.onRegistered} />}
       {this.state.onLogin && <Home onLogout={this.onLogout}/>}
     </div>
    );
  }
}

export default App;
