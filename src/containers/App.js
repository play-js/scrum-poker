import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Material-UI
import { withStyles } from "material-ui/styles";
// custom
import { Deck, ZoomedCard } from "views";
import * as ScrumPokerActionCreators from "actions";
// others
import classNames from "classnames";

const styles = theme => ({
  app: {
    height: "100%"
  },
  rotate: {
    transition: "1s",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)"
  }
});

class App extends React.Component {
  render() {
    const { classes, deck, actions } = this.props;

    return (
      <div className={classes.app}>
        <Deck
          className={classNames(classes.rotate, {
            [classes.rotate]: deck.isRotatedDeck
          })}
          {...actions}
          {...deck}
        />
        <ZoomedCard
          className={classNames(classes.rotate, {
            [classes.rotate]: !deck.isRotatedDeck
          })}
          {...actions}
          {...deck}
        />
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
