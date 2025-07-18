import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features23 = (props) => {
  return (
    <>
      <div
        className={`features23-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features23-max-width thq-section-max-width">
          <div className="features23-container1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features23-text35">Features</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="features23-text26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="thq-button-filled features23-button">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="features23-text31">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="thq-grid-3">
            <div className="features23-container3 thq-card">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features23-image1 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features23-text36">Responsive Design</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text13 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features23-text34">
                      Enjoy games seamlessly on various devices with responsive
                      design.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container4 thq-card">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features23-image2 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features23-text27">Modular Structure</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text15 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features23-text33">
                      Explore games with a modular structure for easy navigation
                      and organization.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container5 thq-card">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features23-image3 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features23-text24">
                      Diverse Game Catalog
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text17 thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features23-text32">
                      Choose from a diverse catalog of games to suit your
                      preferences.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container6 thq-card">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="features23-image4 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature4Title ?? (
                  <Fragment>
                    <span className="features23-text38">
                      No Downloads Required
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text19 thq-body-small">
                {props.feature4Description ?? (
                  <Fragment>
                    <span className="features23-text25">
                      Play games directly in the browser without the need for
                      downloads.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container7 thq-card">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="features23-image5 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature5Title ?? (
                  <Fragment>
                    <span className="features23-text37">Feature 5</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text21 thq-body-small">
                {props.feature5Description ?? (
                  <Fragment>
                    <span className="features23-text29">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features23-container8 thq-card">
              <img
                alt={props.feature6ImageAlt}
                src={props.feature6ImageSrc}
                className="features23-image6 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature6Title ?? (
                  <Fragment>
                    <span className="features23-text28">Feature 6</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text23 thq-body-small">
                {props.feature6Description ?? (
                  <Fragment>
                    <span className="features23-text30">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
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
          .features23-layout349 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .features23-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features23-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .features23-text11 {
            text-align: center;
          }
          .features23-container3 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .features23-text13 {
            text-align: left;
          }
          .features23-container4 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .features23-text15 {
            text-align: left;
          }
          .features23-container5 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .features23-text17 {
            text-align: left;
          }
          .features23-container6 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .features23-text19 {
            text-align: left;
          }
          .features23-container7 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image5 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .features23-text21 {
            text-align: left;
          }
          .features23-container8 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image6 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .features23-text23 {
            text-align: left;
          }
          .features23-text24 {
            display: inline-block;
          }
          .features23-text25 {
            display: inline-block;
          }
          .features23-text26 {
            display: inline-block;
          }
          .features23-text27 {
            display: inline-block;
          }
          .features23-text28 {
            display: inline-block;
          }
          .features23-text29 {
            display: inline-block;
          }
          .features23-text30 {
            display: inline-block;
          }
          .features23-text31 {
            display: inline-block;
          }
          .features23-text32 {
            display: inline-block;
          }
          .features23-text33 {
            display: inline-block;
          }
          .features23-text34 {
            display: inline-block;
          }
          .features23-text35 {
            display: inline-block;
          }
          .features23-text36 {
            display: inline-block;
          }
          .features23-text37 {
            display: inline-block;
          }
          .features23-text38 {
            display: inline-block;
          }
          .features23root-class-name {
            background-image: linear-gradient(
              to right,
              #c2e59c 0%,
              #64b3f4 100%
            );
          }
          @media (max-width: 991px) {
            .features23-max-width {
              flex-direction: column;
            }
            .features23-container1 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .features23-container1 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .features23-container3 {
              width: 100%;
            }
            .features23-container4 {
              width: 100%;
            }
            .features23-container5 {
              width: 100%;
            }
            .features23-container6 {
              width: 100%;
            }
            .features23-container7 {
              width: 100%;
            }
            .features23-container8 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .features23-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features23-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features23.defaultProps = {
  feature6ImageAlt: 'Feature 1',
  feature3Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1611251126118-b1d4f99600a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature4Description: undefined,
  content1: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1703489583255-08312a4f4f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
  feature6Title: undefined,
  feature1ImageAlt: 'Responsive Design Image Alt Text',
  feature5Description: undefined,
  feature6Description: undefined,
  action1: undefined,
  feature3Description: undefined,
  feature4ImageAlt: 'No Downloads Required Image Alt Text',
  feature3ImageAlt: 'Diverse Game Catalog Image Alt Text',
  feature2Description: undefined,
  feature2ImageAlt: 'Modular Structure Image Alt Text',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1586192163299-580cbd3b127a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Description: undefined,
  heading1: undefined,
  feature5ImageAlt: 'image',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1643212290153-4fb2cced30a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1622779553291-9f2006fddd5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature5Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1546512636-028082dff74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0M3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature4Title: undefined,
  rootClassName: '',
}

Features23.propTypes = {
  feature6ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
  content1: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature6Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature5Description: PropTypes.element,
  feature6Description: PropTypes.element,
  action1: PropTypes.element,
  feature3Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  heading1: PropTypes.element,
  feature5ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature5Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Features23
