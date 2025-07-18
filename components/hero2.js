import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero2 = (props) => {
  return (
    <>
      <div
        className={`hero2-header5 thq-section-padding ${props.rootClassName} `}
      >
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero2-image"
        />
        <div className="hero2-container1">
          <div className="hero2-max-width thq-section-max-width">
            <div className="hero2-column">
              <div className="hero2-content">
                <h1 className="thq-heading-1 hero2-text1">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="hero2-text8">
                        Welcome to Web Games Hub
                      </span>
                    </Fragment>
                  )}
                </h1>
                <p className="thq-body-large hero2-text2">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="hero2-text7">
                        Play fun and exciting games directly in your browser
                        with Web Games Hub. Enjoy a wide selection of casual
                        games for all ages.
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="hero2-actions">
                  <div className="hero2-container2">
                    <button className="hero2-button1 thq-button-filled">
                      <span className="thq-body-small">
                        {props.action1 ?? (
                          <Fragment>
                            <span className="hero2-text6">
                              Start Playing Now
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="hero2-container3">
                    <button className="thq-button-outline hero2-button2">
                      <span className="thq-body-small">
                        {props.action2 ?? (
                          <Fragment>
                            <span className="hero2-text5">Learn More</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero2-header5 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero2-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero2-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero2-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .hero2-column {
            gap: 24px;
            width: auto;
            display: flex;
            z-index: 1;
            max-width: 560px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero2-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeInLeftBig;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .hero2-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero2-container2 {
            display: flex;
            align-items: flex-start;
          }
          .hero2-button1 {
            display: flex;
            box-sizing: content-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .hero2-container3 {
            display: flex;
            align-items: flex-start;
          }
          .hero2-text5 {
            display: inline-block;
          }
          .hero2-text6 {
            display: inline-block;
          }
          .hero2-text7 {
            display: inline-block;
          }
          .hero2-text8 {
            display: inline-block;
          }
          .hero2root-class-name {
            width: auto;
            align-self: stretch;
          }
          @media (max-width: 767px) {
            .hero2-header5 {
              justify-content: center;
            }
            .hero2-max-width {
              justify-content: center;
            }
            .hero2-column {
              width: 100%;
            }
            .hero2-text1 {
              text-align: center;
            }
            .hero2-text2 {
              text-align: center;
            }
            .hero2-actions {
              width: 100%;
              align-self: flex-start;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero2-actions {
              flex-direction: column;
            }
            .hero2-container2 {
              width: 100%;
            }
            .hero2-button1 {
              width: 100%;
            }
            .hero2-container3 {
              width: 100%;
            }
            .hero2-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero2.defaultProps = {
  action2: undefined,
  image1Alt: 'Web Games Hub',
  action1: undefined,
  content1: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1609661742136-12844dd9b2c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
}

Hero2.propTypes = {
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero2
