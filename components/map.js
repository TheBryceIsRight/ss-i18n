import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '50vh',
      latitude: 43.917,
      longitude: -42.104,
      zoom: 1.5
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/btwats1/ckbjmj6hu12kb1iqkzjutqtqt"
        mapboxApiAccessToken="pk.eyJ1IjoiYnR3YXRzMSIsImEiOiJja2JqZ2FmMTIwb3B5MnltOG9jdTc1azluIn0.fmKr60Z3gIA69vZN4a0omA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;