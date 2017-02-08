import React, {Component, PropTypes} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
      articles: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          title: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          comments: PropTypes.array
        })
      ).isRequired
    };

    render() {
        const {articles} = this.props;
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={this.props.state.openId === article.id}
                toggleOpen={this.props.toggleOpen(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    };


}


ArticleList.defaultProps = {
    articles: []
};

export default accordion(ArticleList);
