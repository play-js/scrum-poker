import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";
// custom
import { Deck } from "views";

const styles = theme => ({
  app: {
    height: "100%"
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Deck />
      </div>
    );
  }
}

export default withStyles(styles)(App);
