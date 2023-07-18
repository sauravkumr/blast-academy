import React, { Component } from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import ResearchCarosel from '../components/sections/ResearchCarosel';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import Board from '../components/sections/Board';
import Roadmap from '../components/sections/Roadmap';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import SectionHeader from '../components/sections/partials/SectionHeader';
//import Stats from '../components/sections/Stats'

import { Widget } from '@typeform/embed-react'

class Home extends React.Component {
  
  render() {
    const faqHeader = {
      title: 'Frequently asked questions'
    }  
    return (
      <React.Fragment>
        <HeroSplit hasBgColor invertColor />
        {/* <Stats /> */}
        <FeaturesSplit id="About" />
        <div style={{display: 'flex',  justifyContent:'center', width: '100%'}}>
          <Widget id="eta8tr1k" style={{ width: '100%', height: '515px' }} className="my-form" />
        </div>
        {/* <ResearchCarosel bottomOuterDivider /> */}
        {/* <FeaturesTabs bottomOuterDivider /> */}
        <Roadmap topOuterDivider />
        <Board className="illustration-section-01" />
        <GenericSection>
          <div className="container-xs" id="FAQ">
           <SectionHeader data={faqHeader} className="center-content" />
              <Accordion>
              <AccordionItem title="When are applications due? When will we find out if we were accepted?" active>
                Applications are accepted in two rounds. Students who apply during the early round (due August 15, 2023 at 11:59 PM PST) will be give priority and are eligible for need-based financial aid. Regular round applications will be decided on a rolling basis and will remain open until September 15, 2023.
              </AccordionItem>
              <AccordionItem title="Can international students apply?" active>
                Absolutely! Students from 20+ countries have attended BLAST AI in the past, and we value a diverse set of backgrounds. For reference, meetings / lectures begin at 8 am PST to accommodate most timezones.
              </AccordionItem>
              <AccordionItem title="When is BLAST?">
                In the fall, the BLAST Research Program will run September 24, 2023 to December 16, 2023. The BLAST AI Bootcamp will run from October 1, 2023 to December 9, 2023.
              </AccordionItem>
              <AccordionItem title="I'd love to apply and join BLAST this summer. However, I don't have much experience in AI or computer science.">
                We're looking for motivated, passionate, and talented students regardless of whether you have experience. BLAST will be rigorous, but if you think you can keep up with lessons and assignments, we definitely recommend applying.
              </AccordionItem>
              <AccordionItem title="Over the duration of BLAST, can I participate in other activities?">
                The bootcamp will include 4 hours of instruction per week, and you should allot 4 additional hours per week for homework, projects, and fun events. The research program will have structured meetings once a week, and mentors will meet with groups 2-3 times per week throughout the 12 weeks.
              </AccordionItem>
              <AccordionItem title="How much does BLAST cost? Are scholarships or financial aid available?">
                The 10-week AI Bootcamp will cost $840, and the 12-week BLAST Research Program will cost $1240. Financial aid is available based on need, but only early-round applicants are eligible for financial aid. Historically, 30% of students attend on financial aid and we highly recommend everyone to apply. BLAST is committed to making AI research accessible, which is why we charge less than a fifth of the price of comparable programs.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>
        <Pricing hasBgColor pricingSlider />
        {/* <PricingTables hasBgColor pricingSlider /> */}
        <Cta hasBgColor invertColor split id="apply"/>
      </React.Fragment>
    );
  }
}

export default Home;