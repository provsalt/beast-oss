import {UserGroupIcon} from "@heroicons/react/solid";
import * as React from "react";
import {abbreviateNumber} from "../utils";

interface Props {
    workers: number
}

export const Workers = (props: Props) => {
    return (
        <div className="w-full md:w-1/4 bg-dashboard-blue-500 rounded-md mx-2">
            <div className="shadow-lg w-full">
                <div className="flex items-center justify-between px-4 py-4 space-x-4">
                    <div className="flex items-center">
                        <span className="bg-dashboard-blue-400 rounded-lg">
                            <UserGroupIcon className="text-dracula-purple h-10"/>
                        </span>
                        <div>
                            <span className="ml-4 lg:text-xl text-white font-semibold block">
                                {props.workers}
                            </span>
                            <span className="ml-4 mb-2 text-lg text-white font-medium block">
                                Active <span className="text-gray-400">workers</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface WorkerList {
    Workers: []
}

export const WorkerList = (workers: WorkerList) => {
    let w: [string] = [] as unknown as [string];
    let hashrate: [number] = [] as unknown as [number];

    workers.Workers.map((v) => {
        if (typeof v === "string") {
            w.push(v)
        }
        if (typeof v === "number") {
            hashrate.push(v)
        }
    })
    return (
        <>
            <table className="border-collapse w-full">
                <tbody className="bg-dashboard-blue-500">
                {
                    w.map((v, i) => {
                        if (i > 9) {
                            return
                        }

                        return (
                            <tr>
                                <td className="py-5 whitespace-nowrap text-center">
                                    <div className="flex items-center">
                                        <div className="mx-6">
                                            <div className="md font-medium text-gray-100">
                                                {
                                                    v === "" ? "Unknown" : ""
                                                }
                                                {
                                                    v === "provsalt" || v === "xmrvsbeast" ? "👑 " + v : v
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-5 whitespace-nowrap text-center">
                                    <div className="text-md text-gray-300">{abbreviateNumber(hashrate[i])}</div>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}
