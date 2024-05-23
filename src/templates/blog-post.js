import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/blog-post.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="post-header" style={{backgroundColor: 'teal', color: 'white', padding: '20px'}}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <p>Keywords: {post.frontmatter.keywords.join(', ')}</p>
      </div>
      <div className="post-content-card">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/blog" className="back-button">Back to Blog</Link>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        keywords
      }
    }
  }
`