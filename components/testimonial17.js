import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial17-text29">Testimonials</span>
                </Fragment>
              )}
            </h2>
            <span className="testimonial17-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial17-text31">
                    See what our users have to say about Web Games Hub.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container13">
                      <strong className="thq-body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial17-text37">
                              Alice Smith
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial17-text24">
                              Game Enthusiast
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text14 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text36">
                          I love playing Tic Tac Toe on Web Games Hub! It&apos;s
                          a great way to pass the time and challenge my friends.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container15">
                      <strong className="thq-body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial17-text32">
                              Bob Johnson
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial17-text33">
                              Casual Gamer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text17 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text34">
                          Slider Puzzle is my favorite game on this platform.
                          The interface is user-friendly, and the puzzles are
                          engaging.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container17">
                      <strong className="thq-body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial17-text28">
                              Eva Brown
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial17-text26">
                              Mobile Gamer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text20 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text30">
                          I enjoy the convenience of being able to play these
                          games on my phone. It&apos;s a perfect way to relax
                          during breaks.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image4"
                    />
                    <div className="testimonial17-container19">
                      <strong className="thq-body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial17-text35">
                              Max Wilson
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial17-text27">
                              Web Developer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text23 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text25">
                          As a developer, I appreciate the modular structure of
                          Web Games Hub. It&apos;s easy to add new games and
                          customize the platform.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-text11 {
            text-align: center;
          }
          .testimonial17-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text14 {
            text-align: left;
          }
          .testimonial17-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text17 {
            text-align: left;
          }
          .testimonial17-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text20 {
            text-align: left;
          }
          .testimonial17-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text23 {
            text-align: left;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
          }
          .testimonial17-text26 {
            display: inline-block;
          }
          .testimonial17-text27 {
            display: inline-block;
          }
          .testimonial17-text28 {
            display: inline-block;
          }
          .testimonial17-text29 {
            display: inline-block;
          }
          .testimonial17-text30 {
            display: inline-block;
          }
          .testimonial17-text31 {
            display: inline-block;
          }
          .testimonial17-text32 {
            display: inline-block;
          }
          .testimonial17-text33 {
            display: inline-block;
          }
          .testimonial17-text34 {
            display: inline-block;
          }
          .testimonial17-text35 {
            display: inline-block;
          }
          .testimonial17-text36 {
            display: inline-block;
          }
          .testimonial17-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
            .testimonial17-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author3Alt: 'Image of Eva Brown',
  author4Src:
    'https://images.unsplash.com/photo-1484712401471-05c7215830eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgxNDc3OXw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Position: undefined,
  review4: undefined,
  author1Alt: 'Image of Alice Smith',
  author3Position: undefined,
  author2Alt: 'Image of Bob Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1509399693673-755307bfc4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgxNDc4MHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: undefined,
  author3Name: undefined,
  heading1: undefined,
  review3: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgxNDc4MHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  author2Name: undefined,
  author2Position: undefined,
  review2: undefined,
  author4Alt: 'Image of Max Wilson',
  author4Name: undefined,
  review1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgxNDc3OXw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Name: undefined,
}

Testimonial17.propTypes = {
  author3Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author1Position: PropTypes.element,
  review4: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author4Position: PropTypes.element,
  author3Name: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  author2Src: PropTypes.string,
  content1: PropTypes.element,
  author2Name: PropTypes.element,
  author2Position: PropTypes.element,
  review2: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Name: PropTypes.element,
  review1: PropTypes.element,
  author1Src: PropTypes.string,
  author1Name: PropTypes.element,
}

export default Testimonial17
