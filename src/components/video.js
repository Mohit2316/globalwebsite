import React, {Component} from 'react';
import shipVideo from '../assets/videos/ship.mp4';

class ShipVideo extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <video id="background-video" loop autoPlay width="100%">
                <source src={shipVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default ShipVideo;