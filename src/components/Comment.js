import React, { PropTypes } from 'react';
import FormComment from './Form'

function Comment(props) {
    const {text, user} = props.comment
    return (
      <section>
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
        <FormComment />
      </section>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default Comment
