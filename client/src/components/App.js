import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/register';
import ItineraryList from '../components/Itinerary';
import SplitExp from '../components/splitExp';
import CurrConverter from '../components/currConverter';
import Chat from '../components/chat';
import Signin from '../components/login';
import Friends from '../components/Friends/Friends';
import NavLogo from '../images/long.png';
import Auth from '../authService';
import '../css/App.css';
import AddEvent from '../components/AddEvent';
import Cal from '../components/Calendar';



export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      user: ""
    }


    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.auth = new Auth();
  }

  handleLoginSubmit(username, password) {
    this.auth.login(username, password)
      .then((res) => {
        console.log(res)
        console.log(this.props)
        this.setState({user: res.user, isAuthenticated: true})
        console.log(this.state)
      })
}

  signinClick = () => {
    this.setState({ click: true })
    return <ItineraryList />    
  }

  iteneraryClick = () => this.setState({ click: true });
  splitExpenseClick = () => this.setState({ click: true });
  calendarClick = () => this.setState({ click: true });
  chatClick = () => this.setState({ click: true });

  findFriendClick = (event) => {
    event.preventDefault();
    this.setState({ friendsClick: true 
    });
  }
  

  

  render() {
    console.log('CLICK FRIEND COMPONENT: ', this.state.friendsClick)

     const isAuth = !this.state.isAuthenticated ?
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <img className="center" src={NavLogo} alt="logo"/>
            {/* Add spacer, to align navigation to the right */}
            {/* <div className="mdl-layout-spacer"></div> */}
            {/* Navigation. We hide it in small screens */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
             <a className="mdl-layout__tab" 
                onClick={this.signinClick} >
                Login</a>
            </nav>
          </div>
      </header> : <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <img className="navlogo" src={NavLogo} alt="logo"/>
            {/* Add spacer, to align navigation to the right */}
            {/* <div className="mdl-layout-spacer"></div> */}
            {/* Navigation. We hide it in small screens */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
             <a className="mdl-layout__tab" href="/signout">Logout</a>
            </nav>
          </div>
        </header>

    return (

    <Router>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
        {isAuth}
        
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="/itinerary" class="mdl-layout__tab is-active" onClick={this.iteneraryClick}>Itinerary</a>
                <a href="/splitExp" class="mdl-layout__tab" onClick={this.splitExpenseClick}>Expenses</a>
                <a href="/chat" class="mdl-layout__tab" onClick={this.chatClick}>Chat</a>
              </div>
          </div>
        </header>
        <main className="mdl-layout__content main-layout">
          <div className="page-content">
          {/* Your content goes here */}
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/signin" render = {(props) => <Signin {...props} signin={this.handleLoginSubmit}/>} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/itinerary" render = {(props) => <ItineraryList {...props} user={this.state.user} />} />
            <Route exact path="/splitExp" component={SplitExp} />
            <Route exact path="/currConverter" component={CurrConverter} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/event" component={AddEvent} />
            <Route exact path="/calendar" component={Cal} />
            <Route exact path="/friends" component={Friends} />
            
            
          </div>
        </main>
	  </div>
  </Router>
    )
  }
}
