import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    display: "block",
    fontWeight: "lighter",
    width: 200,
    marginBottom: 20,
    marginLeft: 100
  }
});
class Summary extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.props.prevStep}
        >
          Go Back
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Summary);
