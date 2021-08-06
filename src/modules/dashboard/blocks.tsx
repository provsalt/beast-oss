import {CubeIcon} from "@heroicons/react/outline";
import Moment from "react-moment";
import moment from "moment-timezone";
import * as React from "react";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/solid";

interface Props {
    time: number
}

interface Blocks {
    Blocks: {
        Block: number
        Hash: string
        Status: string
        Amount: string
        Time: string
        Effort: string
        Date: string
        "(UTC+1)": string
    }[]
}

export const LastBlockFound = (props: Props) => {
    return (
        <div className="w-full md:w-1/4 bg-dashboard-blue-500 rounded-md mx-2">
            <div className="shadow-lg w-full">
                <div className="flex items-center justify-between px-4 py-4 space-x-4">
                    <div className="flex items-center">
                        <CubeIcon className="h-10 text-dracula-purple"/>
                        <div className="mx-2">
                            <span className="text-gray-100 text-xl"><Moment unix local
                                                                            format="Do MMMM h:mmA">{moment.unix(props.time).unix()}</Moment></span>
                            <span className="my-1 block text-lg text-gray-400">Last block found</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BlockTable = (blocks: Blocks) => {
    return (
        <table className="divide-y divide-gray-100 w-full mx-4 rounded-lg">
            <thead className="bg-dashboard-blue-500 text-gray-100">
            <tr>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Block
                </th>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Status
                </th>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Amount
                </th>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Time
                </th>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Effort
                </th>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Date
                </th>
            </tr>
            </thead>
            <tbody className="bg-dashboard-blue-500 divide-y divide-gray-700">
            {
                blocks.Blocks.map((block: any, i: number) => {
                    if (block.Block === 0) {
                        return
                    }
                    if (i > 10) {
                        return
                    }
                    return (
                        <tr key={block.Hash}>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-md font-medium text-gray-100">{block.Block}</div>
                                </div>
                            </td>
                            <td className="px-4 py-4">
                                {block.Status === "LOCKED" ?
                                    <div className="text-gray-200 px-2 inline-flex text-md ">
                                        <LockClosedIcon className="h-5 px-1"/>
                                        <span className="font-semibold text-gray-300">Locked</span>
                                    </div>
                                    :
                                    block.Status === "ORPHANED" ?
                                        <div
                                            className="px-2 py-3 inline-flex text-sm leading-5 font-semibold rounded-md bg-purple-600 text-gray-200">
                                            <span className="text-red-800">😨 Orphaned</span>
                                        </div>
                                        :
                                        <div
                                            className="px-2 py-3 inline-flex text-sm leading-5 font-semibold rounded-md bg-purple-600 text-gray-200">
                                            <LockOpenIcon className="h-5 px-1"/>
                                            <span>Unlocked</span>
                                        </div>
                                }
                            </td>
                            <td className="px-4 py-4">
                                {block.Amount === "PENDING" ?
                                    ""
                                    :
                                    <div
                                        className="text-sm font-medium text-gray-100">{block.Amount}</div>
                                }
                            </td>
                            <td className="px-4 py-4">
                                {block.Amount === "PENDING" ?
                                    ""
                                    :
                                    <div className="text-sm font-medium text-gray-100">{block.Time}</div>
                                }
                            </td>
                            <td className="px-4 py-4">
                                <div className="text-sm font-medium text-gray-100">{block.Effort}</div>
                            </td>
                            <td className="px-2 py-4">
                                <div className="text-gray-100">
                                    <Moment unix local
                                            format="Do MMM hh:mm A">{moment(block.Date + " " + block["(UTC+1)"], "YYYY-MM-DD HH:mm:ss").subtract(moment.duration(2, "hour")).utc(true).unix()}</Moment>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
