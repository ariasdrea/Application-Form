import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {
  PersonOutline,
  AlternateEmail,
  LocalPhone,
  AttachMoney
} from "@material-ui/icons";
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
    paddingBottom: 20,
    paddingLeft: 50,
    textAlign: "center"
  },
  title: {
    margin: 10,
    fontSize: 20
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
        <Typography variant="h6" className={classes.title}>
          Confirm Your Information Below
        </Typography>
        <div className={classes.demo}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonOutline />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary={this.props.fullName} />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmail />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary={this.props.email} />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary={this.props.phoneNumber} />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AttachMoney />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary={this.props.value} />
            </ListItem>
          </List>

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
      </div>
    );
  }
}

export default withStyles(styles)(Summary);
