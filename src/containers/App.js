import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Material-UI
import { withStyles } from "material-ui/styles";
// custom
import { Deck } from "views";
import * as ScrumPokerActionCreators from "actions";

const styles = theme => ({
  app: {
    height: "100%"
  }
});

class App extends React.Component {
  render() {
    const { classes, deck, actions } = this.props;
    // const { isRotated } = this.props.;

    return (
      <div className={classes.app}>
        <Deck {...deck} {...actions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { deck } = state;

  return {
    deck
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ScrumPokerActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(App)
);
