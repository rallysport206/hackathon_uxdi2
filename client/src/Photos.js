import React, { Component } from 'react';

class Photos extends Component {
  render(){

    const Photo = function(props) {
      return(
        <div className="photo"></div>
      )
    };

    return (
      <div>
        <h2>Photos Page</h2>

        <div className="photo__section">
          <Photo />
          <Photo />
          <Photo />
        </div>
      </div>
    );
  }
}

export default Photos;
