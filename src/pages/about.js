import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords="{[`gatsby`, `application`, `react`]}" />
    <h1>About Me</h1>
    <p>I'm building something awesome</p>
    <Link to="/">Go to page 2</Link> <br />
  </Layout>
)

export default AboutPage
