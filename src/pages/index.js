import React from "react"
import { Link, graphql } from "gatsby"
import BlogTitle from "../components/blogTitle/blogTitle"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import "../assets/css/pageIndex.css"

export default ({ data }) => {
  return (
    <Layout>
      <BlogTitle />
      <div class="posts">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link class="post__box" key={node.id} to={node.fields.slug}>
            <div class="post__title">{node.frontmatter.title}</div>
            <div class="post__box__description">
              {node.frontmatter.description}
            </div>
            <div class="post__image__box">
              <Img
                class="post__image"
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                style={{
                  width: `${190 *
                    (node.frontmatter.featuredImage.childImageSharp.fluid
                      .presentationWidth /
                      node.frontmatter.featuredImage.childImageSharp.fluid
                        .presentationHeight)}px`,
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___publishedAt], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            publishedAt
            description
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                  presentationHeight
                }
              }
            }
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
