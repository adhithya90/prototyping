import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`adhithya`, `designer`, `portfolio`]} />
    <h1>Trying out new prototypes</h1>
    <p>Starting with simple components on code</p>
    <p>Finish React for beginners first, then React + Framer X tutorial and then finally React Native.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to components page</Link>
  </Layout>
)

export default IndexPage
