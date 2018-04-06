// React
import React from "react";
// Material-UI
import { withStyles } from "material-ui/styles";
import Zoom from "material-ui/transitions/Zoom";

// Custom
// Others

const styles = theme => ({});

class ZoomedCard extends React.Component {
  state = {
    isZoomed: this.props.in
  };

  render() {
    const { isZoomed } = this.state;

    return (
      <Zoom
        in={isZoomed}
        ref={card => (this.card = card)}
        onClick={() => this.setState({ isZoomed: !this.state.isZoomed })}
      >
        <div style={{ position: "fixed", width: "100%", height: "100%" }}>
          ZoomedCard
        </div>
      </Zoom>
    );
  }
}

export default withStyles(styles)(ZoomedCard);
