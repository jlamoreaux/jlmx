import React from 'react';
import VizSensor from 'react-visibility-sensor';
import styled from 'styled-components';


const Tiny = styled.div`
  width: 0;
  height: 0;
  margin: 0;
`;

// let prevScrollpos = 0;
  
class VizAware extends React.Component {
  state = {
    isVizible: false,
  };

  isInViewport = (e) => {
    let currentScrollPos = window.pageYOffset;
    // if (prevScrollpos < currentScrollPos || prevScrollpos > currentScrollPos) {
    //   menu.style.top = "0";
    // } else {
    //   menu.style.top = "-52px";
    // }
    // prevScrollpos = currentScrollPos;
    console.log(currentScrollPos);
    console.log(e);
  }

  render() {
    return (
      <VizSensor
        // partialVisibility
        onChange={
          (isVisible) => {
            this.setState({ isVisible });
            console.log("i see you");
          }
        }
      >
        <Tiny className="visSensor"></Tiny>
      </VizSensor>
    );
  }
}

export default VizAware;
