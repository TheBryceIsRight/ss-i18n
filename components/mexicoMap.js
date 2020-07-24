import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class MexicoMap extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '50vh',
      latitude: 24.132,
      longitude: -102.182,
      zoom: 3.5
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/btwats1/ckc0kwa7t0j5h1jq608vpqcjm"
        mapboxApiAccessToken="pk.eyJ1IjoiYnR3YXRzMSIsImEiOiJja2JqZ2FmMTIwb3B5MnltOG9jdTc1azluIn0.fmKr60Z3gIA69vZN4a0omA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default MexicoMap;