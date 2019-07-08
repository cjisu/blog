import React from "react"
import { graphql } from "gatsby"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
        <div>
            {posts.map(({node}) => {
                return (
                  <div>{node.frontmatter.title}</div>
                )
            })}
        </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              publishedAt
            }
          }
        }
      }
  }
`