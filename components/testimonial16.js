import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial16 = (props) => {
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="testimonial16-max-width thq-section-max-width">
          <div className="testimonial16-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial16-text27">Testimonials</span>
                </Fragment>
              )}
            </h2>
            <span className="testimonial16-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial16-text36">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="testimonial16-container12 thq-card">
              <div className="testimonial16-container13">
                <img
                  alt={props.author1Alt}
                  src={props.author1Src}
                  className="testimonial16-image1"
                />
                <div className="testimonial16-container14">
                  <strong className="thq-body-large">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="testimonial16-text35">
                          Sarah Johnson
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="thq-body-small">
                    {props.author1Position ?? (
                      <Fragment>
                        <span className="testimonial16-text37">
                          Gaming Enthusiast
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="testimonial16-text14 thq-body-small">
                {props.review1 ?? (
                  <Fragment>
                    <span className="testimonial16-text24">
                      I love playing games on Web Games Hub! The variety of
                      options keeps me entertained for hours.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="testimonial16-container15 thq-card">
              <div className="testimonial16-container16">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="testimonial16-image2"
                />
                <div className="testimonial16-container17">
                  <strong className="thq-body-large">
                    {props.author2Name ?? (
                      <Fragment>
                        <span className="testimonial16-text25">Mike Smith</span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="thq-body-small">
                    {props.author2Position ?? (
                      <Fragment>
                        <span className="testimonial16-text34">
                          Casual Gamer
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="testimonial16-text17 thq-body-small">
                {props.review2 ?? (
                  <Fragment>
                    <span className="testimonial16-text30">
                      Web Games Hub is my go-to place for quick gaming sessions
                      during breaks. Highly recommended!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="testimonial16-container18 thq-card">
              <div className="testimonial16-container19">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="testimonial16-image3"
                />
                <div className="testimonial16-container20">
                  <strong className="thq-body-large">
                    {props.author3Name ?? (
                      <Fragment>
                        <span className="testimonial16-text28">Emily Chen</span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="thq-body-small">
                    {props.author3Position ?? (
                      <Fragment>
                        <span className="testimonial16-text29">
                          Tech Savvy User
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="testimonial16-text20 thq-body-small">
                {props.review3 ?? (
                  <Fragment>
                    <span className="testimonial16-text32">
                      The responsive design of Web Games Hub makes it easy to
                      play on my tablet or laptop without any issues.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="testimonial16-container21 thq-card">
              <div className="testimonial16-container22">
                <img
                  alt={props.author4Alt}
                  src={props.author4Src}
                  className="testimonial16-image4"
                />
                <div className="testimonial16-container23">
                  <strong className="thq-body-large">
                    {props.author4Name ?? (
                      <Fragment>
                        <span className="testimonial16-text26">Alex Wong</span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="thq-body-small">
                    {props.author4Position ?? (
                      <Fragment>
                        <span className="testimonial16-text33">
                          Game Developer
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <span className="testimonial16-text23 thq-body-small">
                {props.review4 ?? (
                  <Fragment>
                    <span className="testimonial16-text31">
                      I enjoy the modular structure that allows for new games to
                      be added regularly. Always something fresh to play!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial16-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial16-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .testimonial16-text11 {
            text-align: center;
          }
          .testimonial16-container12 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #c8bfbf;
          }
          .testimonial16-container13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial16-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial16-container14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial16-text14 {
            text-align: left;
          }
          .testimonial16-container15 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #c8bfbf;
          }
          .testimonial16-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial16-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial16-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial16-text17 {
            text-align: left;
          }
          .testimonial16-container18 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #c8bfbf;
          }
          .testimonial16-container19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial16-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial16-container20 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial16-text20 {
            text-align: left;
          }
          .testimonial16-container21 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #c8bfbf;
          }
          .testimonial16-container22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial16-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial16-container23 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial16-text23 {
            text-align: left;
          }
          .testimonial16-text24 {
            display: inline-block;
          }
          .testimonial16-text25 {
            display: inline-block;
          }
          .testimonial16-text26 {
            display: inline-block;
          }
          .testimonial16-text27 {
            display: inline-block;
          }
          .testimonial16-text28 {
            display: inline-block;
          }
          .testimonial16-text29 {
            display: inline-block;
          }
          .testimonial16-text30 {
            display: inline-block;
          }
          .testimonial16-text31 {
            display: inline-block;
          }
          .testimonial16-text32 {
            display: inline-block;
          }
          .testimonial16-text33 {
            display: inline-block;
          }
          .testimonial16-text34 {
            display: inline-block;
          }
          .testimonial16-text35 {
            display: inline-block;
          }
          .testimonial16-text36 {
            display: inline-block;
          }
          .testimonial16-text37 {
            display: inline-block;
          }
          .testimonial16root-class-name {
            background-image: linear-gradient(
              90deg,
              rgb(189, 195, 199) 0%,
              rgb(168, 84, 150) 100%
            );
          }
          @media (max-width: 991px) {
            .testimonial16-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial16-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial16-container12 {
              width: 100%;
            }
            .testimonial16-container15 {
              width: 100%;
            }
            .testimonial16-container18 {
              width: 100%;
            }
            .testimonial16-container21 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial16.defaultProps = {
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1668372424373-803d9e57712e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Name: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  author3Name: undefined,
  author3Position: undefined,
  review2: undefined,
  author4Alt: 'image',
  review4: undefined,
  review3: undefined,
  author4Position: undefined,
  author1Alt: 'image',
  author2Position: undefined,
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Alt: 'image',
  content1: undefined,
  author1Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1467632499275-7a693a761056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0M3w&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'image',
  rootClassName: '',
}

Testimonial16.propTypes = {
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  author2Name: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  heading1: PropTypes.element,
  author3Name: PropTypes.element,
  author3Position: PropTypes.element,
  review2: PropTypes.element,
  author4Alt: PropTypes.string,
  review4: PropTypes.element,
  review3: PropTypes.element,
  author4Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Alt: PropTypes.string,
  content1: PropTypes.element,
  author1Position: PropTypes.element,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Testimonial16
