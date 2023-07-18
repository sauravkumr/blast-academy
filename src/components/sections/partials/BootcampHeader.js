import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

class SectionHeader extends React.Component {

  render() {

    const {
      className,
      data,
      children,
      tag,
      ...props
    } = this.props;

    const classes = classNames(
      'section-header',
      className
    );    

    const Component = tag;

    return (
      <React.Fragment>
        {(data.title || data.paragraph) &&
          <div
            {...props}
            className={classes}
          >
            <div className="container-xs">
              {children}
              {data.title &&
                <Component className={
                  classNames(
                    'mt-0',
                    data.paragraph ? 'mb-16' : 'mb-0'
                  )}>{data.title}</Component>
              }
              {data.paragraph &&
                <p className="m-0 mb-16">{data.paragraph}</p>
              }
            </div>
            <div className="center-content">
              <ButtonGroup>
                <Button tag="a" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSe-3qMG3Ew9_5w6lf0rPlPPUZxSIjUU6Y9qWRQaf4s3Xx3PYw/viewform" wideMobile>
                  Bootcamp Application
                </Button>
              </ButtonGroup>
            </div>
          </div>
          
        }
      </React.Fragment>
    );
  }
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;