import React, {Component} from 'react';
import ImageActions from '../actions/ImageActions';
import ImageStore from '../stores/ImageStore';
import ImagePreview from '../components/ImagePreview';
import {Link} from 'react-router';
import '../assets/sass/topic.scss';

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = ImageStore.getState();
    this.storeChanged = this.storeChanged.bind(this);
    this.renderImages = this.renderImages.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      ImageActions.getImages(nextProps.params.id);
    }
  }
  componentWillMount() {
    ImageStore.listen(this.storeChanged);
    ImageActions.getImages(this.props.params.id);
  }
  componentWillUnmount() {
    ImageStore.unlisten(this.storeChanged);
  }
  render() {
    return (
      <div className="topic">{this.renderImages()}</div>
    )
  }
  storeChanged(state) {
    this.setState({images:state.images});
  }
  renderImages() {
    return this.state.images.map(image => {
      return <ImagePreview key={image.id} {...image} />
    });
  }
}
