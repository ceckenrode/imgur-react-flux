import React, {Component} from 'react';
import {Link} from 'react-router';
import TopicActions from '../actions/TopicActions';
import TopicStore from '../stores/TopicStore';
import '../assets/sass/header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = TopicStore.getState();
    this.storeChanged = this.storeChanged.bind(this);
    this.renderTopics = this.renderTopics.bind(this);
  }
  componentWillMount() {
    TopicStore.listen(this.storeChanged);
    TopicActions.getTopics();
  }
  componentWillUnmount() {
    TopicStore.unlisten(this.storeChanged);
  }
  render(){
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Imgur Browser
          </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.state.topics && this.renderTopics()}
          </ul>
        </div>
      </nav>
    );
  }
  renderTopics() {
    return this.state.topics.slice(0,9).map(topic => {
      return (
        <li
          key={topic.id}>
          <Link
            to={`/topics/${topic.id}`}
            activeClassName="active">
            {topic.name}
          </Link>
        </li>
      )
    })
  }
  storeChanged(state) {
    this.setState({topics: state.topics});
  }
};
