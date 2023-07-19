import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class HeroSplit extends React.Component {
  state = {
    videoModalActive: false,
  };

  openVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

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
      "hero section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile reveal-from-top">
                  <h1 className="mt-0 mb-16">BLAST Academy</h1>
                  <p className="mt-0 mb-16">
                    USACO Coaching shouldn't have to sacrifice personalization
                    for affordability. At BLAST Academy, we take a unique
                    approach of lectures combined with small group
                    problem-solving sessions and one-on-one office hours.
                  </p>
                  {/* <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      href="https://forms.gle/UU1HfCGEBwkaeSPH7"
                      wideMobile
                    >
                      Register Now
                    </Button>
                  </ButtonGroup>
                  <p className="mt-32 mb-16">
                    Explore the exciting and novel projects completed by BLAST
                    students in past cohorts!
                  </p>
                  <ButtonGroup>
                    <Button tag="a" color="dark" href="/research" wideMobile>
                      Read the 2022 Cohort's Publications
                    </Button>
                  </ButtonGroup> */}
                </div>
                <div className="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom">
                  <Image
                    src={require("./../../assets/images/ppl2.jpg")}
                    alt="Hero"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
