import React, { Component} from 'react';




class BasicInput extends Component {
  render() {
    return (
    <>
        <input type={this.props.inputType} placeholder={this.props.placeHolder} onChange={this.props.inputChanged} style={this.props.styles} />
    </>
    );
  }



}

export default BasicInput;
