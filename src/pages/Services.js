import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';


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



import ServiceCard from '../components/ServiceDetail';

import Footer from '../components/Footer';
// local inline styles for all elements in home page
const style = {
    serviceGrid: {
        background: '#140b05',
        color: 'white',
        paddingTop: '10em',
        
    },
    footer: {
        height: 'auto',
        paddingTop: '4em',
        background: '#3f51b5',
        paddingBottom: '4em'
    }
}

class Services extends PureComponent {
    render(){
        return (
            <div>
                <Grid fluid={true} style={style.serviceGrid}>
                    <Row>
                        <Col md={4}>
                            <ServiceCard 
                                title="Textile and textile Articles" 
                                content="Echtrade tends to dispense a wide variety of ancient and modern textile that is intended to comfort the user with a sense of pleasure. The variety range of textile products is designed to outreach the boundaries and ease the user with style and class."
                                media={TextileServiceImg}
                            />
                        </Col>
                        <Col md={4}>
                            <ServiceCard 
                                title="Fabrics and yarns" 
                                content="Echtrade has grown by leaps and bounds over the years. We have come a long way and now possesses one of the best collection of fabrics and yarns used to produce a wide range of utilities. Choose us to receive world class service in terms of effectiveness and efficiency. "
                                media={FabricServiceImg}
                            />
                        </Col>
                        <Col md={4}>
                            <ServiceCard 
                                title="Agriculture commodities" 
                                content="Agriculture being the dominant sector in India’s economy, we import and export a wide range of commodities including cereals, special crops, pulses, oil seeds, poultry etc. Grace us with your involvement while nurturing the country’s economy in the agricultural sector, and let us be a part of your day-to-day life."
                                media={AgricultureSvcImg}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <ServiceCard 
                                title="Spices commodities" 
                                content="Help us tease your taste buds with dishes made of quality spices. We provide you with the special spices from the respective places from all over the world, and offer the people from other countries to taste ours. We ensure you timely and accurate delivery and all the essentials served at your doorstep."
                                media={SpiceImg}
                            />

                        </Col>

                        <Col md={4}>
                            <ServiceCard 
                                title="Chemicals products" 
                                content="We provide you the solution for your farming problems with world class fertilisers. Rely on us on the quality Pharmaceutical products and help us treat you with utmost care. We believe in sustainability while dealing with organic/inorganic chemicals. Your daily needs for household chemicals, is also something we vend with."
                                media={ChemicalImg}
                            />

                        </Col>

                        <Col md={4}>
                            <ServiceCard 
                                title="Machinery and mechanical appliances" 
                                content=" Make your daily life comfortable with our variety of Mechanical Appliances and machinery,     dealt by us. We care for your ease, therefore, strive to become the best option for the appliances that almost nullifies your effort for leading a comfortable life."
                                media={MachineImg}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <ServiceCard 
                                title="Timber products" 
                                content="We are the proud suppliers of high quality timber products, be it a luxury statement item, or an essential. From the forests of the mystic Himalayas, comes a variety of wooden wonders like maple, oak, pine, fir etc. to deliver you an incredible experience of contentment. Join us to boon yourself with environment friendly timber products. "
                                media={TimberImg}
                            />
                        </Col>

                        <Col md={4}>
                            <ServiceCard 
                                title="Rubber products" 
                                content="Rubber being strong, durable and incredibly versatile substance is used in daily as well as luxury items is one of our deliverables contributing to be attached to various products, completing it. The latex of rubber extracted of many trees, especially from the tropical trees of Kerala is capable to satisfy all the needs of domestic as well as industrial use. "
                                media={RubberImg}
                            />
                        </Col>

                        <Col md={4}>
                            <ServiceCard 
                                title="Leather products" 
                                content="Get your luxury cravings satisfied with highly durable and flexible leather material used to produce clothing items, upholstery purposes, bookbinding, furniture covering, wallpapers, show pieces, shoes etc. Leather is bestowed with special qualities that make it stand apart from a large variety of fabrics and synthetic materials which require the best craftsmanship and expertise. We are the traders of leather with high tensile strength and having high resistance to tear."
                                media={LeatherImg}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col mdOffset={4} md={4}>
                            <ServiceCard 
                                title="Handicraft" 
                                content="Handicraft or Artisanal Handicraft is something that represents a country’s culture and tradition. We aspire to promote the heritage of countries through trading indigenous materials that preserves traditional knowledge and talents. Get yourself indulged in our effort to cover diversity and complexity of Handicraft industry."
                                media={HandicreaftSvcImg}
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

export default Services;

