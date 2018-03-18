import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 28.638962, lng: 77.184703},
    zoom: 11,
    isMarkerShown: true
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCzCjSVLT5chK5er2Iu5Go7ZqW0A3lu-Ws' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {this.props.isMarkerShown && <Marker position={{lat: 28.638962, lng: 77.184703}} />}
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;