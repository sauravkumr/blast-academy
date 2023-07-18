import React from 'react';
import Classes from '../components/sections/Classes';
import Roadmap from '../components/sections/Roadmap';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import Button from '../components/elements/Button';
import SectionHeader from '../components/sections/partials/SectionHeader';
// import BLAST from '../../src/assets/images/BLAST AI Curriculum Schedule'
import ApplicationTimeline from '../components/sections/ApplicationTimeline';
import BootcampSplit from '../components/sections/BootcampSplit';
import FeaturesTabs from '../components/sections/FeaturesTabs';


class Home extends React.Component {
    // const sectionHeader2 = {
    //   title: 'Carefully crafted curriculum',
    //   paragraph: 'Our lesson plans are based on years of hosting workshops and running ML courses with the feedback and experience of over 25k students.'
    // };

    // begin with basics, end with mastery
  render() {
    return (
      <React.Fragment>
        <Classes  className="has-bg-color-cut illustration-section-02"/>
        <BootcampSplit />
        <FeaturesTabs />
        <Roadmap topdivider className="has-bg-color-cut illustration-section-02"/>
        <Pricing hasBgColor pricingSlider />
        <Cta hasBgColor invertColor split id="apply"/>
      </React.Fragment>
    );
  }
}

export default Home;