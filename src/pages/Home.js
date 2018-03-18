import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';



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

import WhyUsImg from '../assets/images/whyus.JPG';
import StatsBgImage from '../assets/images/statistics_2.jpeg';

import ClientBox from '../components/Client';
import StatBox from '../components/Stats';
import ServiceCard from '../components/Services';
import GoogleMap from '../components/GoogleMapV1';
import Footer from '../components/Footer';
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
    },
    letUsHelp: {
        backgroundImage: 'url(https://template59467.motopreview.com/mt-demo/59400/59467/mt-content/uploads/2017/04/mt-0933-content-bg02.jpg)',
        minHeight: '20em',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
        color: 'white',
        padding: '2em',
    },
    whyChooseUs: {
        paddingBottom: '2em',
        paddingTop: '5em',
        background: 'white'
    },
    statsBox: {
        backgroundImage: `url(${StatsBgImage})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
        minHeight: '30em',
        padding: '5em'
    },
    clientsSection: {
        paddingBottom: '4em'
    },
    googleMap: {
        height: 'auto',
        paddingLeft: '0',
        paddingRight: '0',
        paddingTop: '1em'
    },
    footer: {
        height: 'auto',
        paddingTop: '4em',
        background: '#3f51b5',
        paddingBottom: '4em'
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
                                <Link to="/services">All Services</Link>
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
                                title="Fabrics and yarns" 
                                content="Echtrade has grown by leaps and bounds over the years. We have come a long way and now possesses one of the best collection of fabrics and yarns used to produce a wide range of utilities. Choose us to receive world class service in terms of effectiveness and efficiency. "
                                media={FabricServiceImg}
                                />
                        </Col>

                        <Col md={2} sm={12}>
                        <ServiceCard 
                            title="Agriculture commodities" 
                            content="Agriculture being the dominant sector in India’s economy, we import and export a wide range of commodities including cereals, special crops, pulses, oil seeds, poultry etc. Grace us with your involvement while nurturing the country’s economy in the agricultural sector, and let us be a part of your day-to-day life."
                            media={AgricultureSvcImg}
                        />
                        </Col>

                    </Row>

                    
                </Grid>
                {/* Grid Section 3 end */}
                <Grid fluid={true}>
                    <Row className="show-grid" style={style.whyChooseUs}>
                        <Col mdOffset={2} md={4}>
                        <Typography variant="headline" component="h1" style={{fontSize: '3em', paddingBottom: '1em'}}>
                            Why Choose Us?
                        </Typography>
                        <Divider/>
                        <Typography component="p" style={{fontSize: '1.2em', paddingTop: '2em'}}>
                        <Icon style={{color: 'orange', fontSize: '40px'}}>sentiment_very_satisfied</Icon>100% satisfied customers
                Our strong sense of delivery with client projects means that we are constantly striving to provide solutions, even for issues our customers aren't yet aware of.
                        </Typography>
                        
                        <Typography component="p" style={{fontSize: '1.2em', paddingTop: '2em'}}>
                        <Icon style={{color: 'green', fontSize: '40px'}}>attach_money</Icon>Quality service, affordable price
                We offer the easiest and cheapest way of trading services all over the world. Do not miss a chance to reach to the better part of the world on pocket friendly prices. 
                
                        </Typography>
                        
                        <Typography component="p" style={{fontSize: '1.2em', paddingTop: '2em'}}>
                        <Icon style={{color: 'green', fontSize: '40px'}}>public</Icon>
                        Worldwide Trade
                Echrade is committed to helping its clients reach their goals, to personalising their product experiences, to providing a favourable environment, and making a difference. 
                        </Typography>
                        </Col>
                        <Col mdOffset={1} md={5}>
                        <Image  
                                src={WhyUsImg} 
                                alt="Why Choose Us"
                                responsive/>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid={true}>
                    <Row className="show-grid" style={style.statsBox}>
                        <Col mdOffset={1} md={2}>
                            <StatBox 
                                title="5+" 
                                content="Years of Experience"/>
                            
                        </Col>
                        
                        <Col md={3}>
                            
                            <StatBox 
                                title="45+" 
                                content="Commodities"/>
                            
                        </Col>
                        <Col md={3}>
                            
                            <StatBox 
                                title="8+" 
                                content="Countries"/>
                            
                        </Col>
                        <Col md={3}>
                            <StatBox 
                                title="30+" 
                                content="Dealers"/>
                        </Col>
                    </Row>
                </Grid>

                <Grid fluid={true} style={style.clientsSection}>
                <Row className="show-grid">
                    <Col mdOffset={4}>
                        <Typography variant="title" component="h1" style={{fontWeight: 'bold', padding: '1em', fontSize: '4em'}} color="inherit">
                            What Our Client Say
                        </Typography>
                    </Col>
                </Row>
                    <Row className="show-grid">
                    <Col mdOffset={1} md={5}>
                        <ClientBox 
                            clientName="Elisha Atienzar" 
                            clientDesignation="Seattle, Washington" 
                            content="I’ve been happy with the services provided by Global Supreme Trade. All the members have been wonderful! They have returned my calls quickly, and answered all my questions! They have been very supportive. "/>
                    </Col>
                    <Col md={5}>
                        <ClientBox 
                            clientName="Baptiste Tauzin" 
                            clientDesignation="Bordeaux, France" 
                            content="This is due to their excellent service, reasonable pricing and customer support. That’s becoming so distant and digital, it’s thoroughly refreshing to get such a personal touch. Every aspect of a deal with GST is taken care of with utmost care and precision. We are happy to work with them!"/>
                    </Col>
                    </Row>
                </Grid>
                <Grid fluid={true} style={style.letUsHelp}>
                    <Row className="show-grid">
                    <Col mdOffset={6} md={6}>
                    <Typography variant="title" component="h1" style={{fontWeight: 'bold', padding: '1em', fontSize: '4em'}} color="inherit">
                        Let Us Help You Find
                        a Solution That Meets Your Needs
                    </Typography>
                    <Typography variant="title" component="p" style={{fontSize: '1.5em'}} color="inherit">
                        At Echtrade, we have a team of extremely talented and dedicated professionals who have made it possible to bring off the position, where we are today. Our broad-minded management believes in accomplishing organisational as well as individual goals, conjointly.
                    </Typography>
                    <br/>
                    <Button variant="raised" color="primary">
                               <a href="mailto:hello@echtrade.com">
                                    Contact Us
                                </a>
                    </Button>
                    </Col>
                    </Row>
                </Grid>
                {/* Grid Section 3 end */}
                <Grid fluid={true} style={style.googleMap}>
                    <Row className="show-grid">
                        
                        <Col sm={12} >
                        
                            <GoogleMap 
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }}/>}
                                containerElement={<div style={{ height: `400px` }}/>}
                                mapElement={<div style={{ height: `100%` }}/>}
                            />
                        
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid={true} style={style.footer}>
                    <Footer/>
                </Grid>
            </div>
        )
    }
}

export default HomePage;

