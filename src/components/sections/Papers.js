import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ApplicationHeader from './partials/ResearchHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ReactPlayer from "react-player"
import ButtonGroup from '../elements/ButtonGroup';

// import YouTube, { YouTubeProps } from 'react-youtube';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {
    const {
      className,
      topDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'BLAST Research',
      // paragraph: 'BLAST AI is proud to present the projects of every research group. In our 2022 cohort, we had 6 presentations, 5 of which are currently published in professional, peer-reviewed conferences.'
      paragraph: 'An part-time online program for talented individuals across the world. During the 12-week program, you will conduct real-world, original AI research. You will be guided by experienced mentors, and most BLAST students ultimately publish their work at PhD-level conferences.'
    };
    // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    //   // access to player in all event handlers via event.target
    //   event.target.pauseVideo();
    // }
  //  
    // const opts: YouTubeProps['opts'] = {
    //   height: '390',
    //   width: '640',
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //   },
    // };
  
    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <ApplicationHeader data={sectionHeader} tag="h1" className="center-content invert-color" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                    <Image
                        src={require('../sections/IEEE-Logo.jpg')}
                        alt="Testimonial 03"
                        height={48} 
                        width={120}
                        />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                    Using Transformers and Deep Learning with Stance Detection to Forecast Cryptocurrency Price Movement
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    {/* <span className="testimonial-item-name">
                      Seemab Y.
                    </span> */}
                    {/* <span className="text-color-low"> / </span> */}
                    <span className="testimonial-item-link fw-600">
                      <a target="_blank" href="https://ieeexplore.ieee.org/document/9953018">View paper</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      <Image
                          src={require('../sections/Aiaa_logo.jpg')}
                          alt="Testimonial 03"
                          height={48} 
                          width={120}
                          />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                    Utilizing Computer Vision Algorithms to Detect Contrails
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    {/* <span className="testimonial-item-name">
                      Anthony R.
                    </span> */}
                    {/* <span className="text-color-low"> / </span> */}
                    <span className="testimonial-item-link fw-600">
                      <a target="_blank" href="https://arc.aiaa.org/doi/abs/10.2514/6.2023-3769">View paper</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                    <Image
                        src={require('../sections/IEEE-Logo.jpg')}
                        alt="Testimonial 03"
                        height={48} 
                        width={120}
                        />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                    Machine Learning in Clinical Text: Specialty Identification and COVID-19 Risk
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    {/* <span className="testimonial-item-name">
                      Nathan P.
                    </span> */}
                    {/* <span className="text-color-low"> / </span> */}
                    <span className="testimonial-item-link fw-600">
                      <a target="_blank" href="https://ieeexplore.ieee.org/document/9952512">View paper</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                    <Image
                        src={require('../sections/IEEE-Logo.jpg')}
                        alt="Testimonial 03"
                        height={48} 
                        width={120}
                        />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Stance Detection of Political Tweets with Transformer Architectures
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    {/* <span className="testimonial-item-name">
                      Nathan P.
                    </span> */}
                    {/* <span className="text-color-low"> / </span> */}
                    <span className="testimonial-item-link fw-600">
                      <a target="_blank" href="https://ieeexplore.ieee.org/document/9952951">View paper</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      <Image
                          src={require('../sections/IEEE-Logo.jpg')}
                          alt="Testimonial 03"
                          height={48} 
                          width={120}
                          />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                    Genotype Imputation Using K-Nearest Neighbors and Levenshtein Distance Metric
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    {/* <span className="testimonial-item-name">
                      Anthony R.
                    </span> */}
                    {/* <span className="text-color-low"> / </span> */}
                    <span className="testimonial-item-link fw-600">
                      <a target="_blank" href="https://ieeexplore.ieee.org/document/9952611">View paper</a>
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                    Predicting Merger and Acquisition Deal Completion and Stock Movement with Stance Detection
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link fw-600">
                      <a href="#">Pending publication</a>
                    </span>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;