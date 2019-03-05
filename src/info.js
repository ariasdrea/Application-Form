import React, { Component } from "react";
import Personal from "./personal";
import Salary from "./salary";
import Summary from "./summary";
import Success from "./success";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      step: 4,
      fullName: "",
      email: "",
      phoneNumber: "",
      value: ""
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }

  // Will add a step to state and take the user to the following component
  nextStep() {
    this.setState({
      step: this.state.step + 1
    });
  }

  // Will deduct a step to state and take the user to the previous component
  prevStep() {
    this.setState({
      step: this.state.step - 1
    });
  }

  //Handles input changes from all fields.
  handleInput = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  //Saves the phone number value to state in order to render it in the summary at the end
  handlePhoneNumber(e) {
    this.setState({
      phoneNumber: e
    });
  }

  //Method used in Salary component to capture the selected value
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    //Using switch/case to conditionally render components based on the current step - The step number changes depending on which button the user clicks within each component thereby incrementing or decrementing the step in the state
    switch (this.state.step) {
      case 1:
        return (
          <div>
            <Personal
              currentStep={this.state.step}
              fullName={this.state.fullName}
              email={this.state.email}
              phoneNumber={this.state.phoneNumber}
              handleInput={this.handleInput}
              handlePhoneNumber={this.handlePhoneNumber}
              nextStep={this.nextStep}
            />
          </div>
        );
      case 2:
        return (
          <Salary
            value={this.state.value}
            currentStep={this.state.step}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Summary
            fullName={this.state.fullName}
            email={this.state.email}
            value={this.state.value}
            currentStep={this.state.step}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            phoneNumber={this.state.phoneNumber}
          />
        );
      case 4:
        return <Success />;
      default:
    }
  }
}

export default Info;
