import * as React from "react";
import {abbreviateNumber} from "../utils";

interface Props {
    name: string
    hashrate: number
}

export const Hashrate = (props: Props) => {
    return (
        <div className="w-full my-4 mx-2">
            <span className="text-gray-400 border-b border-purple-600">{props.name}</span>
            <span className="block text-4xl text-gray-100 font-black">{abbreviateNumber(props.hashrate)} </span>
        </div>
    )
}
