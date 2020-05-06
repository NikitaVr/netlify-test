import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return <div>data.title</div>
}

export default IndexPage
