import React, { Component } from "react";
import Personal from "./personal";
import Salary from "./salary";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      fullName: "",
      email: "",
      phoneNumber: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  nextStep() {
    console.log("nextStep is activated");
    this.setState(
      {
        step: this.state.step + 1
      },
      () => {
        console.log("this.state.step:", this.state.step);
      }
    );
  }

  prevStep() {
    console.log("prevStep is activated");
    this.setState(
      {
        step: this.state.step - 1
      },
      () => {
        console.log("this.state.step:", this.state.step);
      }
    );
  }

  render() {
    //Using switch/case to conditionally render components based on the current step - The step number changes depending on which button the user clicks within each component thereby incrementing or decrementing the step in the state
    switch (this.state.step) {
      case 1:
        return (
          <Personal
            currentStep={this.state.step}
            fullName={this.state.fullName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <Salary
            currentStep={this.state.step}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return <h1> Summary Component </h1>;
      default:
    }
  }
}

export default Info;
