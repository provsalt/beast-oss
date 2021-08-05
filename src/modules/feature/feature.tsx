import * as React from "react";

interface Props {
    Title: string
    Description: string
    Icon: string;
}

export const FeatureCard = (props: Props) => {
    return (
        <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700">
                <div
                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                        <path d={props.Icon}/>
                    </svg>
                </div>
                <div className="flex-grow">
                    <h2 className="text-gray-200 text-lg title-font font-medium mb-3">{props.Title}</h2>
                    <p className="leading-relaxed text-base text-gray-300">{props.Description}</p>
                </div>
            </div>
        </div>
    )
}
