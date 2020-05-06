import React from "react"

import { Container, FeatureImage, Content, Card } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <Card
          date="2020-05-06"
          title="My Title"
          excerpt="This is a dummy Excerpt"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
