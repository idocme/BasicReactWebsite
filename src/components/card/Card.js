import React, { Component} from 'react';




class Card extends Component {
  render() {
    return (
    <div style={{...this.props.styles, width: "250px", height: "250px", backgroundColor: "black"}}>
        {this.props.children}
    </div>);
  }



}

export default Card;
