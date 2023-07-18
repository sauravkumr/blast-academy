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
      title: 'Bootcamp Timeline',
      paragraph: 'With an intensive 10-week course, you will learn ML under the guidance of our mentors. You will begin with core math and end with cutting edge research.'
    };
    
    return (
      <section
        {...props}
        className={outerClasses}
      > {
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="Weeks 1">
                Environment setup + Python fundamentals
              </TimelineItem>
              <TimelineItem title="Weeks 2">
                NumPy, Pandas, and data visualization
              </TimelineItem>
              <TimelineItem title="Week 3">
                Linear regression and logistic regression
              </TimelineItem>
              <TimelineItem title="Week 4">
                KNN, decision trees, and random forest
              </TimelineItem>
              <TimelineItem title="Week 5">
                Ensembling theory and statistically grounded hyperparameter tuning
              </TimelineItem>
              <TimelineItem title="Week 6">
                Neural networks intro and math deep dive (Gradients & Matrix Multiplication)
              </TimelineItem>
              <TimelineItem title="Week 7">
                Convolutional neural networks (CNN) and generative adversarial networks (GAN)
              </TimelineItem>
              <TimelineItem title="Week 8">
                Intro to natural language processing and Transformer architecture deep dive
              </TimelineItem>
              <TimelineItem title="Week 9">
                Modern NLP: recent prompt-engineering techniques and embedding models
              </TimelineItem>
              <TimelineItem title="Week 10">
                Intro to reinforcement learning, Q-Learning, and Proximal Policy Optimization (PPO)
              </TimelineItem>
            </Timeline>
          </div>
        </div>}
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;