import React, { Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as Actions from "../../store/actions";

import "./Layout.css"

import Register from "../Register/Register";


class Layout extends Component {
  render() {
    return (<div>
    <div className={"header"}>

    </div>
    <div className={"main-content"}>
      <Register/>
    </div>
    <div className={"footer"}>

    </div>

    </div>);
  }
}

const mapStateToProps = state => {
  return {
        currentUser: state.currentUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // userRegister: (formObject) => dispatch({type: Actions.USER_REGISTER, formObject: formObject})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
