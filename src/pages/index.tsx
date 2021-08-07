import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby";
import {FeatureCard} from "../modules/feature/feature";
import Navigation from "../modules/navigation/navigation";
import Stats from "../modules/stats/stats";

const Home = () => {
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="bg-dracula-background flex relative z-20 items-center">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl text-dracula-foreground lg:text-5xl font-black text-center leading-tight">
                            Ditch your old pool today!
                        </h1>
                        <p className="leading-normal text-gray-300 text-base md:text-xl lg:text-2xl my-4">
                            Move your rigs to our pool today! More rewards, more decentralization!
                        </p>
                    </div>
                    <div className="my-3 indicator">
                        <div className="indicator-item indicator-bottom badge badge-primary">{require('../../package.json').version}</div>
                        <Link to="/login" className="mx-auto lg:mx-0 hover:underline text-xl text-gray-800 text-center bg-dracula-green font-extrabold rounded py-4 px-8 shadow-lg w-48">
                            Sign in
                        </Link>
                    </div>
                    <div className="block w-full mx-auto relative">
                        <StaticImage src="../images/dashboard-screenshot.png" alt="Dashboard screenshot"/>
                    </div>

                    <div className="flex justify-center my-4">
                        <span className="font-black text-dracula-foreground text-center text-3xl ">Features</span>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <FeatureCard Title="No fees"
                                     Description="We do not charge any fees. Not even transaction fees. We even pay out of pocket unlike other pools."
                                     Icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        <FeatureCard Title="Low minimum withdrawal"
                                     Description="Aside from paying transaction fees, there is also a 0.01 Monero minimum withdrawal making it easy for small miners to receive rewards."
                                     Icon="M19 13l-7 7-7-7m14-8l-7 7-7-7"/>
                        <FeatureCard Title="Raffles and boosts"
                                     Description="Hashrates are rented and we would give you a little boost every 30 minute or a raffle which lasts for a block."
                                     Icon="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                        <FeatureCard Title="Different Integrations"
                                     Description="We allow different types of integrations to notify in case if your miners ever goes down."
                                     Icon="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                    </div>

                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <StaticImage src="../images/world.svg" alt="World" />
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle">
                                <h3 className="text-3xl text-dracula-foreground font-bold leading-none mb-3">
                                    Connect
                                </h3>
                                <p className="text-gray-200 mb-8">
                                    Connecting is simple, you'll need to set the pool address to xmrvsbeast.com:4242. The username
                                    will be your monero wallet address. Password could be anything. Setting the rig-id in xmr-stak/xmrig will let us identify what is connecting to the pool.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
