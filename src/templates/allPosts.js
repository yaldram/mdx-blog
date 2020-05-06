import React from "react"
import { graphql } from "gatsby"

import { H1, P } from "../elements"
import {
  Container,
  Content,
  Card,
  FeatureImage,
  Pagination,
} from "../components"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage} + 1`

  const posts = data.allMdx.edges

  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          This is a Dummy title.
        </H1>
        <P textAlign="center" color="dark2">
          This is some Dummy Content.
        </P>
        {posts.map(post => (
          <Card
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            excerpt
            title
          }
        }
      }
    }
  }
`
