import React, {Component} from 'react';
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
          time: 0,
          isOn: true,
          start: 0
        }
    }
    startTimer() {
    this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time,
    })
    this.timer = setInterval(() => this.setState({
        time:Math.round((Date.now() - this.state.start)/1000)
    }), 1000);
    }
    componentDidMount(){
        this.startTimer();
    }
    handleLogout=(event)=>{
        event.preventDefault()
        this.props.onLogout();
    }
    render(){
        const {time}=this.state
        // const {name}=localStorage.getItem('email');
        return (
        <div className="page-content">
            <div className="home-page">
        <h2 className="title">Hi <span className="username">{localStorage.getItem('name')} </span><br/>WELCOME TO HOME PAGE</h2>
        <h4 className="title">SESSION STARTED  :  {time}sec</h4>
                <h4><button onClick={this.handleLogout}>Logout</button></h4>
            </div>
            
        </div>
        )
    }
}
