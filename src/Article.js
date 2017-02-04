import React, {Component} from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component {
    state = {
        isOpen: false
    }

    constructor(props) {
        super();
    }

    render() {
        const {article} = this.props
        console.log('---', 123)
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return (
          <div>
            <section>
                {this.props.article.text}
            </section>

            <CommentsList list={this.props.article.comments}/>
          </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
