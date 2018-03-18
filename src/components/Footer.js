import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import Typography from 'material-ui/Typography';
import { SocialIcon } from 'react-social-icons';

export default function Footer(props){
    return (
        <div>
            <Row className="show-grid">
                            <Col mdOffset={4} md={1}>
                                <SocialIcon 
                                    network="twitter"
                                    color="white"
                                    />
                            </Col>
                            <Col md={1}>
                                <SocialIcon 
                                        network="facebook" 
                                        color="white"
                                        />
                            </Col>
                            <Col md={1}>
                                <SocialIcon 
                                        network="linkedin" 
                                        color="white"
                                        />
                            </Col>
                            <Col md={1}>
                                <SocialIcon 
                                        network="pinterest" 
                                        color="white"
                                        />
                            </Col>
                            <Col md={1}>
                                <SocialIcon 
                                        network="instagram" 
                                        color="white"
                                        />
                            </Col>
                        </Row>
                        <br/>
                    <Row>
                        <Col mdOffset={5} md={5}>
                        <Typography variant="title" component="p" style={{fontSize: '1em', color: 'white'}} >
                            © 2018 Copyright: EchTrade Pvt Ltd
                        </Typography>
                        </Col>
                    </Row>
                </div>
    );
}
