import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import GenericSection from './GenericSection';
import SectionHeader from './partials/SectionHeader';

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
      // hasBgColor,
      // invertColor,
      pushLeft,
      ...props
    } = this.props;
    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    return (
      <section
        // {...props}
        // className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            {/* <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color" /> */}
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      <span className="testimonial-item-name">
                        30%
                      </span>
                    </div>
                  </div>
                  {/* <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div> */}
                  <div className="testimonial-item-footer text-s fw-500 mt-4 mb-0">
                    <span className="testimonial-item-name">
                      of BLAST AI students attend on financial aid.
                    </span>
                    {/* <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      <a href="#0">AppName</a>
                    </span> */}
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16 ">
                    {/* <div className="testimonial-item-image"> */}
                      <span className="testimonial-item-name">
                        11
                      </span>
                      {/* <Image
                        src={require('./../../assets/images/testimonial-image-02.jpg')}
                        alt="Testimonial 02"
                        width={48}
                        height={48} /> */}
                    {/* </div> */}
                  </div>
                  {/* <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div> */}
                  <div className="testimonial-item-footer text-s fw-500 mt-4 mb-0">
                    <span className="testimonial-item-name">
                      BLAST AI is global, spanning 11 countries
                    </span>
                    {/* <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      <a href="#0">AppName</a>
                    </span> */}
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="text-xl fw-600">
                    {/* <GenericSection>
                    <SectionHeader> */}
                      <span className="testimonial-item-name">
                        66%
                      </span>
                      {/* </SectionHeader>
                      </GenericSection> */}
                    </div>
                  </div>
                  {/* <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div> */}
                  <div className="testimonial-item-footer text-s fw-500 mt-4 mb-0">
                    <span className="testimonial-item-name">
                      of research in the past has been published.
                    </span>
                    {/* <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      <a href="#0">AppName</a>
                    </span> */}
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