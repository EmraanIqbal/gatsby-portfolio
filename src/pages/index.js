import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Lahore.</p>
          <Link className={btn} to="/project">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
