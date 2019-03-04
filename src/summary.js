import React, { Component } from "react";
import {
  withStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button
} from "@material-ui/core";
import {
  PersonOutline,
  AlternateEmail,
  LocalPhone,
  AttachMoney
} from "@material-ui/icons";

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
    paddingTop: 30,
    paddingBottom: 40,
    paddingLeft: 45,
    textAlign: "center",
    fontSize: 15,
    background: "rgba(255, 255, 255, 0.4)"
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    opacity: 0.7
  },
  button: {
    display: "block",
    fontWeight: "lighter",
    width: 200,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 60
  },
  list: {
    marginTop: 20
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
        <p className="welcome">Welcome to Home.</p>
        <p className="register">Please register below.</p>
        <div className={(classes.root, classes.formDiv)}>
          <p className="confirm">Confirm Your Information Below </p>
          <div className={classes.list}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonOutline />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={this.props.fullName} />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AlternateEmail />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={this.props.email} />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalPhone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={this.props.phoneNumber} />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AttachMoney />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={this.props.value} />
              </ListItem>
            </List>

            <div>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={this.props.nextStep}
              >
                Confirm
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
      </div>
    );
  }
}

export default withStyles(styles)(Summary);
