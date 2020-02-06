
import React, { Component} from 'react';
import { connect } from 'react-redux';
import FirebaseModel from "../../firebase/model";
import * as Actions from "../../store/actions";
import Card from "../../components/card/Card";
import BasicForm from "../../components/form/BasicForm";

let firebaseModel = new FirebaseModel();

class Register extends Component {
  render() {
    return (
    <Card>
        <p style={{color: "white"}}>
            Register
        </p>
        <BasicForm buttonValue={"Register!"} onSubmit={this.submitted} inputs={[
            {isReq: true, 
                name: "email",
                placeHolder: "email",
                type:"text"
            },{ 
            name: "password",
            placeHolder: "password",
            inputType:"password"
        },
            
            ]}/>
    </Card>
    );
  }

  submitted = async (formObject) => {
    let a = firebaseModel.UserRegister(formObject.email, formObject.password);
    await a.then((res)=> {
        console.log(res);

    });
    console.log("finished");
  }


}

const mapStateToProps = state => {
  return {
        // displayMenu: state.displayMenu,
        // menuFunction: state.menuFunction,
        // isShowMenu: state.isMenuShown,
        currentUser: state.currentUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // setMenu: (id, func) => dispatch({type: Actions.SET_MENU, id: id, func: func}),
    // setShowFilterMenu: (isShown) => dispatch({type: Actions.SET_SHOW_FILTER_MENU, isShown: isShown})
    // userRegister: (formObject) => dispatch({type: Actions.USER_REGISTER, formObject: formObject})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
