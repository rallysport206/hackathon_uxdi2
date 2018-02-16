import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

// class Home extends Component {
//   render(){
//     return (
//         <div className="title">Hackathon</div>
//
//         <p>This is a home page. You probably ought to write something here</p>
//       );
//   }
// }

class Home extends Component {
  render(){
    return (
      <div className="home">
        <p className="title">E  A  S  E  L</p>

        <h1 className="discover">DISCOVER,</h1>
        <h1 className="discover">VOTE, BE FOUND.</h1>

        <div className="login-box">
          <Link to="/photos">
            <FlatButton
            backgroundColor="#009688"
            label="DISCOVER" />
          </Link>
          <Link to="/signup">
            <FlatButton
            backgroundColor="#FAFAFA"
            label="Log In" />
          </Link>
        </div>
      </div>
    );
  }
}




export default Home;
