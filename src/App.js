import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";
// custom
import { Deck } from "views";

const styles = theme => ({
  App: {
    height: "100%"
  }
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Deck />
      </div>
    );
  }
}

export default withStyles(styles)(App);
