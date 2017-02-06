import React, {PropTypes} from 'react';

function Comment(props) {
    const {text, user} = props.comment;
    return (
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
    )
};

Comment.propTypes = {
  comment: React.PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number
    })
};

export default Comment;
