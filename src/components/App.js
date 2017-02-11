import React, { PropTypes, Component } from 'react';
import ArticleList from './ArticleList';
import Chart from './Chart';
import Range from './Range'
import 'react-select/dist/react-select.css';

class App extends Component {
    state = {
        user: '',
        selection: null
    };

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Range />
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    };

    handleSelectChange = selection => this.setState({ selection })

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            });
        };
    };
};

App.propTypes = {
    articles: PropTypes.array.isRequired
};

export default App;
