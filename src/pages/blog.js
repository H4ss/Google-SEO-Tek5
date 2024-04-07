import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '2rem' }}>
      <h1>Latest Posts</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug} style={{ textDecoration: 'none', color: 'var(--teal)' }}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage
