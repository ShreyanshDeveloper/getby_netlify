import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <main>
		<h1>Welcome to the Home Page</h1>
		<p>This is the main page of your Gatsby project.</p>
		<nav>
		  <a href="/about">About Us</a> | <a href="/contact">Contact Us</a>
		</nav>
	  </main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
