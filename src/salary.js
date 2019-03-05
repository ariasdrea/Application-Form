import React, { Component } from "react";
import {
  withStyles,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-around"
  },
  formDiv: {
    border: "1.5px solid grey",
    paddingTop: 20,
    paddingBottom: 30,
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.3)"
  },
  formControl: {
    margin: 20
  },
  currentStep: {
    textAlign: "center",
    marginTop: 20,
    opacity: 0.6,
    fontSize: 17
  },
  button: {
    display: "block",
    fontWeight: "lighter",
    width: 200,
    marginBottom: 20,
    marginLeft: 100
  }
});

class Salary extends Component {
  constructor(props) {
    console.log("props in SALARY:", props);
    super(props);
    this.state = {
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    this.props.handleChange(e);
  }

  render() {
    const { classes } = this.props;
    const buttonEnabled = this.props.value.length > 0;

    return (
      <div>
        <p className="welcome">Welcome to Home.</p>
        <p className="register">Please register below.</p>
        <div className={(classes.root, classes.formDiv)}>
          <div className={classes.currentStep}>
            Step {this.props.currentStep} of 3
          </div>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Select Your Salary Range</FormLabel>

            <br />

            <RadioGroup
              onChange={this.props.handleChange}
              defaultValue={this.state.value}
            >
              <FormControlLabel
                control={<Radio />}
                value="0 - 1.000"
                label="0 - 1.000"
              />

              <FormControlLabel
                control={<Radio />}
                value="1.000 - 2.000"
                label="1.000 - 2.000"
              />

              <FormControlLabel
                control={<Radio />}
                value="2.000 - 3.000"
                label="2.000 - 3.000"
              />

              <FormControlLabel
                control={<Radio />}
                value="3.000 - 4.000"
                label="3.000 - 4.000"
                id="4"
              />

              <FormControlLabel
                control={<Radio />}
                value="mehr als 4.000"
                label="mehr als 4.000"
                id="5"
              />
            </RadioGroup>
          </FormControl>

          <div>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.props.nextStep}
              disabled={!buttonEnabled}
            >
              Next Step
            </Button>

            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.props.prevStep}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Salary);
