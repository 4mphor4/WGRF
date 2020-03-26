import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { LandingSection } from "../components/index_page_sections/landing_section/landingSection"
import FaqSection from "../components/index_page_sections/FAQ_section/faqSection"
import SEO from "../components/seo"

const LANDING_BUTTON_DATA = [
  {
    overText: "Epic Trails",
    underText: "View",
  },
  {
    overText: "SRT Ultra",
    underText: "View",
  },
]



const ACCORDION_DATA = [
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <LandingSection
      title="WGRF"
      subtitle="Western Ghat Running Foundation"
      buttonData={LANDING_BUTTON_DATA}
    ></LandingSection>


    <FaqSection accordionData={ACCORDION_DATA}></FaqSection>
    <Link to="/courses/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
