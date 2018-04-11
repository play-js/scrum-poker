// React
import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import LocalCafe from "material-ui-icons/LocalCafe";
// Custom
// import { PokerCard, ZoomedCard } from "components";
import { PokerCard } from "components";
// Others
import classNames from "classnames";

const styles = theme => ({
  root: {
    height: "100%",
    padding: theme.spacing.unit * 2
  },
  gridItem: {
    display: "flex",
    alignItems: "stretch"
  },
  rotate: {
    transition: "1s",
    transform: "rotateY(90deg)"
  }
});

class Deck extends React.Component {
  valueList = [
    0,
    0.5,
    1,
    2,
    3,
    5,
    8,
    13,
    20,
    40,
    100,
    "∞",
    "?",
    <LocalCafe style={{ fontSize: 48 }} />
  ];
  delay = 1000;
  unit = parseInt(this.delay / this.valueList.length, 10);

  handleRequestClick = value => () => {
    const { rotateDeck, setCardValue, rotateCard } = this.props;

    rotateDeck(true);
    setCardValue(value);
    rotateCard(true);
  };

  render() {
    const { classes, isRotated } = this.props;
    const { unit, handleRequestClick } = this;

    return (
      <Grid
        container
        className={classNames(classes.root, { [classes.rotate]: isRotated })}
        spacing={16}
      >
        {this.valueList.map((value, index) => (
          <Grid
            item
            xs={3}
            sm={2}
            xl={1}
            key={value}
            // className={classes.gridItem}
          >
            <PokerCard
              value={value}
              transitionDelay={unit * index}
              onRequestClick={handleRequestClick(value)}
            />
          </Grid>
        ))}
        {/* <ZoomedCard in={true} /> */}
      </Grid>
    );
  }
}

export default withStyles(styles)(Deck);
