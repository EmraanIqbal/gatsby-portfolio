import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query Siteinfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let { title } = data.site.siteMetadata
  return (
    <nav>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
