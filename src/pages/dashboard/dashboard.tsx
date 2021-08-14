import {Balance} from "../../modules/dashboard/balance";
import {WorkerList, Workers} from "../../modules/dashboard/workers";
import {BlockTable, LastBlockFound} from "../../modules/dashboard/blocks";
import useSWR from "swr";
import {Price} from "../../modules/dashboard/price";
import {BoostHR, RaffleHR, TimeToBoost} from "../../modules/dashboard/events";
import {Hashrate} from "../../modules/dashboard/hashrate";
import * as React from "react";
import {useEffect} from "react";
import axios from "axios"
import Cookies from "js-cookie";
import {abbreviateNumber} from "../../modules/utils";
import Skeleton from "../../modules/dashboard/skeleton";
import Metrics from "../../modules/dashboard/metrics";
import {Helmet} from "react-helmet";
import Navigation from "../../modules/navigation/navigation";


const fetcher = (url: string) => axios.get(url).then(res => res.data)

const Dashboard = () => {
    const url = () => {
        if (typeof window === undefined) return null
        let coin;
        if (localStorage.getItem("currency") !== null) {
            coin = localStorage.getItem("currency")
        } else {
            coin = "USD"
        }
        return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + coin + "&ids=monero&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h"
    }

    useEffect(() => {
        if (typeof window === "undefined") return
        if (Cookies.get("wallet") === undefined) window.location.href = "/login"
    }, []);


    let moneroPrice = useSWR(url, fetcher, {refreshInterval: 60 * 1000})
    // I need to create the new endpoints first lol
    const data = {
        stats: useSWR("https://provsalt.me/api/stats/" + Cookies.get("wallet"), fetcher, {refreshInterval: 1000 * 30}),
        metrics: useSWR("https://provsalt.me/api/average", fetcher, {refreshInterval: 1000 * 30}),
        raffle: useSWR("https://provsalt.me/api/events/raffle", fetcher, {refreshInterval: 1000 * 60}),
        boost: useSWR("https://provsalt.me/api/events/boost", fetcher, {refreshInterval: 1000 * 60}),
        ttb: useSWR("https://provsalt.me/api/events/time/" + Cookies.get("wallet"), fetcher, {refreshInterval: 1000 * 300}),
        payout: useSWR("https://provsalt.me/api/payout/" + Cookies.get("wallet"), fetcher, {
            refreshInterval: 1000 * 300,
            initialData: [{Amount: "Stupid errors", Date: "grrr"}]
        }),
        blocks: useSWR("https://provsalt.me/api/blocks", fetcher, {refreshInterval: 1000 * 300}),
        workers: useSWR("https://provsalt.me/api/workers?address=" + Cookies.get("wallet"), fetcher, {refreshInterval: 1000 * 300})
    }

    const date = new Date
    return (
        <>
            <Navigation />
            <div className="bg-dashboard-blue-200 flex z-0">
                <Helmet>
                    <title>XMRvsBeast | Dashboard</title>
                </Helmet>
                <div className="container mx-auto">
                    <h1 className="text-3xl text-dracula-foreground">Good {date.getHours() > 12 ? "Evening" : "Morning"}</h1>
                    <span className="text-dracula-comment">Here's what's happening today in the pool</span><span
                    className="text-indigo-500">!</span>

                    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 my-10 z-10">
                        {!data.stats.data ?
                            <>
                                <Skeleton width={"w-2/5"}/>
                                <Skeleton width={"w-1/4"}/>
                                <Skeleton width={"w-1/4"}/>
                            </>
                            :
                            <>
                                {!moneroPrice.data ? "" :
                                    <Balance balance={data.stats.data.miner_balance} max={data.stats.data.payment_threshold}
                                             fiat={moneroPrice.data[0].current_price}/>}
                                <Workers workers={data.stats.data.worker_count}/>
                                <LastBlockFound time={data.stats.data.last_block_found}/>
                            </>
                        }
                    </div>

                    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-8 my-5">
                        {!data.metrics.data ?
                            <>
                                <Skeleton width={"w-3/10"}/>
                                <Skeleton width={"w-3/10"}/>
                                <Skeleton width={"w-3/10"}/>
                            </> :
                            <>
                                <Metrics title="Connected miners" amount={{
                                    current: data.stats.data.connected_miners,
                                    "1 hour": data.metrics.data.miners.hr.toFixed(2),
                                    "24 hours": data.metrics.data.miners.hrs.toFixed(2),
                                    "1 week": data.metrics.data.miners.week.toFixed(2)
                                }}/>
                                <Metrics title="Blocks found" amount={{
                                    current: data.stats.data.pool_blocks_found,
                                    "1 hour": data.metrics.data.blocks.hr.toFixed(0),
                                    "24 hours": data.metrics.data.blocks.hrs.toFixed(0),
                                    "1 week": data.metrics.data.blocks.week.toFixed(0)
                                }}/>
                                <Metrics title="Pool hashrate" amount={{
                                    current: abbreviateNumber(data.stats.data.pool_hashrate),
                                    "1 hour": abbreviateNumber(data.metrics.data.hashrate.hr),
                                    "24 hours": abbreviateNumber(data.metrics.data.hashrate.hrs),
                                    "1 week": abbreviateNumber(data.metrics.data.hashrate.week)
                                }}/>
                            </>
                        }
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                        <div className="w-full bg-dashboard-blue-500 rounded-lg">
                            {!data.raffle.data ? <Skeleton width={"w-full"}/> :
                                <RaffleHR hashrate={data.raffle.data} time={undefined}/>}
                            {!data.boost.data ? <Skeleton width={"w-full"}/> :
                                <BoostHR hashrate={data.boost.data.hash} time={data.boost.data.time}/>}

                        </div>
                        <div className="w-full bg-dashboard-blue-500 rounded-lg">
                            {!data.stats.data ?
                                <>
                                    <Skeleton width={"w-full"}/>
                                    <Skeleton width={"w-full"}/>
                                </>
                                :
                                <>
                                    <Hashrate name="Your hashrate" hashrate={data.stats.data.miner_hashrate}/>
                                    <Hashrate name="Network hashrate" hashrate={data.stats.data.network_hashrate}/>
                                </>
                            }
                        </div>
                        <div className="w-full bg-dashboard-blue-500 rounded-lg">
                            {!moneroPrice.data ? <Skeleton width={"w-full"}/> :
                                <>
                                    <Price price={moneroPrice.data[0].current_price}/>
                                </>
                            }
                            {!data.ttb.data ? <Skeleton width={"w-full"}/> :
                                <>
                                    <TimeToBoost time={data.ttb.data}/>
                                </>
                            }
                        </div>

                        <div className="bg-dashboard-blue-500 rounded-2xl">
                            {!data.workers.data ? <Skeleton width={"w-full"}/> :
                                <WorkerList Workers={data.workers.data}/>
                            }
                        </div>
                    </div>

                    <div className="flex my-4 overflow-auto">
                        {!data.blocks.data ? <Skeleton width={"w-full"}/> :
                            <>
                                <BlockTable Blocks={data.blocks.data}/>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
