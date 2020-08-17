import React from 'react';
import { ReactSVG } from "react-svg";

class SVG extends React.Component {
    render() {
        const svg = require(`../svg/${this.props.fileName}.svg`);
        return (
          <ReactSVG
            src={svg}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
            }}
          />
        );
    }
}
export default SVG;