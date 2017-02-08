import React from 'react';

export default (Component) => class Accordion extends React.Component {

  state = {
    openId: null
  };

  toggleOpen = openId => ev => {
      ev && ev.preventDefault && ev.preventDefault();

      this.setState({
            openId : this.state.openId == openId ? null : openId
        });
  };

  render() {
    return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen}></Component>
  };
};
