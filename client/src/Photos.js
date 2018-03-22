import React, { Component } from 'react';

class Photos extends Component {
  render(){

    const Photo = function(props) {
      return(
        <div className="photo"></div>
      )
    };

    return (
      <div className="photo__section">
        <div>
          <img className="photo winner-photo" src="https://i.imgur.com/js3ARRJ.jpg" alt=""/>
        </div>

        <img className="photo" src="https://i.imgur.com/KYYzaWt.jpg" alt=""/>
        <img className="photo" src="https://i.imgur.com/KkulPF4.jpg" alt=""/>
        <img className="photo" src="https://images.unsplash.com/photo-1494488450280-5bb40b163f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=749dccf390bea8cbc246e1112e3ea80a&auto=format&fit=crop&w=2234&q=80" alt=""/>
        <img className="photo" src="https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f713c613d0eff8ea1860b97f08ebb176&auto=format&fit=crop&w=2260&q=80" alt=""/>
        <img className="photo" src="https://images.unsplash.com/photo-1489343631634-d8c00bfdf8d8?ixlib=rb-0.3.5&s=4fa04a30521f3511f77264f33d20c989&auto=format&fit=crop&w=2166&q=80" alt=""/>
        <img className="photo" src="https://images.unsplash.com/photo-1515509926886-d62c832285ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7963d4248e281a28a22169ca93f18fd&auto=format&fit=crop&w=2251&q=80" alt=""/>
        <img className="photo" src="https://images.unsplash.com/photo-1513909619904-efd11e5b8666?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5c80f82f52136a57d191b2e081eb82c&auto=format&fit=crop&w=934&q=80" alt=""/>
        <img className="photo" src="https://i.imgur.com/jM7cOrx.jpg" alt=""/>
        <img className="photo" src="https://i.imgur.com/IaJfw4r.jpg" alt=""/>
        <img className="photo" src="https://i.imgur.com/KkulPF4.jpg" alt=""/>
        <img className="photo" src="https://i.imgur.com/KkulPF4.jpg" alt=""/>
      </div>
    );
  }
}

export default Photos;
