// React
import React from "react";
import ReactDOM from "react-dom";
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

export function getGoldenRatio(value, mode = "height") {
  let result = 0;

  if (mode === "height") {
    result = Math.floor(value * 16 / 9);
  } else {
    result = Math.floor(value * 9 / 16);
  }
  return parseInt(result, 10);
}

class PokerCard extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.card);
    const { width } = element.getBoundingClientRect();
    const height = getGoldenRatio(width);

    this.setState({ height });
    // window.addEventListener("resize", this.onResize(width));
  }

  onResize = width => {
    const height = getGoldenRatio(width);
    this.setState({ height });
  };

  render() {
    const { classes, value } = this.props;

    return (
      <Grid item xs={3} sm={2}>
        <div ref={card => (this.card = card)}>
          <Card className={classes.card} style={{ height: this.state.height }}>
            <Typography className={classes.typography} variant="display2">
              {value}
            </Typography>
          </Card>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(PokerCard);
