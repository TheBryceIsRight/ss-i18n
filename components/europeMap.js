import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class EuropeMap extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '50vh',
      latitude: 57.096,
      longitude: 19.202,
      zoom: 2.2
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/btwats1/ckc0lk8jw0jst1jq6k5egt7te"
        mapboxApiAccessToken="pk.eyJ1IjoiYnR3YXRzMSIsImEiOiJja2JqZ2FmMTIwb3B5MnltOG9jdTc1azluIn0.fmKr60Z3gIA69vZN4a0omA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default EuropeMap;