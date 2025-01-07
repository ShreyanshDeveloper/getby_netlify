import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AboutPage = () => (
<Layout>
  <main>
    <h1>About Us</h1>
    <p>We are a team of developers passionate about building GatsbyJS projects.</p>
    <nav>
      <a href="/">Home</a> | <a href="/contact">Contact Us</a>
    </nav>
  </main>
 </Layout>  
);

export const Head = () => <Seo title="About Us" />

export default AboutPage
