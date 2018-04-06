// React
import React from "react";
import ReactDOM from "react-dom";
// Material-UI
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Grow from "material-ui/transitions/Grow";
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
    height: null,
    grow: false
  };
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.card);
    const { width } = element.getBoundingClientRect();
    const height = getGoldenRatio(width);

    this.setState({ height, grow: true });
    // window.addEventListener("resize", this.onResize(width));
  }

  onResize = width => {
    const height = getGoldenRatio(width);
    this.setState({ height });
  };

  render() {
    const { classes, value, transitionDelay } = this.props;
    const { grow, raised, height } = this.state;

    return (
      <Grid item xs={3} sm={2} xl={1}>
        <Grow
          in={grow}
          ref={card => (this.card = card)}
          style={{ transitionDelay }}
          {...{ timeout: 1000 }}
        >
          <Card
            className={classes.card}
            raised={raised}
            style={{ height: height }}
            onMouseEnter={() => this.setState({ raised: true })}
            onMouseLeave={() => this.setState({ raised: false })}
          >
            <Typography className={classes.typography} variant="display2">
              {value}
            </Typography>
          </Card>
        </Grow>
      </Grid>
    );
  }
}

export default withStyles(styles)(PokerCard);
