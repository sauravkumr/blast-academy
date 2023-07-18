import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class ApplicationTimeline extends React.Component {

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
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Interested? Join the 2023 Fall Research Cohort',
      paragraph: 'Throughout the intensive 12-week program, you will learn ML fundamentals and conduct an exciting and novel research project under the guidance of an experienced mentor.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="August 15, 2023">
                Early Round Application Deadline
              </TimelineItem>
              <TimelineItem title="September 15, 2023">
                Regular Round (Rolling) Application Deadline
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

ApplicationTimeline.propTypes = propTypes;
ApplicationTimeline.defaultProps = defaultProps;

export default ApplicationTimeline;