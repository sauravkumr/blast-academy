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

class Testimonial extends React.Component {

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
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Learn what our past students have to say about BLAST',
      paragraph: 'Working in small groups on a research problem allows students to become experts in their field while forming life-long relationships and having fun!'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color" />
            <div className={tilesClasses}>
              
            <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      {/* <Image
                        src={require('./../../assets/images/testimonial-image-01.jpg')}
                        alt="Testimonial 01"
                        width={48}
                        height={48} /> */}
                        <span className="testimonial-item-link fw-600">
                          <a href="#0">Genomic Sequencing AI</a>
                        </span>
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      I worked on a novel algorithm that predicts missing values in DNA sequences. The research segment helped me develop leadership skills as I had to coordinate constantly with my group in order to finish my project in the six weeks. All the mentors were very helpful and were always there to help us out at any point.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name">
                      Nishkal Hundia
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      <a>India</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      {/* <Image
                        src={require('./../../assets/images/testimonial-image-01.jpg')}
                        alt="Testimonial 01"
                        width={48}
                        height={48} /> */}
                        <span className="testimonial-item-link fw-600">
                          <a href="#0">Political Polling AI</a>
                        </span>
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      We used natural language processing to use political tweets to make predictions on localized policy based elections. The research segment really helped me grow because I got to realize the real world application of AI. There was never a time when I was bored, whether during the lectures or doing the research.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name">
                      Alexandra Koster
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      <a>NYC</a>
                    </span>
                  </div>
                </div>
              </div>

              
              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      {/* <Image
                        src={require('./../../assets/images/testimonial-image-01.jpg')}
                        alt="Testimonial 01"
                        width={48}
                        height={48} /> */}
                        <span className="testimonial-item-link fw-600">
                          <a href="#0">Crypto Price Prediction AI</a>
                        </span>
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      My research project used stance detection on tweets to predict Bitcoin price movement. The research segment definitely helped me grow by learning to read academic works better. If there's one word that I could use to describe BLAST, it would definitely be collaborative.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name">
                      Soham Vohra
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      <a>California</a>
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;