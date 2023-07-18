import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Conduct Publishable Research',
      paragraph: "Contribute to real-world science under experienced mentors. Invent novel architectures, rethink action-loop approaches, and design important benchmarks. Nearly all of our projects have been published in top conferences."
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Research Program Details
                  </h3>
                  <h4 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    12 Weeks: 09/24/2023 - 12/16/2023
                  </h4>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    During the 12-week program, you'll work with a Principal Investigator and team of like-minded students(6-7) to research a predtermined novel idea. 
                    BLAST is <b>fully virtual</b>, and our fall programs will run <b>part-time</b> alongside school and clubs – regardless of where you are in the world. 
                    However, research is<i> extremeley </i>hard, and we expect intensive commitment and effort.
                    With our original ideas and your hard work, your contributions to cutting edge-research are rewarded by top-tier publication.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/bootcamp.png')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    What we look for
                  </h3>
                  <h4 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Application Process and Tips
                  </h4>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    BLAST Research is a highly selective program – research is hard, and we need exceptional students to contribute publishable projects. We require Python and ML experience for research, so if you are new to AI, we reccomend starting with our
                    <b> <a href="/bootcamp">bootcamp</a></b>
                    . We look for stellar academic performance, experience with research, and burning intellectual curiosity within our top applicants.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/viz.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              {/* <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Data-driven insights
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image-03.png')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;