import alt from '../libs/alt';
import Api from '../utils/api';

class ImageActions {
  getImages(id) {
    return Api.get(`topics/${id}`).then(response => {
      let images = response.data.filter(image => {
        return !image.is_album;
      });
      this.updateImages(images);
    });
  }
  updateImages(images) {
    return images;
  }
  updateImage(imageData) {
    return imageData;
  }
  getImage(id) {
    const imageData = {};
    return Api.get(`gallery/image/${id}`).then(response => {
      imageData.image = response.data;
    }).then(() => {
      return Api.get(`gallery/${id}/comments`)
    }).then(response => {
      imageData.comments = response.data;
      this.updateImage(imageData);
    });
  }
}


export default alt.createActions(ImageActions);
