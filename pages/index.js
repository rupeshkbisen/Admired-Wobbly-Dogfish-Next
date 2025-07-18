import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Admired Wobbly Dogfish</title>
          <meta property="og:title" content="Admired Wobbly Dogfish" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103">Link 4</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text108">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text109">Secondary Action</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text110">Page One Description</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text111">Page Two Description</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112">Page Three Description</span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text113">Page Four Description</span>
            </Fragment>
          }
          rootClassName="navbar8root-class-name"
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text114">Main action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text115">Secondary action</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text116">
                Play fun and engaging web games directly in your browser. Choose
                from a variety of casual games to enjoy anytime, anywhere.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text117">Welcome to Web Games Hub</span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text118">Responsive Design</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text119">Game Catalog</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text120">Modular Structure</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text121">
                Enjoy seamless gameplay across various devices with our
                responsive web app.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text122">
                Explore a diverse catalog of casual games like Tic Tac Toe and
                Slider Puzzle.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text123">
                Easily expand the game collection with our modular structure for
                adding new games.
              </span>
            </Fragment>
          }
        ></Features24>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text124">Browse Game Catalog</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text125">Play Directly In-Browser</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text126">Responsive Design</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text127">
                Easily explore a variety of casual games available in the
                catalog.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text128">
                Enjoy playing games directly in your browser without the need
                for downloads.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text129">
                Experience seamless gameplay across different devices with
                responsive design.
              </span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan1={
            <Fragment>
              <span className="home-text130">Basic plan</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text131">Business plan</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text132">Enterprise plan</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text133">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text134">Business plan</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text135">Enterprise plan</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text136">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text137">
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
              <span className="home-text138">Pricing plan</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text139">$0</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text140">$5/month</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text141">$10/month</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text142">Play Now</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text143">$200/yr</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text144">or $200 yearly</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text145">Subscribe Now</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text146">$299/yr</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text147">or $299 yearly</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text148">Get Premium</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text149">$499/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text150">or $499 yearly</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text151">Get started</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text152">or $20 monthly</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text153">Get started</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text154">or $29 monthly</span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text155">Get started</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text156">or $49 monthly</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text157">Access to Tic Tac Toe game</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text158">
                Responsive design for mobile/desktop
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text159">Quick and fun gameplay</span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text160">Access to Slider Puzzle game</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text161">Dark mode option available</span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text162">
                Modular structure for adding games
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text163">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text164">
                Access to all games in the catalog
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text165">
                Yearly subscription option available
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text166">Scalable gameplay experience</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text167">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text168">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text169">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text170">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text171">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text172">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text173">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text174">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text175">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text176">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text177">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text178">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text179">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text180">Feature text goes here</span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text181">Browse Game Catalog</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text182">View Game Details</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text183">Play In-Browser</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text184">Have Fun!</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text185">
                Explore a variety of casual games available in the catalog.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text186">
                Check out game descriptions, instructions, and screenshots to
                learn more.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text187">
                Enjoy playing games directly in your browser without any
                downloads.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text188">
                Immerse yourself in quick, fun, and scalable gameplay for a
                great gaming experience.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text189">
                I love playing Tic Tac Toe on Web Games Hub! It&apos;s a great
                way to pass the time and challenge my friends.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text190">
                Slider Puzzle is my favorite game on this platform. The
                interface is user-friendly, and the puzzles are engaging.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text191">
                I enjoy the convenience of being able to play these games on my
                phone. It&apos;s a perfect way to relax during breaks.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text192">
                As a developer, I appreciate the modular structure of Web Games
                Hub. It&apos;s easy to add new games and customize the platform.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text193">
                See what our users have to say about Web Games Hub.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text194">Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text195">Alice Smith</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text196">Bob Johnson</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text197">Eva Brown</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text198">Max Wilson</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text199">Game Enthusiast</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text200">Casual Gamer</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text201">Mobile Gamer</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text202">Web Developer</span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text203">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text204">Contact Us</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text205">Web Games Hub Headquarters</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text206">Support Team</span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text207">
                123 Main Street, City, Country
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text208">
                For any inquiries or assistance, please email
                support@webgameshub.com
              </span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text209">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text210">Games</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text211">About Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text212">Contact Us</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text213">Link 5</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text214">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text215">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text216">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
