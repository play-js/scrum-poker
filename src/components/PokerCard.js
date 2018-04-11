// React
import React from "react";
import ReactDOM from "react-dom";
// Material-UI
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grow from "material-ui/transitions/Grow";
// Custom
// Others

const styles = theme => ({
  card: {
    // flex: 1,
    display: "flex",
    alignItems: "center"
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

export function getPokerCardRatio(value, mode = "height") {
  let result;

  if (mode === "height") {
    result = value * 1.4;
  } else {
    result = value / 1.4;
  }

  return result.toFixed();
}

// export function ratioCalculator(value, mode = "golden") {}

class PokerCard extends React.Component {
  state = {
    width: null,
    height: null,
    grow: false
  };
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.card);
    const { width } = element.getBoundingClientRect();
    const height = parseInt(getPokerCardRatio(width), 10);
    const newWidth = parseInt(getPokerCardRatio(height, "width"), 10);

    this.setState({ width: newWidth, height, grow: true });
    // window.addEventListener("resize", this.onResize(width));
  }

  // onResize = width => {
  //   const height = getGoldenRatio(width);
  //   this.setState({ height });
  // };

  handleClick = () => {
    this.props.onRequestClick();
    // alert(this.props.value);
  };

  render() {
    const { classes, value, transitionDelay } = this.props;
    const { grow, raised, width, height } = this.state;
    const { handleClick } = this;

    return (
      <Grow
        in={grow}
        ref={card => (this.card = card)}
        style={{ transitionDelay }}
        {...{ timeout: 1000 }}
      >
        <Card
          className={classes.card}
          raised={raised}
          style={{ width, height }}
          onMouseEnter={() => this.setState({ raised: true })}
          onMouseLeave={() => this.setState({ raised: false })}
          onClick={handleClick}
        >
          <Typography className={classes.typography} variant="display1">
            {value}
          </Typography>
        </Card>
      </Grow>
    );
  }
}

export default withStyles(styles)(PokerCard);
