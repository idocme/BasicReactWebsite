import React, { Component} from 'react';
import BasicInput from "./BasicInput";

//need to have "inputs"
//input must have: "type". unique "name" and can have "styles" and "placeHolder" and "isReq".
class BasicForm extends Component {
  state = {
    isValid: true,
    formObject: {}
  }
  componentDidMount() {
    this.checkThisFormIsValid();
  }

  checkThisFormIsValid = () => {
    if (this.state.formObject === {}) {
      this.setState({isValid: false});
    }
        //if we have one item that is required so form is not valid.
        for (let el of this.props.inputs) {
          if (el.isReq && (this.state.formObject[el.name] === "" || this.state.formObject[el.name] === undefined)) {
            this.setState({isValid: false});
            return;
          }
        }
        this.setState({isValid: true});
  }

  render() {
    let inputs = this.props.inputs.map((el, index)=>{
      return <BasicInput 
      isReq={el.isReq} 
      styles={el.styles}
      key={"form-input"+index} 
      inputType={el.inputType} 
      placeHolder={el.placeHolder} 
      inputChanged={(e)=>{this.setForm(el.name, e.target.value)}}/>
    });
    return (
    <>
        <form>
          {inputs}
          <br/>
          <input type="button" value={this.props.buttonValue} onClick={()=>{this.props.onSubmit(this.state.formObject)}} disabled={!this.state.isValid}/>
        </form>
    </>
    );
  }

  setForm = (name, value) => {
    let tmp = this.state.formObject;
    tmp[name] = value;
    this.checkThisFormIsValid();
    this.setState({formObject: tmp});
  }

}

export default BasicForm;
