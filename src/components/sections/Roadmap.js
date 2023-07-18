import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Timeline from "../elements/Timeline";
import TimelineItem from "../elements/TimelineItem";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class Roadmap extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "roadmap section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "roadmap-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = {
      title: "Bootcamp Timeline",
      paragraph:
        "With an intensive 10-week course, vetted coaches will cover all the theory and problem-solving needed to excel in USACO Bronze competitions.",
    };

    return (
      <section {...props} className={outerClasses}>
        {" "}
        {
          <div className="container">
            <div className={innerClasses}>
              <SectionHeader data={sectionHeader} className="center-content" />
              <Timeline>
                <TimelineItem title="Week 1">
                  Intro to USACO and Programming Fundamentals
                </TimelineItem>
                <TimelineItem title="Week 2">
                  Time Complexity and Simulation
                </TimelineItem>
                <TimelineItem title="Week 2">
                  Sorting and Basic Data Structures
                </TimelineItem>
                <TimelineItem title="Week 3">Complete Search</TimelineItem>
                <TimelineItem title="Week 4">
                  Advanced Complete Search (Recursion + Optimizations)
                </TimelineItem>
                <TimelineItem title="Week 5">Ad Hoc Problems</TimelineItem>
                <TimelineItem title="Week 6">Greedy Algorithms</TimelineItem>
                <TimelineItem title="Week 7">Hard Problems</TimelineItem>
                <TimelineItem title="Week 8">Hard Problems</TimelineItem>
                <TimelineItem title="Week 9">Mock Contest</TimelineItem>
                <TimelineItem title="Week 10">
                  Mock Contest & Contest Strategy
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        }
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;
