import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout/layout'
import '../assets/css/reset.css'
import "../assets/css/post.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout>
        <div class="post__template">
          <div class="post__template__title">{post.frontmatter.title}</div>
          <div
              class="post__template__contents"
              dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        publishedAt
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
