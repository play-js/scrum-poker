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
    const { classes, deck, card, actions } = this.props;

    return (
      <div className={classes.app}>
        <Deck {...actions} {...deck} {...card} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { deck, card } = state;

  return {
    deck,
    card
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ScrumPokerActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(App)
);
