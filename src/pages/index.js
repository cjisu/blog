import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import BlogTitle from '../components/blogTitle';
import Img from "gatsby-image"
import styled from "styled-components"

const Posts = styled.div`
  padding: 0 14vw;
`;

const PostBox = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  margin-bottom: 32px;
`;

const PostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

const PostBoxDescription = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #666666;
`;

const PostImageBox = styled.div`
  margin-top: 32px;
  width: 720px; 
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FAFAFA;
`;

const PostImage = styled(Img)`
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
            <PostImageBox>
              <PostImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} style={{
                width: `${190 * 
                  (node.frontmatter.featuredImage.childImageSharp.fluid.presentationWidth
                  /node.frontmatter.featuredImage.childImageSharp.fluid.presentationHeight)}px`
              }}/>
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