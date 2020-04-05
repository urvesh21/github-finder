import React, { Fragment } from 'react'

export const About = (props) => {
    console.log("Props: ", props);
    return (
        <Fragment>
            <h1>About this app</h1>
            <p>App to search Github users</p>
            <p>Version: 1.0.0</p>
        </Fragment>
    )
}

export default About