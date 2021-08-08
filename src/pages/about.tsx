import Navigation from "../modules/navigation/navigation";
import * as React from "react"
import {Helmet} from "react-helmet"

const About = () => {
    return (
        <>
            <Helmet>
                <title>XMRvsBeast | About</title>
            </Helmet>
            <Navigation />
            <div className="h-screen bg-dracula-background">
                <p>Website version {require('../../package.json').version}</p>
                <p>Created by provsalt</p>
                <p>Sponsored by xmrvsbeast</p>
            </div>
        </>
    )
}

export default About
