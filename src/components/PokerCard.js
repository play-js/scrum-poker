// React
import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
// Custom
// Others

const styles = theme => ({
  card: {
    display: "flex",
    alignItems: "center",
    height: 150
  },
  typography: {
    flex: 1,
    textAlign: "center"
  }
});

class PokerCard extends React.Component {
  render() {
    const { classes, value } = this.props;

    return (
      <Grid item xs={3} sm={2}>
        <Card className={classes.card}>
          <Typography className={classes.typography} variant="display2">
            {value}
          </Typography>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(PokerCard);
