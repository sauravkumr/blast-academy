import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Team extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'The Team',
      paragraph: 'BLAST is led by students at top 5 CS universities and industry professionals. We know how to help students conduct research.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/big mike.jpg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Michael Lutz
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Director and Teaching Staff
                    </div>
                    <p className="m-0 text-sm">
                      Michael conducts Aviation-NLP research for NASA Ames, has four AI publications, and works at world-class RL labs at Berkeley.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/saurav.jpg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Saurav Kumar
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Director and Teaching Staff
                    </div>
                    <p className="m-0 text-sm">
                      Saurav researched distributed AI at a Stanford Medicine lab, wrote RL algorithms used in AMD chips, and goes to UIUC for CS and Physics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/arjun.jpeg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Arjun Rajaram
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Director and Teaching Staff
                    </div>
                    <p className="m-0 text-sm">
                      Arjun taught an ML course to 26k online students, worked in UCSC labs on Biomedical Image Analysis, and cofounded the Student Machine Learning Coalition.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/ted.jpg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Ted Kyi
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Curriculum Advisor
                    </div>
                    <p className="m-0 text-sm">
                      A graduate of Princeton University and experienced professional, Ted is an SVP for Matrix Medical Network and also runs the San Diego ML network.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/ryan.jpg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Ryan Chesler
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Curriculum Advisor
                    </div>
                    <p className="m-0 text-sm">
                      Ryan is a Kaggle Grandmaster, a data scientist at <a href="https://h2o.ai/">H2O.ai</a>, and also runs the San Diego ML network.
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/amisha.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Amisha Kumar
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                      A graduate of Case Western, Amisha is currently attending med school. She conducts bio and medical research with Nobel Laureates at Stanford and Harvard.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/fatemah.JPG')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Fatemah Sharshatehrani
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                      Fatemeh Sarshartehrani is a Ph.D. student at Virginia Tech, researching empathy within human-robot interaction. Fatemeh is deeply passionate about teaching and finds fulfillment in sharing knowledge and empowering others.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/rishi.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Rishi Jain
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                    Rishi is a computer science student at Berkeley focused on cutting-edge AI research. His current focus includes reinforcement learning for task generalization, parameter-efficient tuning of foundational models, and medical speech science.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/avi.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Avi Mehra
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                      Avi studies pure math and CS at Berkeley. He works on making ML models more efficient, taking inspiration from CV, NLP, and meta-learning. He has experience at Oracle and ML at Berkeley.
                    </p>
                  </div>
                </div>
              </div>


              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/salar.jpeg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Salar Cheema
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                      Salar studies CS and Statistics at UIUC. He has experience working at Amazon, teaching competitive math, and has won awards for his robotic AI systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/nishk.jpeg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Nishk Patel
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                      Nishk studies Computer Science and Statistics at UIUC. At the National Center for Supercomputing Applications he conducts machine learning and geospatial research to help humanitarian aid.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/kinjal.png')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Kinjal Chaudhari
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                    Kinjal conducts award winning algorithmic math research and programs physics simulations at some of the most prestigious labs in the world. She studies CS & Math at UIUC.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/rith.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Rithvik Vanga
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                      Rithvik studies Computer Science and Business at the University of Michigan. He has been a leader for his Robotics team, winning State and qualifying for Worlds 5 years in a row.
                    </p>
                  </div>
                </div>
              </div>
              
              
              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/anushka_mentor.png')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Anushka Mukhopadhyay
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Research Mentor
                    </div>
                    <p className="m-0 text-sm">
                      Anushka studies EECS at UC Berkeley. She has used ML to find natural disasters with NLP, create a suicide prevention app, and classify recyclables. She is passionate about increasing diversity in ML.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/nishkal.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Nishkal Hundia
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      AI Fellow
                    </div>
                    <p className="m-0 text-sm">
                      Nishkal is an incoming student at the University of Maryland as a CS major. A part of BLAST AI's 2022 cohort, he co-first authored a research paper on Genotype Imputation published in an IEEE conference.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/felipe.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Felipe Caceres-Fernandez
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      AI Fellow
                    </div>
                    <p className="m-0 text-sm">
                      Felipe designed mechanisms for a world class FRC robotics team, founded his own engineering outreach organization, and will be attending Carnegie Mellon University in the fall of 2024.
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;