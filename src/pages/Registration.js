import React, {Component} from 'react';
// import Login from './Login';
export default class Registration extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_name:'',
            last_name:'',
            loc_email:'',
            pass:'',
            c_pass:'',
            currentContent:'',
            errorlog:'',
            successlog:''
        };
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const { first_name,last_name,loc_email, pass, c_pass } = this.state
        if(first_name===''){
            this.setState({
                errorlog:"*Required First Name"
            });
        }   
        else if(last_name===''){
            this.setState({
                errorlog:"Required Last Name"
            });
        }
        else if(loc_email===''){
            this.setState({
                errorlog:"*Required E-mail"
            });
        }
        else if(pass===''){
            this.setState({
                errorlog:"*Required Password"
            });
        }
        else if (pass !== c_pass) {
            this.setState({
                errorlog:"*Password does't match"
            });
        }
        else{
            this.setState({
                errorlog:"",
                successlog:"Successfully Registered",
                name:first_name+" "+last_name,
                email:loc_email
            });
            localStorage.setItem('name', first_name+" "+last_name);
            localStorage.setItem('email',loc_email);
            localStorage.setItem('password',pass);
            const timer = setTimeout(() => {
                this.props.onReg();
            }, 1000);
            return () => clearTimeout(timer);
            
        }
    }
    handleFirstName=(event)=>{
        event.preventDefault()
        this.setState({
             [event.target.name]:event.target.value
        })
    }
    handleLastName=(event)=>{
        event.preventDefault()
        this.setState({
             [event.target.name]:event.target.value
        })
    }
    handleEmail=(event)=>{
        event.preventDefault()
        this.setState({
             loc_email:event.target.value
        })
    }
    handlePassword=(event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
       })
    }
    handleConfirmPass=(event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value,
       })
    }
    render(){
        const {errorlog}=this.state
        const {successlog}=this.state
        return (      
        <div className="page-content">
            <div className="form-content">
                <form className="form-detail" onSubmit={this.handleSubmit}>
                    <h2>REGISTER FORM</h2>
                    <div className="form-row">
                        <input type="text" placeholder="First Name" name="first_name" id="first_name" onChange={this.handleFirstName} className="input-text"/>
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Last Name" name="last_name" id="last_name" onChange={this.handleLastName} className="input-text"/>
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="E-mail" name="email" id="email" onChange={this.handleEmail} className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                    </div>
                    <div className="form-row">
                        <input type="password" placeholder="Password" name="pass" id="pass" onChange={this.handlePassword} className="input-text"/>
                    </div>
                    <div className="form-row">
                        <input type="password" placeholder="Confirm Password" name="c_pass" id="c_pass"  onChange={this.handleConfirmPass} className="form-row-last"/>
                    </div>
                    <div className="form-row">
                        <span id="error">{errorlog}</span>
                        <span id="success">{successlog}</span>
                    </div>
                    <div className="form-row">
                        <input type="submit" className="register" value="REGISTER"/>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
