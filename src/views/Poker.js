// React
import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import LocalCafe from "material-ui-icons/LocalCafe";
// Custom
import { PokerCard } from "components";
// Others

const styles = theme => ({});

class Poker extends React.Component {
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
