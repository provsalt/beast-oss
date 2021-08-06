import * as React from "react";

interface Props {
    title: string
    amount: {
        current: string
        "1 hour": string
        "24 hours": string
        "1 week": string
    }
}

const Metrics = (props: Props) => {
    return (
        <div
            className="flex w-full md:w-3/10 bg-upwards bg-no-repeat bg-right bg-dashboard-blue-500 bg-blend-overlay rounded-xl mx-2">
            <div className="w-full relative">
                <div className="bg-dashboard-blue-400 text-gray-200 rounded-lg w-max px-4 mx-4 my-6 py-2">
                    {props.title}
                </div>
                <span className="text-gray-100 text-4xl font-black mx-4">{props.amount.current}</span>
                <div className="mx-4">
                    <div className="border border-neutral overflow-hidden text-gray-300 text-md my-6 rounded-md">
                        <span className="block float-left">Last hour</span>
                        <span className="block float-right">{props.amount["1 hour"]}</span>
                    </div>
                    <div className="border border-purple-700 overflow-hidden text-gray-200 text-md my-6 rounded-md">
                        <span className="block float-left">Last Day</span>
                        <span className="block float-right">{props.amount["24 hours"]}</span>
                    </div>
                    <div className="border border-neutral overflow-hidden text-gray-300 my-6 text-md rounded-md">
                        <span className="block float-left">Last Week</span>
                        <span className="block float-right">{props.amount["1 week"]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metrics
