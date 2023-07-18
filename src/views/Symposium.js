import React from 'react';
import Papers from '../components/sections/Papers';
import ApplicationTimeline from '../components/sections/ApplicationTimeline';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import Button from '../components/elements/Button';
import SectionHeader from '../components/sections/partials/SectionHeader';
import ResearchSplit from '../components/sections/ResearchSplit';
import Image from '../components/elements/Image';

import ReactPlayer from "react-player"

// import BLAST from '../../src/assets/images/BLAST AI Curriculum Schedule'

class Home extends React.Component {
  render() {
    const header = {
      title: 'Watch the 2022 Symposium',
      paragraph: 'BLAST AI is proud to present the projects of every research group in a camp-wide symposium. In our 2022 cohort, we had 6 presentations, 5 of which are currently published in peer-reviewed conferences.'
    }
    // const [paper, setPaper] = useState("");
    return (
      <React.Fragment>
        <Papers  className="has-bg-color-cut illustration-section-02"/>
        <ResearchSplit />
        <div className='absolute width-screen'>
          <GenericSection className="center-content">
            <div className="container">
            <SectionHeader data={header} className="center-content" />
            <div className="center-content pb-6 section-header">
              <Image
                    src={require('./../assets/images/genotype-symp.png')}
                    alt="Testimonial 03"
                    width={850}
                    height={48} 
                    className="pb-50"
                    onClick={(e) => {
                      e.preventDefault();
                       window.location.href='https://www.youtube.com/watch?v=bk8k8h8Za4M';
                    }}
                />
              </div>
               <Button color="primary" className="pt-50" href="https://www.youtube.com/watch?v=bk8k8h8Za4M" wideMobile
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='https://www.youtube.com/watch?v=bk8k8h8Za4M';
                  }}
                >Open in YouTube</Button>
              </div>
            </GenericSection>
        </div>
        <ApplicationTimeline topDivider className="has-bg-color-cut illustration-section-02"/>
        <Pricing hasBgColor />
        <Cta hasBgColor invertColor split id="apply"/>
      </React.Fragment>
    );
  }
}

export default Home;