import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/latest-news.css"

const LatestNews = () => {
    const data = useStaticQuery(graphql`
    query LatestNewsQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
        <div className="latest-news" style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'teal', textAlign: 'center', fontSize: '2em', marginBottom: '0.5em' }}>Latest News</h2> {/* Reduce the bottom margin */}
            <p style={{ color: 'teal', textAlign: 'center' }}>Stay up-to-date with our latest news and updates.</p> {/* Add a paragraph */}               <div className="news-grid">
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
            <Link to="/blog" className="more-posts">More Posts</Link> {/* Add a "More Posts" button */}
        </div>
    )
}

export default LatestNews
