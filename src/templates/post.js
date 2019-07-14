import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const PostTitle = styled.div`
  font-size: 48px;
  margin-bottom: 32px;
  color: #333333;
`

const Wrapper = styled.div`
  width: 720px;
  margin: 0 auto;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div style={{
      width: `720px`,
      margin:`0 auto`
    }}>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
