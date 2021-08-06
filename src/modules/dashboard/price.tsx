import * as React from "react";

interface Props {
    price: number
}

export const Price = (props: Props) => {
    return (
        <div className="w-full mx-2 my-4">
            <span className="text-gray-400 border-b border-purple-600">Monero price</span>
            <span
                className="block text-4xl text-gray-100 font-black">{props.price} {localStorage.getItem("currency") || "USD"}</span>
        </div>
    )
}
