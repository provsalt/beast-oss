import * as React from "react";

interface Props {
    hashrate: string
    time: string | undefined
}

export const RaffleHR = (props: Props) => {
    return (
        <div className="w-full my-4 mx-2">
            <span className="text-gray-400 border-b border-purple-600">Raffle hashrate</span>
            <span className="block text-4xl text-gray-100 font-black">{props.hashrate}</span>
        </div>
    )
}

export const BoostHR = (props: Props) => {
    return (
        <div className="w-full my-4 mx-2">
            <span className="text-gray-400 border-b border-purple-600">Boost hashrate</span>
            <div>
                <span className="text-4xl text-gray-100 font-black">{props.hashrate} </span> <span
                className="text-gray-400 text-md">{props.time}</span>
            </div>
        </div>
    )
}

export const TBoostHR = (props: Props) => {
    return (
        <div className="w-full my-4 mx-2">
            <span className="text-gray-400 border-b border-purple-600">Time based Raffle hashrate</span>
            <div>
                <span className="text-4xl text-gray-100 font-black">{props.hashrate} </span> <span
                className="text-gray-400 text-md">{props.time}</span>
            </div>
        </div>
    )
}

interface TTB {
    time: string
}

export const TimeToBoost = (props: TTB) => {
    return (
        <div className="w-full mx-2 my-4">
            <span className="text-gray-400 border-b border-purple-600">Estimated time until boost</span>
            <span className="block text-4xl text-gray-100 font-black">{props.time}</span>
        </div>
    )
}
