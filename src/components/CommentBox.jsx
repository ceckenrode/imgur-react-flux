import React, {Component} from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.renderComments = this.renderComments.bind(this);
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderComments()}
      </ul>
    )
  }
  renderComments() {
    return this.props.comments.slice(0,20).map(comment => {
      return (
        <li
          className="list-group-item comment-box"
          key={comment.id}>
          <span className="badge">
            {comment.ups}
          </span>
          <h5>
            {comment.author}
          </h5>
          {comment.comment}
        </li>
      )
    })
  }
}
