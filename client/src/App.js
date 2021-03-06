import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './ashco.css';
import axios from 'axios';
import Flash from './layout/Flash.js';
import Footer from './layout/Footer.js';
import Home from './Home.js';
import Nav from './layout/Nav.js';
import Login from './auth/Login.js';
import Photos from './Photos.js';
import Profile from './Profile.js';
import Signup from './auth/Signup.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }
  componentDidMount = () => {
    this.getUser();
  }

  getUser = () => {
    // If there is a token in localStorage
    let token = localStorage.getItem('mernToken');
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      });
    } else {
      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token);
        this.setState({
          token: response.data.token,
          user: response.data.user
        });
        //   Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log('cdm', err);
        this.setState({
          token: '',
          user: null
        });
      })
    }
  }

  fetchPictures = () => {
    let userId= this.props.user.id;
    console.log('userId', userId);

		// let base = this;	
		axios({
			method: 'get',
			url: '/profile',
			params: {
				user: userId
			}
		}).then((result) => {
      // console.log(result.data);
			// let rawData = result.data.concat([result]);
			// let foundDreams = sortbyDate(rawData);
			this.setState({
				pictureData: result.data,
			// 	dreamState: true
			}, () => {
        console.log("State: ", this.state.pictureData);
      });
			
		}).catch((error) => {
			console.log("An error occured", error.response.data);
		});
	}


  setFlash = (t, msg) => {
    this.setState({
      flash: msg,
      flashType: t
    });
  }

  cancelFlash = () => {
    this.setState({
      flash: '',
      flashType: ''
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router>
            <div>
              <Nav user={this.state.user} updateUser={this.getUser} />
              <div className="space">
                <Flash flashType={this.state.flashType} flash={this.state.flash} setFlash={this.setFlash} cancelFlash={this.cancelFlash} />
                <Route exact path="/" component={Home} />

                <Route path="/photos" component={
                  () => (<Photos user={this.state.user} setFlash={this.setFlash} />)} />

                <Route path="/profile" component={
                  () => (<Profile user={this.state.user} setFlash={this.setFlash} pictureData={this.state.pictureData} />)} />

                {/* AUTH   */}
                <Route path="/login" component={
                  () => (<Login user={this.state.user} setFlash={this.setFlash} updateUser={this.getUser} />)} />
                <Route path="/signup" component={
                  () => (<Signup user={this.state.user} setFlash={this.setFlash} updateUser={this.getUser} />)} />
              </div>
            </div>
          </Router>
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
