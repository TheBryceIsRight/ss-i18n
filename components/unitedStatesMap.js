import { Component } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import RoomIcon from '@material-ui/icons/Room';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles'
import BuildIcon from '@material-ui/icons/Build';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class UnitedStatesMap extends Component {

  state = {
    viewport: {
      width: '100%',
      height: '50vh',
      latitude: 40.776,
      longitude: -74.022,
      zoom: 10.33
    },
    userLocation: {},
    wifiHotspots: [], 
    selectedHotspot: null
  };

  componentDidMount() {
    this.fetchStationAPI();
  }
  
  fetchStationAPI = () => {
    fetch("https://data.cityofnewyork.us/resource/yjub-udmw.json")
    .then(res => res.json())
    .then(hotspots => {
       let freeWifi = this.filterFreeWifi(hotspots);
       this.setState({
         wifiHotspots: freeWifi
        });
    });
  };

  filterFreeWifi = hotspots => {
    return hotspots.filter(spot => {
        return spot.type === "Free";
     });
  };

  setSelectedHotspot = object => {
    this.setState({
       selectedHotspot: object
    });
  };

  closePopup = () => {
    this.setState({
      selectedHotspot: null
    }); 
  };

  loadWifiMarkers = () => {
    return this.state.wifiHotspots.map(spot => {
      return (
        <Marker
          key = {spot.objectId}
          latitude = {parseFloat(spot.latitude)}
          longitude = {parseFloat(spot.longitude)}
        >
          <img
            onClick = {() => {
              this.setSelectedHotspot(spot)
            }}
            src = '/images/marker.svg'
            alt = 'map marker'
          
          />
        </Marker>
      )      
    }) 
  }

  render() {

    return (
      <div className="App">
        <div className='map'>

        <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/btwats1/ckc0kbb0k52yr1ik8wrwqck3n"
          mapboxApiAccessToken="pk.eyJ1IjoiYnR3YXRzMSIsImEiOiJja2JqZ2FmMTIwb3B5MnltOG9jdTc1azluIn0.fmKr60Z3gIA69vZN4a0omA"
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
        >
          {Object.keys(this.state.userLocation).length !== 0 ? (
            <Marker
              latitude = {this.state.userLocation.lat}
              longitudde = {this.state.userLocation.long}
            >
            <img className='location-icon' src='/images/marker.svg'/>
            </Marker>
          ) : (
            <div></div>
          )}
          {this.loadWifiMarkers()}
          {this.state.selectedHotspot !== null ? (
            <Popup
              latitude={parseFloat(this.state.selectedHotspot.latitude)}
              longitude={parseFloat(this.state.selectedHotspot.longitude)}
              onClose={this.closePopup}
            >
               <div>
                <Typography variant='h5'>United States</Typography>
                <List component="nav" aria-label="united states systems" dense={true}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="System 1" secondary='Nominal' />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BuildIcon/>
                    </ListItemIcon>
                    <ListItemText primary="System 2" secondary='Under maintenance' />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ErrorIcon/>
                    </ListItemIcon>
                    <ListItemText primary="System 3" secondary='Experiencing a service disruption' />
                  </ListItem>
                </List>
              </div>
            </Popup>
            ) : null}  
        </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default UnitedStatesMap;