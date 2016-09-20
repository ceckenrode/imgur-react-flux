import React, {Component} from 'react';
import '../assets/sass/imagePreview.scss';
import {Link} from 'react-router';

export default class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {hovering: false};
    this.image = this.image.bind(this);
    this.video = this.video.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  render(){
    return (
      <Link
        to={`/images/${this.props.id}`}
        className="image-preview"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        {this.props.animated && this.state.hovering ? this.video() : this.image()}
        {(this.props.animated && !this.state.hovering) && this.icon()}
        {this.state.hovering && this.inset()}
      </Link>
    );
  }
  image() {
    const link = `https://i.imgur.com/${this.props.id}h.jpg`;
    return (
      <img src={link} />
    );
  }
  video() {
    return (
      <div>
        <video
          preload="auto"
          autoPlay="autoplay"
          loop="loop">
          <source
            src={this.props.mp4}
            type="video/mp4">
          </source>
        </video>
      </div>
    );
  }
  icon() {
    return <span className="glyphicon glyphicon-play"></span>
  }
  inset() {
    return (
      <div className="inset">
        Views: {this.props.views}
        <br/>
        Upvotes: {this.props.ups}
      </div>
    )
  }
  handleMouseEnter() {
    this.setState({hovering: true});
  }
  handleMouseLeave() {
    this.setState({hovering: false});
  }
}
