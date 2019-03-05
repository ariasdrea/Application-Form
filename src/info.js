import React, { Component } from "react";
import Personal from "./personal";
import Salary from "./salary";
import Summary from "./summary";
import Success from "./success";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      fullName: "",
      email: "",
      phoneNumber: "",
      value: ""
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Will add a step to state and take the user to the following component
  nextStep() {
    this.setState(
      {
        step: this.state.step + 1
      },
      () => {
        console.log("this.state.step:", this.state.step);
        console.log("this.state:", this.state);
      }
    );
  }

  // Will deduct a step to state and take the user to the previous component
  prevStep() {
    this.setState(
      {
        step: this.state.step - 1
      },
      () => {
        console.log("this.state.step:", this.state.step);
      }
    );
  }

  //Handles input changes from all fields.
  handleInput = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handlePhoneNumber(e) {
    console.log("e:", e);
    this.setState({
      phoneNumber: e
    });
  }

  handleChange = e => {
    this.setState({ value: e.target.value }, () => {
      console.log("this.state in salary:", this.state);
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
