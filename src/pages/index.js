import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import BlogTitle from '../components/blogTitle';
import Img from "gatsby-image"
import styled from "styled-components"

const Posts = styled.div`
  padding: 0 14vw;
  color: #B9B9B9;
`;

const PostBox = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

const PostTitle = styled.div`
  font-size: 18px;
`;

const PostBoxDescription = styled.div`
  margin-top: 8px;
  font-size: 14px;
`;

const PostImageBox = styled.div`
  margin-top: 32px;
  height: 190px;
`;

const PostImage = styled(Img)`
max-width: 100%;
max-height: 100%;
margin: auto;
display: block;
`;

export default ({ data }) => {
  return (
    <Layout>
      <BlogTitle />
      <Posts>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostBox key={node.id} to={node.fields.slug}>
            <PostTitle>{node.frontmatter.title}</PostTitle>
            <PostBoxDescription>
              {node.frontmatter.description}
            </PostBoxDescription>
            <PostImageBox 
              style={{
                width: `190px`
              }}>
              <PostImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            </PostImageBox>
          </PostBox>
        ))}
      </Posts>
    </Layout>
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