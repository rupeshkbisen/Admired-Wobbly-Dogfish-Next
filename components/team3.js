import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team3 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team3-max-width thq-section-max-width">
          <div className="team3-section-title">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="team3-text43">
                    Our team is dedicated to creating a fun and engaging gaming
                    experience for our users.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="team3-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team3-text37">Meet Our Team</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large team3-text12">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team3-text36">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team3-content2">
            <div className="team3-content3">
              <div className="team3-row1">
                <div className="team3-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="thq-img-ratio-1-1 team3-member-image1"
                  />
                  <div className="team3-content4">
                    <div className="team3-title1">
                      <span className="team3-text13 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team3-text32">John Doe</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team3-text31">
                              Co-Founder &amp; Game Developer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team3-text15 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team3-text45">
                            John is passionate about game development and
                            ensuring the best user experience.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team3-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team3-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="thq-img-ratio-1-1 team3-member-image2"
                  />
                  <div className="team3-content5">
                    <div className="team3-title2">
                      <span className="team3-text16 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team3-text44">Jane Smith</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team3-text42">Lead Designer</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team3-text18 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team3-text38">
                            Jane brings creativity and innovation to our game
                            designs.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team3-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team3-row2">
                <div className="team3-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="thq-img-ratio-1-1 team3-member-image3"
                  />
                  <div className="team3-content6">
                    <div className="team3-title3">
                      <span className="team3-text19 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team3-text41">Alex Johnson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team3-text40">
                              Marketing Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team3-text21 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team3-text30">
                            Alex helps spread the word about our exciting games
                            and promotions.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team3-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team3-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="thq-img-ratio-1-1 team3-member-image4"
                  />
                  <div className="team3-content7">
                    <div className="team3-title4">
                      <span className="team3-text22 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team3-text29">Sarah Lee</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team3-text34">
                              Customer Support Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team3-text24 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team3-text39">
                            Sarah ensures that our users have a smooth gaming
                            experience and addresses any concerns promptly.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team3-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="team3-content8">
              <div className="team3-content9">
                <h2 className="thq-heading-2">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="team3-text33">We’re hiring!</span>
                    </Fragment>
                  )}
                </h2>
                <span className="team3-text26 thq-body-small">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="team3-text35">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button className="team3-button thq-button-filled">
                <span className="team3-text27 thq-body-small">
                  {props.actionContent ?? (
                    <Fragment>
                      <span className="team3-text28">Open positions</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team3-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team3-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team3-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-content2 {
            gap: var(--dl-layout-space-sixunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-content3 {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team3-row1 {
            gap: 64px;
            display: flex;
            max-width: 800px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team3-card1 {
            gap: 24px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team3-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-text13 {
            font-style: normal;
            font-weight: 600;
          }
          .team3-text15 {
            text-align: center;
          }
          .team3-social-icons1 {
            gap: 14px;
            display: flex;
            align-items: flex-start;
          }
          .team3-card2 {
            gap: 24px;
            flex: 1;
            width: 766px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team3-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-text16 {
            font-style: normal;
            font-weight: 600;
          }
          .team3-text18 {
            text-align: center;
          }
          .team3-social-icons2 {
            gap: 14px;
            display: flex;
            align-items: flex-start;
          }
          .team3-row2 {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            max-width: 800px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team3-card3 {
            gap: 24px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 600px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team3-content6 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .team3-text21 {
            text-align: center;
          }
          .team3-social-icons3 {
            gap: 14px;
            display: flex;
            align-items: flex-start;
          }
          .team3-card4 {
            gap: 24px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 600px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team3-content7 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team3-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .team3-text24 {
            text-align: center;
          }
          .team3-social-icons4 {
            gap: 14px;
            display: flex;
            align-items: flex-start;
          }
          .team3-content8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team3-content9 {
            gap: 16px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team3-text26 {
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: Roboto;
            font-weight: 400px;
            line-height: 150%;
            font-stretch: normal;
          }
          .team3-button {
            width: 100%;
            max-width: 300px;
          }
          .team3-text27 {
            color: var(--dl-color-theme-neutral-light);
          }
          .team3-text28 {
            display: inline-block;
          }
          .team3-text29 {
            display: inline-block;
          }
          .team3-text30 {
            display: inline-block;
          }
          .team3-text31 {
            display: inline-block;
          }
          .team3-text32 {
            display: inline-block;
          }
          .team3-text33 {
            display: inline-block;
          }
          .team3-text34 {
            display: inline-block;
          }
          .team3-text35 {
            display: inline-block;
          }
          .team3-text36 {
            display: inline-block;
          }
          .team3-text37 {
            display: inline-block;
          }
          .team3-text38 {
            display: inline-block;
          }
          .team3-text39 {
            display: inline-block;
          }
          .team3-text40 {
            display: inline-block;
          }
          .team3-text41 {
            display: inline-block;
          }
          .team3-text42 {
            display: inline-block;
          }
          .team3-text43 {
            display: inline-block;
          }
          .team3-text44 {
            display: inline-block;
          }
          .team3-text45 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .team3-row1 {
              align-items: center;
              flex-direction: row;
            }
            .team3-row2 {
              align-items: center;
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .team3-text12 {
              text-align: center;
            }
            .team3-row1 {
              gap: var(--dl-layout-space-twounits);
            }
            .team3-row2 {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .team3-row1 {
              flex-direction: column;
            }
            .team3-member-image1 {
              height: 450px;
            }
            .team3-member-image2 {
              height: 450px;
            }
            .team3-row2 {
              flex-direction: column;
            }
            .team3-member-image3 {
              height: 450px;
            }
            .team3-member-image4 {
              height: 450px;
            }
            .team3-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team3.defaultProps = {
  actionContent: undefined,
  member4: undefined,
  member3Content: undefined,
  member1Job: undefined,
  member1: undefined,
  member4Alt: 'Image of Sarah Lee',
  member1Alt: 'Image of John Doe',
  member3Alt: 'Image of Alex Johnson',
  heading2: undefined,
  member4Job: undefined,
  content3: undefined,
  content2: undefined,
  heading1: undefined,
  member2Content: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1533850595620-7b1711221751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  member4Content: undefined,
  member3Job: undefined,
  member3: undefined,
  member2Alt: 'Image of Jane Smith',
  member2Job: undefined,
  content1: undefined,
  member2: undefined,
  member1Content: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  member4Src:
    'https://images.unsplash.com/photo-1571816119607-57e48af1caa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  member2Src:
    'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjgzMzc0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Team3.propTypes = {
  actionContent: PropTypes.element,
  member4: PropTypes.element,
  member3Content: PropTypes.element,
  member1Job: PropTypes.element,
  member1: PropTypes.element,
  member4Alt: PropTypes.string,
  member1Alt: PropTypes.string,
  member3Alt: PropTypes.string,
  heading2: PropTypes.element,
  member4Job: PropTypes.element,
  content3: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  member2Content: PropTypes.element,
  member3Src: PropTypes.string,
  member4Content: PropTypes.element,
  member3Job: PropTypes.element,
  member3: PropTypes.element,
  member2Alt: PropTypes.string,
  member2Job: PropTypes.element,
  content1: PropTypes.element,
  member2: PropTypes.element,
  member1Content: PropTypes.element,
  member1Src: PropTypes.string,
  member4Src: PropTypes.string,
  member2Src: PropTypes.string,
}

export default Team3
