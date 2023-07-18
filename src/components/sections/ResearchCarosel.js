import React from 'react';
import Slider from 'react-slick';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames';
import Button from '../elements/Button';
import Image from '../elements/Image';

class ProjectsSlider extends React.Component {
  static propTypes = {
    ...SectionSplitProps.types
  }

  static defaultProps = {
    ...SectionSplitProps.defaults
  }

  constructor(props) {
    super(props);
    this.projects = [
        {
            title: 'Genomic Imputation AI',
            description: 'Genotype Imputation Using K-Nearest Neighbors and Levenshtein Distance Metric',
            bullets: [
              'Imputed missing genomic sequences in C Elegans using the Levenshtein Distance',
              'Used novel NLP strategies to boost accuracy from 30% to 86% – beat the state of the art accuracy',
              'Awarded US congressional recognition',
            ],
            paperLink: 'https://ieeexplore.ieee.org/document/9952611',
            image: 'genotype-symp.png',
        },
        {
          image: 'healthcare.png',
          title: 'Specialty Identification through Clinical Text',
          description: 'Machine Learning in Clinical Text: Specialty Identification and COVID-19 Risk',
          bullets: [
            'Analyzed patient transcripts to identify medical specialties, saving nurse time',
            'Used novel keyword extraction and LLM strategies',
            'Also assessed COVID-19 risk with 99% accuracy',
          ],
          paperLink: 'https://ieeexplore.ieee.org/document/9952512',
        },
        // {
        //   image: 'minecraft.jpg',
        //   title: 'Reinforcement learning with LLMs in Minecrafter',
        //   description: 'Simulating Reinforcment Learning with LLM Skill Libraries – Crafter',
        //   bullets: [
        //     'Embedded natural language skill libraries for LLMs to select actions and read rewards',
        //     'Analyzed patient transcripts to identify medical specialties, saving nurse time',
        //     'Highly applicable to robotics simulations',
        //   ],
        //   paperLink: 'pending',
        // },
        // {
        //   image: 'galaxies.jpg',
        //   title: 'Anomaly',
        //   description: 'Utilizing Computer Vision Algorithms to Detect Contrails',
        //   bullets: [
        //     'Analyzed patient transcripts to identify medical specialties, saving nurse time',
        //     'Used novel keyword extraction and LLM strategies',
        //     'Published in the top conference for aeronautics',
        //   ],
        //   paperLink: 'pending',
        // },
        {
          title: 'Political Tweet Stance Detection',
          description: 'Stance Detection of Political Tweets with Transformer Architectures',
          bullets: [
            'Detected stance in mass political tweets, simulating expensive polls',
            'Scraped Twitter and used LLMs for stance detection',
            'Achieved state of the art accuracy',
          ],
          paperLink: 'https://ieeexplore.ieee.org/document/9952951',
          image: 'polling.png',
        },
      ];
         

    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,  
    };
  }

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
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
  
      const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );
  
      const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
      );
  
      const sectionHeader = {
        title: 'Research Highlight',
        paragraph: "Here are some of our favorite projects completed by BLAST students. All of these are published in peer reviewed, PhD-level conferences."
      };

    return (
      <section
          {...props}
          className={outerClasses}
      >
          <div className="container">
          
                <div className="container">
                <div className={innerClasses}>
                  <SectionHeader data={sectionHeader} className="center-content" />
                  <Slider {...this.settings}>
                    {this.projects.map((project, index) => (
                  <div className={splitClasses}>
                    <div className="split-item">
                      <div className="split-item-content center-content-mobile">
                        <div className="project-content px-4">
                            <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                            {project.title}
                            </h3>
                            <h4 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                            {project.description}
                            </h4>
                            <ul className="list-disc ml-5 mb-4">
                                {project.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="mb-2">{bullet}</li>
                                ))}
                            </ul>
                            {project.paperLink !== 'pending' && (
                                <Button tag="a" color="primary" href={project.paperLink} wideMobile>
                                Read Paper
                                </Button>
                            )}
                        </div>
                      </div>
                      <div className={
                        classNames(
                          'split-item-image center-content-mobile reveal-scale-up',
                          imageFill && 'split-item-image-fill'
                        )}
                        data-reveal-container=".split-item"
                        data-reveal-delay="200">
                        <Image
                        //   className="has-shadow"
                          src={require(`./../../assets/images/${project.image}`)}
                          alt="Features split 01"
                        //   width={528}
                          height={396}
                           />
                      </div>
                    </div>
      
                  </div>
                  ))}
                  </Slider>
                </div>
              </div>

        </div>
      </section>
    );
  }
}

export default ProjectsSlider;
