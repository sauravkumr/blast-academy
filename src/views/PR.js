import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import Testimonial from '../components/sections/BLASTTestimonials';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Pricing from '../components/sections/Pricing';
import ApplicationTimeline from '../components/sections/ApplicationTimeline';

class Secondary extends React.Component {

  render() {

    const community = {
      title: 'The best collaboration forms through fun',
      paragraph: 'With BLAST\'s house system (just like Hogwarts!), students participate in weekly community events and compete for points. Games range from mafia to .io games and NBA jeopardy!'
    }

    return (
      <React.Fragment>
        <Testimonial className="has-bg-color-cut illustration-section-02" />
        {/* <Team /> */}
        <div className="center-content pb-3 section-header">
          <SectionHeader data={community} className="center-content" />
          <Image
              src={require('./../assets/images/jeopardy.png')}
              alt="Testimonial 03"
              width={700}
              height={48} 
              className="pb-50"
            />
        </div>
        {/* <FeaturesSplit topDivider invertMobile imageFill /> */}

        <ApplicationTimeline topDivider className="has-bg-color-cut illustration-section-02"/>
        <Pricing hasBgColor />
        <Cta hasBgColor invertColor split id="apply"/>
      </React.Fragment>
    );
  }
}

export default Secondary;