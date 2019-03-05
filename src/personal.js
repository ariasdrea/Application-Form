import React, { Component } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";

const infoStyles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "5%",
    justifyContent: "space-around"
  },
  formDiv: {
    border: "1.5px solid grey",
    paddingTop: 10,
    paddingBottom: 50,
    marginLeft: 5,
    background: "rgba(255, 255, 255, 0.3)"
  },
  currentStep: {
    textAlign: "center",
    marginTop: 20,
    opacity: 0.6,
    fontSize: 17
  },
  textField: {
    marginTop: 5
  },
  button: {
    marginTop: 30,
    width: 200,
    fontWeight: "lighter",
    marginBottom: -20
  },
  phone: {
    marginTop: 100
  }
});

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: this.props.phoneNumber
    };
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }

  //Saves the phone # value to state and then passes that value back to the info component (handlePhoneNumber method) in order to show the selected value if user decides to go return to review information
  handlePhoneNumber(e) {
    this.setState({
      phoneNumber: e
    });
    this.props.handlePhoneNumber(e);
  }

  render() {
    const { classes } = this.props;
    //Validation requirements in order to enable the 'Next' button
    const buttonEnabled =
      this.props.email.length > 0 &&
      this.props.email.includes("@") &&
      this.props.fullName.length > 0 &&
      this.state.phoneNumber.length > 15;

    return (
      <div>
        <p className="welcome">Welcome to Home.</p>
        <p className="register">Please register below.</p>
        <div className={classes.formDiv}>
          {/* Shows registration progress */}
          <div className={classes.currentStep}>
            Step {this.props.currentStep} of 3
          </div>
          <form className={classes.container} autoComplete="on">
            <TextField
              required
              label="Full Name"
              className={classes.textField}
              defaultValue={this.props.fullName}
              onChange={this.props.handleInput("fullName")}
            />

            <TextField
              required
              label="Email"
              className={classes.textField}
              defaultValue={this.props.email}
              onChange={this.props.handleInput("email")}
            />

            <MuiPhoneNumber
              defaultCountry={"de"}
              className={classes.textField}
              value={this.state.phoneNumber}
              onChange={this.handlePhoneNumber}
            />

            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.props.nextStep}
              disabled={!buttonEnabled}
            >
              Next Step
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(infoStyles)(Personal);
