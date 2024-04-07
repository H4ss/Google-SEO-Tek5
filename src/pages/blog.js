import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `var(--teal)`, // Set the image as background
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the background image
      color: 'var(--white)',
      minHeight: 'calc(100vh - 80px)', // Subtract the height of the navbar
      padding: '1rem'
    }}>
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>Lastest News on the Elenfaloth</h1>
      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
        Get information about the latest news and updates on the Elenfaloth planet in this blog.
      </p>
    </div>
    <div className="latest-news" style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'teal', textAlign: 'center', fontSize: '2em', marginBottom: '0.5em' }}>Blog</h2> {/* Reduce the bottom margin */}
      <p style={{ color: 'teal', textAlign: 'center' }}>Stay up-to-date with us.</p> {/* Add a paragraph */}               <div className="news-grid">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} className="news-card">
            <Link to={node.fields.slug} className="news-link">
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <small>{`${node.frontmatter.date} • ${node.frontmatter.author}`}</small>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
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
