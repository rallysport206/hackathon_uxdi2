import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// class Home extends Component {
//   render(){
//     return (
//         <div className="title">Hackathon</div>

//         <p>This is a home page. You probably ought to write something here</p>
//       );
//   }
// }

class Home extends Component {
  render(){
    return (
      <div className="home">
        <h1 className="title">Hackathon</h1>

        <h2>Check out your next addition</h2>

        <div className="login-box">
          <Link to="/photos"><button className="primaryCTA">View Photos</button></Link>
          <Link to="/signup"><button className="secondaryCTA">Sign Up</button></Link>
        </div>
      </div>
    );
  }
}




export default Home;
