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

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // fetchPictures = () => {
  //   let userId= this.props.user.id;
  //   console.log('userId', userId);

	// 	let base = this;	
	// 	axios({
	// 		method: 'get',
	// 		url: '/profile',
	// 		params: {
	// 			user: userId
	// 		}
	// 	}).then((result) => {
  //     // console.log(result.data);
	// 		// let rawData = result.data.concat([result]);
	// 		// let foundDreams = sortbyDate(rawData);
	// 		base.setState({
	// 			pictureData: result.data,
	// 		// 	dreamState: true
	// 		}, () => {
  //       console.log("State: ", base.state.pictureData);
  //     });
			
	// 	}).catch((error) => {
	// 		console.log("An error occured", error.response.data);
	// 	});
	// }

	componentDidMount() {
		if(!this.props.user || !this.props.user.id){
			return;
		}
	}


  // handleSubmit = (date, content) => {
  //     let base = this;
  //     console.log('base:', base);
  //     // base.setState({display: 'loading'});


  handleSubmit = (date, content) => {
      let base = this;
      console.log('base:', base);
      // base.setState({display: 'loading'});



      // base.setState({display: 'loading'});
  //     axios.post('/profile/upload', {
  //       // file: myFile,
  //       file: 'testfile',
  //       // user: base.props.user
  //     }).then((result) => {
  //       console.log('Post results', result);
  //       // base.setState({
  //       //   date: date,
  //       //   content: content,
  //       //   data: result,
  //       //   display: 'result'
  //       // })
  //     }).catch((error) => {
  //       console.log('Post error:', error.response.data);
  //     });


  //   }

    }



  // handleFavoritePost = (e) => {
  //   e.preventDefault();
  //   console.log('POST button')
  //   axios.post('/profile/favorite/', {
  //   //   email: this.state.email,
  //   //   password: this.state.password
  //   }).then((result) => {
  //   }).catch((error) => {
  //     console.log('error returned', error.response.data);
  //   });
  // }

  // handleFavoriteDelete = (e) => {
  //   e.preventDefault();
  //   console.log('DELETE button')
  //   axios.delete('/profile/favorite/', {
  //   //   email: this.state.email,
  //   //   password: this.state.password
  //   }).then((result) => {
  //   }).catch((error) => {
  //     console.log('error returned', error.response.data);
  //   });
  // }



  render(){
    const displayState = this.state.pictureData;
    
    let 	  display = <p>No photos to show.</p>

    console.log('this.state', this.state);

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
        <div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          {display}
          <h4>Your email is {this.props.user.email}</h4>


          {/* <form action={this.handleSubmit} enctype="multipart/form-data"> */}
          {/* <form method="POST" action="/profile/upload" enctype="multipart/form-data"> */}
            {/* <label>
                Upload Photo:
              <input type="file" name="myFile" />
            </label>

            {/* <RaisedButton primary={true} label="Choose an Image">
              <input type="file" name="myFile" />
            </RaisedButton> */}

            {/* <RaisedButton
              label="Submit"
              primary={false}
              onClick={this.handleSubmit}
            />  */}


            <RaisedButton
              label="Submit"
              primary={false}
              onClick={this.handleSubmit}
            />
            {/* <input type="submit" value="Submit" /> */}
          {/* </form> */}


          {/* <RaisedButton
            label="Favorite - POST"
            primary={true}
            onClick={this.handleFavoritePost}
          />


          <RaisedButton
            label="Favorite - DELETE"
            primary={true}
            onClick={this.handleFavoriteDelete}
          /> */}



          {/* <ModalUpload /> */}

          {/* <RaisedButton
            label="Upload - POST"
            primary={true}
            onClick={this.handleUploadPost}
            // onClick={this.uploadWidget}
          /> */}



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
