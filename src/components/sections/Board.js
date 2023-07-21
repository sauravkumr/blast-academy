import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

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
      "team section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "team-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "The Team",
      paragraph:
        "BLAST Academy is led by coaches with USACO Platinum and students at T5 CS schools. Our coaches have excelled their problem solving skills outside of competitions – our students succeed beyond advancing in USACO.",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content reveal-from-bottom"
            />
            <div className={tilesClasses}>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require("./../../assets/images/big mike.jpg")}
                        alt="Team member 01"
                        width={180}
                        height={180}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Michael Lutz</h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Director and Teaching Staff
                    </div>
                    <p className="m-0 text-sm">
                      Michael conducts Aviation-NLP research for NASA Ames, has
                      four AI publications, and works at world-class RL labs at
                      Berkeley.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="150"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require("./../../assets/images/saurav.jpg")}
                        alt="Team member 02"
                        width={180}
                        height={180}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Saurav Kumar</h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Director and Teaching Staff
                    </div>
                    <p className="m-0 text-sm">
                      Saurav researched distributed AI at a Stanford Medicine
                      lab, wrote RL algorithms used in AMD chips, and goes to
                      UIUC for CS and Physics.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="300"
              >
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require("./../../assets/images/arjun.jpeg")}
                        alt="Team member 03"
                        width={180}
                        height={180}
                      />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">Arjun Rajaram</h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      Director and Teaching Staff
                    </div>
                    <p className="m-0 text-sm">
                      Arjun taught an ML course to 26k online students, worked
                      in UCSC labs on Biomedical Image Analysis, and cofounded
                      the Student Machine Learning Coalition.
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
