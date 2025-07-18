import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero2 from '../components/hero2'
import Stats1 from '../components/stats1'
import Testimonial16 from '../components/testimonial16'
import Features23 from '../components/features23'
import Team3 from '../components/team3'
import Footer4 from '../components/footer4'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Admired Wobbly Dogfish</title>
          <meta property="og:title" content="About - Admired Wobbly Dogfish" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="about-text10">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="about-text11">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="about-text12">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="about-text13">Link 4</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="about-text14">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="about-text15">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="about-text16">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="about-text17">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="about-text18">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="about-text19">Secondary Action</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="about-text20">Page One Description</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="about-text21">Page Two Description</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="about-text22">Page Three Description</span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="about-text23">Page Four Description</span>
            </Fragment>
          }
          rootClassName="navbar8root-class-name2"
        ></Navbar8>
        <Hero2
          action2={
            <Fragment>
              <span className="about-text24">Learn More</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="about-text25">Start Playing Now</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text26">
                Play fun and exciting games directly in your browser with Web
                Games Hub. Enjoy a wide selection of casual games for all ages.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text27">
                Discover a World of Fun with Web Games Hub
              </span>
            </Fragment>
          }
          image1Alt="Online Games Hub"
          image1Src="https://cdn.pixabay.com/photo/2024/06/30/10/28/sky-8862862_960_720.png"
          rootClassName="hero2root-class-name"
        ></Hero2>
        <Stats1
          stat1={
            <Fragment>
              <span className="about-text28">80%</span>
            </Fragment>
          }
          stat1Description={
            <Fragment>
              <span className="about-text29">consectetur adipiscing elit,</span>
            </Fragment>
          }
          stat4={
            <Fragment>
              <span className="about-text30">100%</span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="about-text31">consectetur adipiscing elit,</span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="about-text32">consectetur adipiscing.</span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="about-text33">90%</span>
            </Fragment>
          }
          stat4Description={
            <Fragment>
              <span className="about-text34">consectetur adipiscing.</span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="about-text35">95%</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text36">
                Customer results presented in a fashion way
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text37">Customer Feedback</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-text38">
                Business improvements emphasized with numbers to increase
                creadibility
              </span>
            </Fragment>
          }
        ></Stats1>
        <Testimonial16
          review1={
            <Fragment>
              <span className="about-text39">
                I love playing games on Web Games Hub! The variety of options
                keeps me entertained for hours.
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="about-text40">Mike Smith</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="about-text41">Alex Wong</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text42">Testimonials</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="about-text43">Emily Chen</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="about-text44">Tech Savvy User</span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="about-text45">
                Web Games Hub is my go-to place for quick gaming sessions during
                breaks. Highly recommended!
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="about-text46">
                I enjoy the modular structure that allows for new games to be
                added regularly. Always something fresh to play!
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="about-text47">
                The responsive design of Web Games Hub makes it easy to play on
                my tablet or laptop without any issues.
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="about-text48">Game Developer</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="about-text49">Casual Gamer</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="about-text50">Sarah Johnson</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text51">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="about-text52">Gaming Enthusiast</span>
            </Fragment>
          }
          rootClassName="testimonial16root-class-name"
        ></Testimonial16>
        <Features23
          feature3Title={
            <Fragment>
              <span className="about-text53">Diverse Game Catalog</span>
            </Fragment>
          }
          feature4Description={
            <Fragment>
              <span className="about-text54">
                Play games directly in the browser without the need for
                downloads.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text55">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="about-text56">Modular Structure</span>
            </Fragment>
          }
          feature6Title={
            <Fragment>
              <span className="about-text57">Feature 6</span>
            </Fragment>
          }
          feature5Description={
            <Fragment>
              <span className="about-text58">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          feature6Description={
            <Fragment>
              <span className="about-text59">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="about-text60">Main action</span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="about-text61">
                Choose from a diverse catalog of games to suit your preferences.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="about-text62">
                Explore games with a modular structure for easy navigation and
                organization.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="about-text63">
                Enjoy games seamlessly on various devices with responsive
                design.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text64">Features</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="about-text65">Responsive Design</span>
            </Fragment>
          }
          feature5Title={
            <Fragment>
              <span className="about-text66">Feature 5</span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="about-text67">No Downloads Required</span>
            </Fragment>
          }
          rootClassName="features23root-class-name"
        ></Features23>
        <Team3
          actionContent={
            <Fragment>
              <span className="about-text68">Open positions</span>
            </Fragment>
          }
          member4={
            <Fragment>
              <span className="about-text69">Sarah Lee</span>
            </Fragment>
          }
          member3Content={
            <Fragment>
              <span className="about-text70">
                Alex helps spread the word about our exciting games and
                promotions.
              </span>
            </Fragment>
          }
          member1Job={
            <Fragment>
              <span className="about-text71">
                Co-Founder &amp; Game Developer
              </span>
            </Fragment>
          }
          member1={
            <Fragment>
              <span className="about-text72">John Doe</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="about-text73">We’re hiring!</span>
            </Fragment>
          }
          member4Job={
            <Fragment>
              <span className="about-text74">Customer Support Manager</span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="about-text75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-text76">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text77">Meet Our Team</span>
            </Fragment>
          }
          member2Content={
            <Fragment>
              <span className="about-text78">
                Jane brings creativity and innovation to our game designs.
              </span>
            </Fragment>
          }
          member4Content={
            <Fragment>
              <span className="about-text79">
                Sarah ensures that our users have a smooth gaming experience and
                addresses any concerns promptly.
              </span>
            </Fragment>
          }
          member3Job={
            <Fragment>
              <span className="about-text80">Marketing Specialist</span>
            </Fragment>
          }
          member3={
            <Fragment>
              <span className="about-text81">Alex Johnson</span>
            </Fragment>
          }
          member2Job={
            <Fragment>
              <span className="about-text82">Lead Designer</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text83">
                Our team is dedicated to creating a fun and engaging gaming
                experience for our users.
              </span>
            </Fragment>
          }
          member2={
            <Fragment>
              <span className="about-text84">Jane Smith</span>
            </Fragment>
          }
          member1Content={
            <Fragment>
              <span className="about-text85">
                John is passionate about game development and ensuring the best
                user experience.
              </span>
            </Fragment>
          }
        ></Team3>
        <Footer4
          link1={
            <Fragment>
              <span className="about-text86">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="about-text87">Games</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="about-text88">About Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="about-text89">Contact Us</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="about-text90">Link 5</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="about-text91">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="about-text92">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="about-text93">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-text10 {
            display: inline-block;
          }
          .about-text11 {
            display: inline-block;
          }
          .about-text12 {
            display: inline-block;
          }
          .about-text13 {
            display: inline-block;
          }
          .about-text14 {
            display: inline-block;
          }
          .about-text15 {
            display: inline-block;
          }
          .about-text16 {
            display: inline-block;
          }
          .about-text17 {
            display: inline-block;
          }
          .about-text18 {
            display: inline-block;
          }
          .about-text19 {
            display: inline-block;
          }
          .about-text20 {
            display: inline-block;
          }
          .about-text21 {
            display: inline-block;
          }
          .about-text22 {
            display: inline-block;
          }
          .about-text23 {
            display: inline-block;
          }
          .about-text24 {
            display: inline-block;
          }
          .about-text25 {
            display: inline-block;
          }
          .about-text26 {
            display: inline-block;
            font-size: 30px;
          }
          .about-text27 {
            display: inline-block;
          }
          .about-text28 {
            display: inline-block;
          }
          .about-text29 {
            display: inline-block;
          }
          .about-text30 {
            display: inline-block;
          }
          .about-text31 {
            display: inline-block;
          }
          .about-text32 {
            display: inline-block;
          }
          .about-text33 {
            display: inline-block;
          }
          .about-text34 {
            display: inline-block;
          }
          .about-text35 {
            display: inline-block;
          }
          .about-text36 {
            display: inline-block;
          }
          .about-text37 {
            display: inline-block;
          }
          .about-text38 {
            display: inline-block;
          }
          .about-text39 {
            display: inline-block;
          }
          .about-text40 {
            display: inline-block;
          }
          .about-text41 {
            display: inline-block;
          }
          .about-text42 {
            display: inline-block;
          }
          .about-text43 {
            display: inline-block;
          }
          .about-text44 {
            display: inline-block;
          }
          .about-text45 {
            display: inline-block;
          }
          .about-text46 {
            display: inline-block;
          }
          .about-text47 {
            display: inline-block;
          }
          .about-text48 {
            display: inline-block;
          }
          .about-text49 {
            display: inline-block;
          }
          .about-text50 {
            display: inline-block;
          }
          .about-text51 {
            display: inline-block;
          }
          .about-text52 {
            display: inline-block;
          }
          .about-text53 {
            display: inline-block;
          }
          .about-text54 {
            display: inline-block;
          }
          .about-text55 {
            display: inline-block;
          }
          .about-text56 {
            display: inline-block;
          }
          .about-text57 {
            display: inline-block;
          }
          .about-text58 {
            display: inline-block;
          }
          .about-text59 {
            display: inline-block;
          }
          .about-text60 {
            display: inline-block;
          }
          .about-text61 {
            display: inline-block;
          }
          .about-text62 {
            display: inline-block;
          }
          .about-text63 {
            display: inline-block;
          }
          .about-text64 {
            display: inline-block;
          }
          .about-text65 {
            display: inline-block;
          }
          .about-text66 {
            display: inline-block;
          }
          .about-text67 {
            display: inline-block;
          }
          .about-text68 {
            display: inline-block;
          }
          .about-text69 {
            display: inline-block;
          }
          .about-text70 {
            display: inline-block;
          }
          .about-text71 {
            display: inline-block;
          }
          .about-text72 {
            display: inline-block;
          }
          .about-text73 {
            display: inline-block;
          }
          .about-text74 {
            display: inline-block;
          }
          .about-text75 {
            display: inline-block;
          }
          .about-text76 {
            display: inline-block;
          }
          .about-text77 {
            display: inline-block;
          }
          .about-text78 {
            display: inline-block;
          }
          .about-text79 {
            display: inline-block;
          }
          .about-text80 {
            display: inline-block;
          }
          .about-text81 {
            display: inline-block;
          }
          .about-text82 {
            display: inline-block;
          }
          .about-text83 {
            display: inline-block;
          }
          .about-text84 {
            display: inline-block;
          }
          .about-text85 {
            display: inline-block;
          }
          .about-text86 {
            display: inline-block;
          }
          .about-text87 {
            display: inline-block;
          }
          .about-text88 {
            display: inline-block;
          }
          .about-text89 {
            display: inline-block;
          }
          .about-text90 {
            display: inline-block;
          }
          .about-text91 {
            display: inline-block;
          }
          .about-text92 {
            display: inline-block;
          }
          .about-text93 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default About
