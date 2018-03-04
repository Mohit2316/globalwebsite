import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import ShipVideo from './video';
import homePageSideImage from '../assets/images/homesideimg.JPG';
import ServiceCard from './Services';
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
import WhyUsImg from '../assets/images/whyus.JPG'
import Divider from 'material-ui/Divider';
import StatBox from './Stats';
import StatsBgImage from '../assets/images/stats.JPG';
import ClientBox from './Client';
import GoogleMap from './GoogleMap';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ShipVideo/>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <img src={homePageSideImage} alt="Home Image" width="100%"/>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h2">
              Welcome To Echtrade
            </Typography>
            <Typography component="p">
            Do you wish to try the commodities, countries are famous for? Well, we are here- Echtrade to bridge the gap of million kilometres and make commodities available just a step ahead. We are a company for the export, import and distribution of essentials "to and from" different corners of the world, providing a wide range of services to our clients and dealers from more than 7 years, having 30+ National and International associates, dealers and clients reaching 5+ countries and growing... 
              We intend to provide the best of services throughout the years ahead and to accelerate ourselves to be one of the leading trading corporations, dealing in millions of metric tons of commodities all over the world.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <ServiceCard 
            title="Textile and textile Articles" 
            content="Echtrade tends to dispense a wide variety of ancient and modern textile that is intended to comfort the user with a sense of pleasure. The variety range of textile products is designed to outreach the boundaries and ease the user with style and class."
            media={TextileServiceImg}
            />
        </Grid>
        <Grid item xs={3}>
          <ServiceCard 
            title="Fabrics and yarns" 
            content="Echtrade has grown by leaps and bounds over the years. We have come a long way and now possesses one of the best collection of fabrics and yarns used to produce a wide range of utilities. Choose us to receive world class service in terms of effectiveness and efficiency. "
            media={FabricServiceImg}
            />
        </Grid>
        <Grid item xs={3}>
          <ServiceCard 
            title="Agriculture commodities" 
            content="Agriculture being the dominant sector in India’s economy, we import and export a wide range of commodities including cereals, special crops, pulses, oil seeds, poultry etc. Grace us with your involvement while nurturing the country’s economy in the agricultural sector, and let us be a part of your day-to-day life."
            media={AgricultureSvcImg}
            />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard 
            title="Spices commodities" 
            content="Help us tease your taste buds with dishes made of quality spices. We provide you with the special spices from the respective places from all over the world, and offer the people from other countries to taste ours. We ensure you timely and accurate delivery and all the essentials served at your doorstep."
            media={SpiceImg}
            />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard 
            title="Chemicals products" 
            content="We provide you the solution for your farming problems with world class fertilisers. Rely on us on the quality Pharmaceutical products and help us treat you with utmost care. We believe in sustainability while dealing with organic/inorganic chemicals. Your daily needs for household chemicals, is also something we vend with."
            media={ChemicalImg}
            />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard 
            title="Machinery and mechanical appliances" 
            content=" Make your daily life comfortable with our variety of Mechanical Appliances and machinery,     dealt by us. We care for your ease, therefore, strive to become the best option for the appliances that almost nullifies your effort for leading a comfortable life."
            media={MachineImg}
            />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard 
            title="Timber products" 
            content="We are the proud suppliers of high quality timber products, be it a luxury statement item, or an essential. From the forests of the mystic Himalayas, comes a variety of wooden wonders like maple, oak, pine, fir etc. to deliver you an incredible experience of contentment. Join us to boon yourself with environment friendly timber products. "
            media={TimberImg}
            />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard 
            title="Rubber products" 
            content="Rubber being strong, durable and incredibly versatile substance is used in daily as well as luxury items is one of our deliverables contributing to be attached to various products, completing it. The latex of rubber extracted of many trees, especially from the tropical trees of Kerala is capable to satisfy all the needs of domestic as well as industrial use. "
            media={RubberImg}
            />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard 
            title="Leather products" 
            content="Get your luxury cravings satisfied with highly durable and flexible leather material used to produce clothing items, upholstery purposes, bookbinding, furniture covering, wallpapers, show pieces, shoes etc. Leather is bestowed with special qualities that make it stand apart from a large variety of fabrics and synthetic materials which require the best craftsmanship and expertise. We are the traders of leather with high tensile strength and having high resistance to tear."
            media={LeatherImg}
            />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard 
            title="Handicraft" 
            content="Handicraft or Artisanal Handicraft is something that represents a country’s culture and tradition. We aspire to promote the heritage of countries through trading indigenous materials that preserves traditional knowledge and talents. Get yourself indulged in our effort to cover diversity and complexity of Handicraft industry."
            media={HandicreaftSvcImg}
            />
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{paddingLeft: '2vw', paddingTop: '2vh'}}>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="headline" component="h1">
            Why Choose Us?
          </Typography>
          <Typography component="p">
          <Icon style={{color: 'orange', fontSize: '40px'}}>sentiment_very_satisfied</Icon>100% satisfied customers
   Our strong sense of delivery with client projects means that we are constantly striving to provide solutions, even for issues our customers aren't yet aware of.  

   
          </Typography>
          <Divider/>
          <Typography component="p">
          <Icon style={{color: 'green', fontSize: '40px'}}>attach_money</Icon>Quality service, affordable price
   We offer the easiest and cheapest way of trading services all over the world. Do not miss a chance to reach to the better part of the world on pocket friendly prices. 
   
          </Typography>
          <Divider/>
          <Typography component="p">
          <Icon style={{color: 'green', fontSize: '40px'}}>public</Icon>
          Worldwide Trade
   Echrade is committed to helping its clients reach their goals, to personalising their product experiences, to providing a favourable environment, and making a difference. 
          </Typography>
          
        </Paper>
   
        </Grid>
        <Grid item xs={6}>
          <img src={WhyUsImg} />
        </Grid>
      </Grid>

      <Grid container spacing={0} style={{paddingLeft: '2vw', paddingTop: '2vh', height: '50vh', backgroundImage: `url(${StatsBgImage})`}}>
        <StatBox title="5+" content="Years of Experience"/>
        <StatBox title="45+" content="Commodities"/>
        <StatBox title="8+" content="Countries"/>
        <StatBox title="30+" content="Dealers"/>
      </Grid>

      <Grid container spacing={0} >
      <Grid item xs={6}>
          <ClientBox clientName="Elisha Atienzar" clientDesignation="Seattle, Washington" content="I’ve been happy with the services provided by Global Supreme Trade. All the members have been wonderful! They have returned my calls quickly, and answered all my questions! They have been very supportive. "/>
        </Grid>
        <Grid item xs={6}>
          <ClientBox clientName="Baptiste Tauzin" clientDesignation="Bordeaux, France" content="This is due to their excellent service, reasonable pricing and customer support. That’s becoming so distant and digital, it’s thoroughly refreshing to get such a personal touch. Every aspect of a deal with GST is taken care of with utmost care and precision. We are happy to work with them!"/>
        </Grid>
      </Grid>

      <Grid container spacing={0} >
        <Grid item xs={12}>
        <div style={{width: '100%', height: '400px'}}>
           <GoogleMap/>
           </div>
          </Grid>
        </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);