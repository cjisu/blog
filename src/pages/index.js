import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  return (
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link> 
          </div>
        ))}
      </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___publishedAt], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`