import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiPhoneNumber from "material-ui-phone-number";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    border: "0.5px solid grey",
    width: "20%",
    paddingBottom: 50,
    marginLeft: 5
  },
  textField: {
    marginTop: 5
  },
  button: {
    marginTop: 30,
    width: 200,
    fontWeight: "lighter",
    marginBottom: -20
  }
});

class Info extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      fullName: "",
      email: "",
      phoneNumber: "",
      showButton: true
    };
    this.showButton = this.showButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showButton(e) {
    //step = 1 indicates we're on the 1st step and therefore, a back button is not needed
    if (this.state.step === 1) {
      this.setState({
        showButton: false
      });
    }
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // componentDidMount() {
  //   return this.showButton();
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.formDiv}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="standard-name"
            label="Full Name"
            className={classes.textField}
            defaultValue={this.state.fullName}
          />

          <TextField
            required
            id="standard-required"
            label="Email"
            className={classes.textField}
            defaultValue={this.state.email}
            onChange={this.handleChange}
          />

          <MuiPhoneNumber
            id="standard-dense"
            defaultCountry={"de"}
            className={classes.textField}
            defaultValue={this.state.phoneNumber}
            onChange={this.handleChange}
            margin="normal"
          />

          <Button variant="outlined" className={classes.button}>
            Next Step
          </Button>

          <Button variant="outlined" className={classes.button}>
            Go Back
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(infoStyles)(Info);
