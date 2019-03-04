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
    width: "25%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    textAlign: "center",
    fontSize: 15
  },
  title: {
    margin: 10,
    fontSize: 16,
    opacity: 0.7
  },
  button: {
    display: "block",
    fontWeight: "lighter",
    width: 200,
    marginBottom: 20,
    marginLeft: 80
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
      <div className={(classes.root, classes.formDiv)}>
        Confirm Your Information Below
        <div className={classes.demo}>
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
    );
  }
}

export default withStyles(styles)(Summary);
