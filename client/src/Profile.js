import React, { Component } from 'react';
import axios from 'axios';
// MATERIAL UI
import RaisedButton from 'material-ui/RaisedButton';

class Profile extends Component {

  handleFavoritePost = (e) => {
    e.preventDefault();
    console.log('POST button')
    axios.post('/profile/favorite/', {
    //   email: this.state.email,
    //   password: this.state.password
    }).then((result) => {
    }).catch((error) => {
      console.log('error returned', error.response.data);
    });
  }

  handleFavoriteDelete = (e) => {
    e.preventDefault();
    console.log('DELETE button')
    axios.delete('/profile/favorite/', {
    //   email: this.state.email,
    //   password: this.state.password
    }).then((result) => {
    }).catch((error) => {
      console.log('error returned', error.response.data);
    });
  }

  handleUploadPost = (e) => {
    e.preventDefault();
    console.log('POST button')
    axios.post('/profile/upload/', {
    //   email: this.state.email,
    //   password: this.state.password
    }).then((result) => {
    }).catch((error) => {
      console.log('error returned', error.response.data);
    });
  }

  handleUploadDelete = (e) => {
    e.preventDefault();
    console.log('DELETE button')
    axios.delete('/profile/upload/', {
    //   email: this.state.email,
    //   password: this.state.password
    }).then((result) => {
    }).catch((error) => {
      console.log('error returned', error.response.data);
    });
  }

  render(){
    if(this.props.user && this.props.user.name){
      return (
        <div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>

          <RaisedButton 
            label="Favorite - POST" 
            primary={true}
            onClick={this.handleFavoritePost} 
          />


          <RaisedButton 
            label="Favorite - DELETE" 
            primary={true}
            onClick={this.handleFavoriteDelete} 
          />

          <br/>

          <RaisedButton 
            label="Upload - POST" 
            primary={true}
            onClick={this.handleUploadPost} 
          />

          <RaisedButton 
            label="Upload - DELETE" 
            primary={true}
            onClick={this.handleUploadDelete} 
          />

        </div>
      );
    }
    else {
      return (
        <p>This is a profile page. You need to be logged in to view it.</p>
      );
    }
  }
}

export default Profile;
