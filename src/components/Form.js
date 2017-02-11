import React, {Component,  PropTypes } from 'react';

class FormComment extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        userName: '',
        userText: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState ({
        [name] : value
      });
    };

    handleSubmit(event) {
       alert('A name was submitted: ' + this.state.userName + ' Text: ' + this.state.userText + ' and clear');
       this.setState({
         userName: '',
         userText: ''
       });
       event.preventDefault();
    };

    render() {
      return (
        <section>
          <form  onSubmit={this.handleSubmit}>
            <p>
              <input
                name="userName"
                value={this.state.userName}
                onChange={this.handleChange}
                placeholder="Name" />
            </p>
            <p>
              <textarea
                name="userText"
                value={this.state.userText}
                onChange={this.handleChange}
                placeholder="Text"></textarea>
            </p>
            <p>
              <button
                type="button"
                name="button"
                type="submit">Add comment</button>
            </p>
          </form>
        </section>
      )
    };
}

export default FormComment;
