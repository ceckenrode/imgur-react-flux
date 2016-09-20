import alt from '../libs/alt';
import ImageActions from '../actions/ImageActions';

class ImageStore {
  constructor() {
    this.images = [];
    this.image = null;
    this.bindListeners({
      handleUpdateImages: ImageActions.UPDATE_IMAGES,
      handleUpdateImage: ImageActions.UPDATE_IMAGE
    });
  }
  handleUpdateImages(images) {
    this.images = images;
  }
  handleUpdateImage(image) {
    this.image = image;
  }
}

export default alt.createStore(ImageStore, 'ImageStore');
