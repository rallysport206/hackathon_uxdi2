import React from 'react'
import axios, { post } from 'axios';

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file: null,
      user: this.props.user
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file, this.props.user).then((response)=>{
      console.log('response data:', response);
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file, thisUser){
    console.log(thisUser);
    const url = '/profile/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user', thisUser);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    // axios.post('/profile/upload/', {
    //   user: user,
    // //   password: this.state.password
    // }).then((result) => {
    // }).catch((error) => {
    //   console.log('error returned', error.response.data);
    // });
    return  post(url, formData, config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        {/* <input type="hidden" name="action" value="login" /> */}
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}


// handleUploadPost = (e) => {
  //   e.preventDefault();
  //   console.log('POST button')

  //   axios.post('/profile/upload/', {
  //   //   email: this.state.email,
  //   //   password: this.state.password
  //   }).then((result) => {
  //   }).catch((error) => {
  //     console.log('error returned', error.response.data);
  //   });
  // }


export default FileUpload