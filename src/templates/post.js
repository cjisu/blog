import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div
            style={{
                width: `720px`,
                margin: `0 auto`,
            }}
        >
            <div>{post.frontmatter.title}</div>
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
