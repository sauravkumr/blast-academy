import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import BootcampHeader from './partials/BootcampHeader';
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
      title: 'BLAST AI Bootcamp',
      paragraph: 'Learn python fundamentals, classical ML algorithms, and various deep learning techniques. You\'ll build up your ML portfolio by completing state-of-the-art capstone projects. You\'ll build your own chatbot, compete in a Kaggle competition, create your own embedding search algorithm, and more.'
    };
    // const sectionHeader2 = {
    //   title: 'Carefully crafted curriculum',
    //   paragraph: 'Our lesson plans are based on years of hosting workshops and running ML courses with the feedback and experience of over 25k students.'
    // };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <BootcampHeader data={sectionHeader} tag="h1" className="center-content invert-color" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/udemy.png')}
                        alt="Testimonial 01"
                        width={48}
                        height={48} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Check out our course on Udemy with over 27k students!
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link fw-600">
                      <a target="_blank" href="https://www.udemy.com/course/the-complete-intro-to-machine-learning-with-python/">ML Fundamentals Course</a>
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