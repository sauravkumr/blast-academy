import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

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
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "From Basics to Mastery",
      paragraph:
        "We're committed to cultivating intellectual rigor, problem-solving proficiency, and advanced coding competencies. At BLAST Academy, students delve into the realm of competitive programming, preparing to excel in USACO competitions and beyond.",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3
                    className="mt-0 mb-16 reveal-from-bottom"
                    data-reveal-container=".split-item"
                  >
                    USACO Bronze Bootcamp
                  </h3>
                  <h4
                    className="mt-0 mb-16 reveal-from-bottom"
                    data-reveal-container=".split-item"
                  >
                    10 Weeks: 10/01/2023 - 12/09/2023 (change date)
                  </h4>
                  <p
                    className="m-0 reveal-from-bottom"
                    data-reveal-delay="100"
                    data-reveal-container=".split-item"
                  >
                    Our course is a synthesis of algorithmic theory, data
                    structures, and practical applications in competitive
                    programming. Under the mentorship of our experienced USACO
                    coaches, students are engaged in a rigorous test of
                    problem-solving, concluding with mock USACO competitions.
                    Our goal is more than teaching you to code – it's to develop
                    the analytical brain required to thrive in competitive
                    environments.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-scale-up",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200"
                >
                  <Image
                    className="has-shadow"
                    src={require("./../../assets/images/belllecture.jpg")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
              </div>

              {/* <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    BLAST Research Program
                  </h3>
                  <h4 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    12 Weeks: 09/24/2023 - 12/16/2023
                  </h4>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    BLAST Research is an intensive program for motivated and talented individuals across the world. During the 12-week program, you will conduct original AI research with a team of like-minded individuals. This is your chance to contribute to real research by inventing novel architectures, rethinking action-loop approaches, or designing important benchmarks. You will be guided by experienced mentors and you'll present at a program-wide symposium. Many BLAST students ultimately publish their work at prestigious PhD-level conferences.
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
                    src={require('./../../assets/images/ppl1.jpg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div> */}

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
