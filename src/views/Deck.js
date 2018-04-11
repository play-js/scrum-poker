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

const styles = theme => ({
  root: {
    "&:hover": {
      background: "pink",
      transition: "1s",
      transform: "rotateY(90deg)"
    }
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

  render() {
    const { classes } = this.props;
    const { unit } = this;

    return (
      <Grid container className={classes.root} spacing={16}>
        {this.valueList.map((value, index) => (
          <PokerCard key={value} value={value} transitionDelay={unit * index} />
        ))}
        {/* <ZoomedCard in={true} /> */}
      </Grid>
    );
  }
}

export default withStyles(styles)(Deck);
