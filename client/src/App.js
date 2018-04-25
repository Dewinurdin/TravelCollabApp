// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home/Home.js";
// import About from "./pages/About/About.js";
// import Signup from "./pages/Signup/Signup.js";
// import Signin from "./pages/Signin/Signin.js";
// import Nav from "./components/Nav/Navbar.js";
// import Footer from "./components/Footer/Footer.js";
// import Chat from "./components/Chat/Chat";
// import Friend from "./components/Friends/Friends";
// import AddFriend  from "./components/Friends/AddFriend";

// class App extends Component {
//   // this.props.signOut
//   signOut = () => {
//     sessionStorage.setItem("isAuthenticated", false);
//     window.location.href = "/"; // on signout, send to home page
//   };

 
//   render() {
//     return (
//       <Router>
//         <div
//           className="main-container"
//           style={{ minHeight: "100%", marginBottom: "-100px" }}
//         >
//           <Nav signOut={this.signOut} />
//             {/* <Jumbotron /> */}
//               <Route exact path="/" component={Home} />
//               <Route exact path="/about" component={About} />
//               <Route exact path="/signup" component={Signup} />
//               <Route exact path="/chat" component={Chat} />
//               <Route exact path="/signin" component={Signin} />
//               <Route exact path="/friend" component={Friend} />
              
//             <Footer />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;