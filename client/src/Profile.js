import React, { Component } from 'react';
import axios from 'axios';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import ModalUpload from './layout/ModalUpload.js'
// MATERIAL UI
import RaisedButton from 'material-ui/RaisedButton';
// import UploadFile from './testFile/UploadFile.js';

import FileUpload from './testComponent/FileUpload.js';
import { image } from 'cloudinary';

// const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'demo'});
<script src="//widget.cloudinary.com/global/all.js" type="text/javascript"></script>

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      pictureData: this.props.pictureData
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fetchPictures();
  }

 
	componentDidMount() {
		if(!this.props.user || !this.props.user.id){
			return;
		}
	}



  handleSubmit = (date, content) => {
      let base = this;
      console.log('base:', base);
      // base.setState({display: 'loading'});


    }



  render(){
    const displayState = this.state.pictureData;
    
    let 	  display = <p>No photos to show.</p>

    // console.log('this.state', this.state);

    if (displayState === true && this.state.pictureData && this.state.pictureData.length >= 1) {
      
      display = <p>Photos are shown.</p>

    //   display = this.state.pictureData.map((picture, index) => {
  	// 		if(picture._id) {
		// 			return (
    //         <img src={picture.cloudinary_url}/>
    //       )
  	// 		}
    // 	});
		}

    if(this.props.user && this.props.user.name){
      return (
        <div className="profile__main">
          <div className="profile__head">
            <div className="profile__user--photo ">
              <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FjM7cOrx.jp" />
              {/* <img src="http://www.qygjxz.com/data/out/190/6179593-profile-pics.jpg" /> */}
              
            </div>
            <div className="profile__user--info">
              <h2 className="profile__user--username">{this.props.user.name}</h2>
              <a className="profile__user--link" href="#">About the artist</a>
            </div>
          </div>
          <div className="profile__row">
            <div className="profile__row--link"><p className="profile__user--name">John Clem</p></div>
            <div className="profile__row--link profile__row--link--posts"><a href="#" className="profile__user--posts">Posts</a></div>
            <div className="profile__row--link profile__row--link--votes"><a href="#" className="profile__user--votes">Votes</a></div>
          </div>
            {/* <RaisedButton
              label="Submit"
              primary={false}
              onClick={this.handleSubmit}
            /> */}
          <div className="profile__photos"> 

            <div className="photo__card">
              <img src="https://i.imgur.com/IaJfw4r.jpg" />
            </div>

            <div className="photo__card">
              <img src="https://i.imgur.com/jM7cOrx.jpg" />
            </div>

            <div className="photo__card">
              <img src="https://i.imgur.com/IaJfw4r.jpg" />
            </div>

            <div className="photo__card">
              <img src="https://i.imgur.com/jM7cOrx.jpg" />
            </div>            
            
            <div className="photo__card">
              <img src="https://i.imgur.com/IaJfw4r.jpg" />
            </div>

            <div className="photo__card">
              <img src="https://i.imgur.com/jM7cOrx.jpg" />
            </div>

            <div className="photo__card">
              <img src="https://i.imgur.com/IaJfw4r.jpg" />
            </div>

            <div className="photo__card">
              <img src="https://i.imgur.com/jM7cOrx.jpg" />
            </div>            
            
            <div className="photo__card">
              <img src="https://i.imgur.com/IaJfw4r.jpg" />
            </div>
          </div>
          
        </div>
                
      );
    }
    else {
      return (
        <div>
          <p>This is a profile page. You need to be logged in to view it.</p>
        </div>
      );
    }
  }
}

export default Profile;
