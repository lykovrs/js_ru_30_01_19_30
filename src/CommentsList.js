import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
  state = {
    isOpen: false,
    buttonText: "Show"
  }

  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.handleClick}>{this.state.buttonText} comments</button>
        </p>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if(!this.state.isOpen || !this.props.list) return null;
    const comments = this.props.list;
    const commentsElements = comments.map((comment) =>
        <div key={comment.id}>
            <Comment body={comment}/>
        </div>
    );

    return (
      commentsElements
    )
  }

  handleClick = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen,
      buttonText: `${this.state.isOpen ? 'Show': 'Hide'}`
    });
  }
}
