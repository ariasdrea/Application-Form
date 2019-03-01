import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-around"
  },
  formDiv: {
    border: "0.5px solid grey",
    width: "25%",
    paddingTop: 20,
    paddingBottom: 30,
    textAlign: "center"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  currentStep: {
    textAlign: "center",
    marginTop: 5,
    opacity: 0.5,
    fontSize: 15
  },
  button: {
    display: "block",
    fontWeight: "lighter",
    width: 200,
    marginBottom: 20,
    marginLeft: 100
  }
});

class Salary extends React.Component {
  state = {};

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={(classes.root, classes.formDiv)}>
        <div className={classes.currentStep}>
          Step {this.props.currentStep} of 3
        </div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select Your Salary Range</FormLabel>

          <br />

          <RadioGroup onChange={this.handleChange}>
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
            />

            <FormControlLabel
              control={<Radio />}
              value="mehr als 4.000"
              label="mehr als 4.000"
            />
          </RadioGroup>
        </FormControl>

        <div>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.props.nextStep}
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
    );
  }
}

export default withStyles(styles)(Salary);
