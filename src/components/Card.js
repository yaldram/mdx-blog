import React from "react"

import { CardWrapper, P, H2 } from "../elements"
import { Button } from "../components"

export const Card = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <P size="xSmall" color="dark2" textAlign="center" margin="0 0 0.5rem 0">
        {date}
      </P>
      <H2 textAlign="center" margin="0 0 1rem 0">
        {title}
      </H2>
      <P textAlign="center" size="small" color="dark2" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <Button href={slug}>Read More</Button>
    </CardWrapper>
  )
}
