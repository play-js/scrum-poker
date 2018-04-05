// React
import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Restaurant from "material-ui-icons/Restaurant";
// Custom
import { PokerCard } from "components";
// Others

const styles = theme => ({});

class Poker extends React.Component {
  valueList = [
    0,
    "1/2",
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
    <Restaurant />
  ];
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        {this.valueList.map(value => <PokerCard key={value} value={value} />)}
      </Grid>
    );
  }
}

export default withStyles(styles)(Poker);
