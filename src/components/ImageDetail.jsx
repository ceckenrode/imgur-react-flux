import React, {Component} from 'react';
import CommentBox from './CommentBox';
import ImageActions from '../actions/ImageActions';
import ImageStore from '../stores/ImageStore';
import {Link} from 'react-router';
import '../assets/sass/imageDetail.scss';

export default class ImageDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.storeChanged = this.storeChanged.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }
  componentWillMount() {
    ImageStore.listen(this.storeChanged);
    ImageActions.getImage(this.props.params.id);
  }
  componentWillUnmount() {
    ImageStore.unlisten(this.storeChanged);
  }
  render() {
    return (
      <div className="image-detail">
        {this.state.image && this.renderContent()}
      </div>
    );
  }
  storeChanged(state) {
    this.setState({image: state.image.image, comments: state.image.comments});
  }
  renderContent() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>{this.state.image.title}</h4>
          </div>
          <div className="panel-body">
            {this.renderImage()}
          </div>
          <div className="panel-footer">
            <h5>{this.state.image.description}</h5>
          </div>
        </div>
        <h3>Comments</h3>
        {this.renderComments()}
      </div>
    )
  }
  renderImage() {
    if (this.state.image.animated) {
      return (
        <video preload="auto" autoPlay="autoplay" loop="loop">
          <source src={this.state.image.mp4} type="video/mp4"></source>
        </video>
      )
    } else {
      return <img src={this.state.image.link}/>
    }
  }
  renderComments() {
    if (!this.state.comments) {
      return null;
    } else {
      return <CommentBox comments={this.state.comments}/>
    }
  }
}
