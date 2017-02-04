import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props) {
        super();
    }

    render() {
        const comment = this.props.body;

        return (
          <div>
            <cite>
              {comment.user}
            </cite>
            <blockquote>
              {comment.text}
            </blockquote>
          </div>
        )
    }
}
