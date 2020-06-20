import React, {Component} from 'react';
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            pass:'',
            errorlog:'',
            successlog:''
        };
    }
    handleEmail=(event)=>{
        event.preventDefault()
        this.setState({
             [event.target.name]:event.target.value
        })
    }
    handlePassword=(event)=>{
        event.preventDefault()
        this.setState({
             [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const {email,pass}=this.state
        if(localStorage.getItem('email')===email && localStorage.getItem('password')===pass){
            this.setState({
                successlog:"Logged in successfully",
                errorlog:''
            });
            const timer = setTimeout(() => {
                this.props.onLogin();
            }, 1000);
            return () => clearTimeout(timer);
            
        }
        else{
            this.setState({
                errorlog:"*Username or Password Incorrect",
                successlog:''
            });
        }
    }
    render(){
        const {errorlog}=this.state
        const {successlog}=this.state
        return (
        <div className="page-content">
            <div className="form-content">
                <form className="form-detail" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-row">
                        <input type="text" placeholder="E-mail" name="email" onChange={this.handleEmail} className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                    </div>
                    <div className="form-row">
                        <input type="password" placeholder="Password" name="pass"  onChange={this.handlePassword} className="input-text"/>
                    </div>
                    <div className="form-row">
                        <span id="error">{errorlog}</span>
                        <span id="success">{successlog}</span>
                    </div>
                    <div className="form-row-last">
                        <input type="submit" name="register" className="register" value="LOGIN"/>
                    </div>n
                </form>
            </div>
        </div>
        )
    }
}
