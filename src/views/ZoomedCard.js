// React
import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";

// Custom
// Others
import classNames from "classnames";

const styles = theme => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "pink",
    backfaceVisibility: "hidden"
    // display: "none"
  }
  // rotate: {
  //   transition: "1s",
  //   backfaceVisibility: "visible",
  //   // display: "block",
  //   // transitionDelay: "1s",
  //   transform: "rotateY(-180deg)"
  // }
});

class ZoomedCard extends React.Component {
  handleClick = () => {
    const { isRotatedDeck, rotateDeck } = this.props;

    rotateDeck(!isRotatedDeck);
  };
  render() {
    const { classes, isRotatedDeck } = this.props;
    const { handleClick } = this;

    return (
      <div
        className={classNames(classes.root, {
          [classes.rotate]: !isRotatedDeck
        })}
        onClick={handleClick}
      >
        ZoomedCard
      </div>
    );
  }
}

export default withStyles(styles)(ZoomedCard);
