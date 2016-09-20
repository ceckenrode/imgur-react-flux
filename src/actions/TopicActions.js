import alt from '../libs/alt';
import Api from '../utils/api';

class TopicActions {
  getTopics() {
    return (dispatch) => {
      Api.get('topics/defaults').then((response) => {
        this.updateTopics(response.data);
        dispatch();
      });
    }
  }
  updateTopics(topics) {
    return topics;
  }
}


export default alt.createActions(TopicActions);
