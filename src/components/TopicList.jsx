import React, {Component} from 'react';
import TopicActions from '../actions/TopicActions';
import TopicStore from '../stores/TopicStore';
import {Link} from 'react-router';


export default class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = TopicStore.getState();
    this.storeChanged = this.storeChanged.bind(this);
    this.renderTopics = this.renderTopics.bind(this);
  }
  componentWillMount() {
    TopicStore.listen(this.storeChanged);
    if (this.state.topics) {
      TopicActions.getTopics();
    }
  }
  componentWillUnmount() {
    TopicStore.unlisten(this.storeChanged);
  }
  render() {
    return (
      <div className="list-group">
        Topic List
        {this.state.topics && this.renderTopics()}
      </div>
    );
  }
  renderTopics() {
    return this.state.topics.slice(0,9).map(topic => {
      return (
        <Link
          to={`/topics/${topic.id}`}
          className="list-group-item"
          key={topic.id}>
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
        </Link>
      )
    });
  }
  storeChanged(state) {
    this.setState({topics: state.topics});
  }
}
