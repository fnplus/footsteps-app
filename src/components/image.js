import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Image = function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find(
          (image) => image.node.relativePath === props.src
        )
        return (
          <Img
            className={props.className}
            fluid={image.node.childImageSharp.fluid}
          />
        )
      }}
    />
  )
}

export default Image
