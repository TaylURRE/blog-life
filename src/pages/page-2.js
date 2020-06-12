import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  let posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <div>
        {posts.map(post => (
          <div key={post.id} className="article-box">
            <Link
              to={post.fields.slug}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3 className="title">{post.frontmatter.title}</h3>
            </Link>
            <p className="date">
              {post.frontmatter.date} {post.timeToRead}min read
            </p>
            <p className="excerpt">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          path
          title
        }
        timeToRead
        excerpt
        id
        fields {
          slug
        }
      }
    }
  }
`