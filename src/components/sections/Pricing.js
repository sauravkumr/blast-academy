import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false
}

class Pricing extends React.Component {
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
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Making ML Education Accesible',
      paragraph: 'We don\'t want you to pay thousands like other research summer programs. We have need-based financial aid and scholarship grants available in the application.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content invert-color" />
            <div className={tilesClasses}>

              {/* <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-8">
                        <span className="pricing-item-price-amount h1">
                          $250
                        </span>
                      </div>
                      <div className="text-xs text-color-low">
                        ML Bootcamp Package
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">2 week bootcamp (40 hr)</li>
                        <li className="is-checked">Daily office hours with mentors</li>
                        <li className="is-checked">Graded assignments and projects</li>
                        <li className="is-checked">Certificate of Completion</li>
                        <li>6-week research project (40 hr)</li>
                        <li>idk smt else lol</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="http://cruip.com/">Start free trial</Button>
                  </div>
                </div>
              </div> */}

              {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-8">
                        <span className="pricing-item-price-currency h3">
                        </span>
                        <span className="pricing-item-price-amount h1">
                          $760
                        </span>
                      </div>
                      <div className="text-xs text-color-low">
                        ML Bootcamp + Research Package
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">2 week bootcamp (40 hr)</li>
                        <li className="is-checked">Daily office hours with mentors</li>
                        <li className="is-checked">Impressive capstone projects</li>
                        <li className="is-checked">Certificate of Completion</li>
                        <li className="is-checked">6-week research project (40 hr)</li>
                      </ul>
                    </div>
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;