import React from 'react';

export default (Component) => class Accordion extends React.Component {
  // static pldArticleId

  state = {
    openId: null
  };

  toggleOpen = openId => ev => {
    console.log(ev.target, ev.target.id);
      ev && ev.preventDefault && ev.preventDefault();
      this.setState({
          openId : ev.target.id
      });
  };



  render() {
    // console.log(this.props.toggleOpen);
    return <Component {...this.props} state={this.state} toggleOpen={this.toggleOpen}></Component>
  }
}
