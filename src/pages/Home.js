import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Image } from 'react-bootstrap';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import shipVideo from '../assets/videos/ship.mp4';
import homePageSideImage from '../assets/images/homesideimg.JPG';
import TextileServiceImg from '../assets/images/textiles/1.jpeg';
import FabricServiceImg from '../assets/images/fabric/1.jpg';
import AgricultureSvcImg from '../assets/images/agriculture/1.jpeg';
import LeatherImg from '../assets/images/leather/1.jpeg';
import MachineImg from '../assets/images/machine/1.jpeg';
import RubberImg from '../assets/images/rubber/1.jpeg';
import SpiceImg from '../assets/images/spices/1.jpg';
import TimberImg from '../assets/images/timber/1.jpeg';
import ChemicalImg from '../assets/images/chemical/1.jpeg';
import HandicreaftSvcImg from '../assets/images/handicraft/1.jpg';

import ServiceCard from '../components/Services';
// local inline styles for all elements in home page
const style = {
    outerGrid: {
        // position: 'relative',
        // top: '10em',
    },
    leftSideBox: {
        padding: '2em'
    },
    leftSideImg: {
        boxShadow: '10px 10px 5px grey'
    },
    serviceGrid: {
        background: '#140b05',
        color: 'white',
    }
}

class HomePage extends PureComponent {
    render(){
        return (
            <div>
                {/* Grid Section 1 start */}
                <Grid fluid={true} style={style.outerGrid}>
                    <Row className="show-grid">
                    <video id="background-video" loop autoPlay width="100%">
                        {<source src={shipVideo} type="video/mp4" /> }
                        Your browser does not support the video tag.
                    </video> 
                    </Row>
                </Grid>
                {/* Grid Section 1 end */}
                {/* Grid Section 2 start */}
                <Grid fluid={true} style={style.outerGrid}>
                    <Row className="show-grid" style={style.leftSideBox}>
                        <Col md={5} sm={12}>
                            <Image  
                                src={homePageSideImage} 
                                alt="Welcome To Echtrade"
                                style={style.leftSideImg}
                                responsive/>
                        </Col>
                        <Col md={7} sm={12}>
                            <Typography variant="title" component="h1" style={{fontWeight: 'bold', padding: '1em', fontSize: '2.5em'}} color="inherit">
                                Welcome To Echtrade
                            </Typography>
                            <Typography variant="title" component="p" style={{fontSize: '1.5em'}} color="inherit">
                                Do you wish to try the commodities, countries are famous for? 
                            </Typography>
                            <Typography component="p" style={{fontSize: '1em', padding: '2vw'}}>
                            Well, we are here- Echtrade to bridge the gap of million kilometres and make commodities available just a step ahead. We are a company for the export, import and distribution of essentials "to and from" different corners of the world, providing a wide range of services to our clients and dealers from more than 7 years, having 30+ National and International associates, dealers and clients reaching 5+ countries and growing... 
                                We intend to provide the best of services throughout the years ahead and to accelerate ourselves to be one of the leading trading corporations, dealing in millions of metric tons of commodities all over the world.
                            </Typography>
                        </Col>
                    </Row>
                </Grid>
                {/* Grid Section 2 end */}
                <Grid fluid={true} style={style.serviceGrid}>
                    <Row className="show-grid" style={style.leftSideBox}>
                        <Col mdOffset={1} md={4} sm={12}>
                        <Typography variant="title" component="h1" style={{fontWeight: 'bold', padding: '1em', fontSize: '2.5em'}} color="inherit">
                                Special Services
                            </Typography>
                            <Typography variant="title" component="p" style={{fontSize: '1.5em'}} color="inherit">
                            We are here to confer across-the-board world class services, meeting the needs of our valuable clients and the end users. We have a team of excellent performers, well-rounded professionals and a bunch of dedicated folk to provide the following services to our 30+ National and International associates, dealers and clients reaching 5+ countries:
                            Export vast array of home textile to various countries
                            Import commodities from various countries           
                            Marketing agency for foreign manufacturers
                            Scope of business in India of specific foreign products about quality, quantity and price
                            Skilfulness in service oriented business.
                            </Typography>
                            <br/>
                            <Button variant="raised" color="primary">
                                All Services
                            </Button>
                        </Col>
                        <Col md={2} sm={12}>
                            <ServiceCard 
                                    title="Textile and textile Articles" 
                                    content="Echtrade tends to dispense a wide variety of ancient and modern textile that is intended to comfort the user with a sense of pleasure. The variety range of textile products is designed to outreach the boundaries and ease the user with style and class."
                                    media={TextileServiceImg}
                            />
                        </Col>

                        <Col md={2} sm={12}>
                            <ServiceCard 
                                    title="Textile and textile Articles" 
                                    content="Echtrade tends to dispense a wide variety of ancient and modern textile that is intended to comfort the user with a sense of pleasure. The variety range of textile products is designed to outreach the boundaries and ease the user with style and class."
                                    media={TextileServiceImg}
                            />
                        </Col>

                        <Col md={2} sm={12}>
                            <ServiceCard 
                                    title="Textile and textile Articles" 
                                    content="Echtrade tends to dispense a wide variety of ancient and modern textile that is intended to comfort the user with a sense of pleasure. The variety range of textile products is designed to outreach the boundaries and ease the user with style and class."
                                    media={TextileServiceImg}
                            />
                        </Col>

                    </Row>

                    
                </Grid>
                {/* Grid Section 3 end */}
            </div>
        )
    }
}

export default HomePage;

