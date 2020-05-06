import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"

import { NavWrapper } from "../elements"

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                publicURL
            }
        }
    `)

    return (
        <NavWrapper>
            <Link to="/">
                <img height="60" width="60" src={data.logo.publicURL} alt="My Logo" />
            </Link>
        </NavWrapper>
    )
}