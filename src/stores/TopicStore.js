import alt from '../libs/alt';
import TopicActions from '../actions/TopicActions';

class TopicStore {
  constructor() {
    this.topics = [];
    this.bindListeners({
      handleUpdateTopics: TopicActions.UPDATE_TOPICS
    });
  }
  handleUpdateTopics(topics) {
    this.topics = topics;
  }
}

export default alt.createStore(TopicStore, 'TopicStore');
