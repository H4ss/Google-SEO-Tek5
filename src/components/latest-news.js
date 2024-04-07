import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const LatestNews = () => {
  const data = useStaticQuery(graphql`
    query LatestNewsQuery {
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
  `);

  return (
    <div className="latest-news">
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
  )
}

export default LatestNews
