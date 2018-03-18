import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Image } from 'react-bootstrap';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


import Footer from '../components/Footer';
// local inline styles for all elements in home page
const style = {
    formLayout: {
        paddingTop: '10em'
    },
    footer: {
        height: 'auto',
        paddingTop: '4em',
        background: '#3f51b5',
        paddingBottom: '4em'
    }
}

class ContactUs extends PureComponent {
    render(){
        return (
            <div>
                <Grid fluid={true} style={style.formLayout}>
                    <TextField 
                        id="email" 
                        type="email" 
                    />;
                </Grid>
                <Grid fluid={true} style={style.footer}>
                    <Footer/>
                </Grid>
            </div>
        )
    }
}

export default ContactUs;

