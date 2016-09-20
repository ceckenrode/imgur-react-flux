import React, {Component} from 'react';
import Header from './Header';
import TopicList from './TopicList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children ? this.props.children : <TopicList />}
      </div>
    )
  }
}
