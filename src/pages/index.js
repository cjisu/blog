import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import styled from "styled-components"

const Posts = styled.div`
  margin: 80px 24px;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  background: #ffffff;
  padding: 24px;
  box-shadow: 1px 1px 54px 0 rgba(0, 0, 0, 0.04);
`;

const PostBoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostBoxDescription = styled.div`
  margin-top: 24px;
  font-size: 14px;
  color: #333333;
`;

export default ({ data }) => {
  return (
    <Layout>
      <Posts>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostBox key={node.id}>
            <PostBoxHeader >
              <Link
                to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
              </Link> 
              <h3>{node.frontmatter.publishedAt}</h3>
            </PostBoxHeader>
            <PostBoxDescription>
              {node.frontmatter.description}
            </PostBoxDescription>
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