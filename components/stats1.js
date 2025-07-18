import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats1 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="stats1-max-width thq-section-max-width">
          <div className="stats1-container2 thq-flex-column">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats1-text30">Customer Feedback</span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats1-text29">
                    Customer results presented in a fashion way
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="stats1-text31">
                    Business improvements emphasized with numbers to increase
                    creadibility
                  </span>
                </Fragment>
              )}
            </p>
            <div className="stats1-container3">
              <div className="stats1-container4">
                <h2 className="thq-heading-2">
                  {props.stat1 ?? (
                    <Fragment>
                      <span className="stats1-text21">80%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat1Description ?? (
                    <Fragment>
                      <span className="stats1-text22">
                        consectetur adipiscing elit,
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats1-container5">
                <h2 className="thq-heading-2">
                  {props.stat2 ?? (
                    <Fragment>
                      <span className="stats1-text26">90%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat2Description ?? (
                    <Fragment>
                      <span className="stats1-text25">
                        consectetur adipiscing.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="stats1-container6">
              <div className="stats1-container7">
                <h2 className="thq-heading-2">
                  {props.stat3 ?? (
                    <Fragment>
                      <span className="stats1-text28">95%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat3Description ?? (
                    <Fragment>
                      <span className="stats1-text24">
                        consectetur adipiscing elit,
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats1-container8">
                <h2 className="thq-heading-2">
                  {props.stat4 ?? (
                    <Fragment>
                      <span className="stats1-text23">100%</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat4Description ?? (
                    <Fragment>
                      <span className="stats1-text27">
                        consectetur adipiscing.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="stats1-container9">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-1-1 stats1-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats1-max-width {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .stats1-container2 {
            align-self: center;
            align-items: flex-start;
          }
          .stats1-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .stats1-container4 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .stats1-container5 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .stats1-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .stats1-container7 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .stats1-container8 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .stats1-container9 {
            max-width: 50%;
          }
          .stats1-text21 {
            display: inline-block;
          }
          .stats1-text22 {
            display: inline-block;
          }
          .stats1-text23 {
            display: inline-block;
          }
          .stats1-text24 {
            display: inline-block;
          }
          .stats1-text25 {
            display: inline-block;
          }
          .stats1-text26 {
            display: inline-block;
          }
          .stats1-text27 {
            display: inline-block;
          }
          .stats1-text28 {
            display: inline-block;
          }
          .stats1-text29 {
            display: inline-block;
          }
          .stats1-text30 {
            display: inline-block;
          }
          .stats1-text31 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .stats1-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .stats1-container9 {
              width: 100%;
              max-width: 100%;
            }
          }
          @media (max-width: 479px) {
            .stats1-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats1.defaultProps = {
  stat1: undefined,
  stat1Description: undefined,
  stat4: undefined,
  stat3Description: undefined,
  stat2Description: undefined,
  stat2: undefined,
  image1Alt: 'image',
  stat4Description: undefined,
  stat3: undefined,
  heading1: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1601592935678-406968278b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  content2: undefined,
}

Stats1.propTypes = {
  stat1: PropTypes.element,
  stat1Description: PropTypes.element,
  stat4: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2Description: PropTypes.element,
  stat2: PropTypes.element,
  image1Alt: PropTypes.string,
  stat4Description: PropTypes.element,
  stat3: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  content2: PropTypes.element,
}

export default Stats1
