import {checkAddress} from "monero-checker/index";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Helmet} from "react-helmet";
import * as React from "react";
import Navigation from "../modules/navigation/navigation";

const Login = () => {
    const [wallet, setWallet] = useState("")
    const [signInerr, setError] = useState("")

    const walletChange = (event: any) => {
        setWallet(event.target.value)
    }

    useEffect(() => {
        if (typeof window === "undefined") return
        if (Cookies.get("wallet") !== undefined) window.location.href = "/dashboard/dashboard"
    }, []);


    const signIn = () => {
        if (wallet === "") {
            setError("That's not even an address mate")
        }
        let addr = checkAddress(wallet)
        if (!addr[0]) {
            setError("Sorry that's not a valid address")
            return
        }
        if (typeof window !== 'undefined') {
            Cookies.set("wallet", wallet, {sameSite: "strict", expires: 365 * 10})
        }
        document.location.href='dashboard/dashboard'
    }

    return (
        <>
            <Navigation />
            <div className="flex items-center min-h-screen bg-gray-900">
                <Helmet>
                    <title>XMRvsBeast | Sign in</title>
                    <meta name="description" content="Sign in with your monero wallet address to proceed to our dashboard."/>
                </Helmet>
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto my-10">
                        <div className="text-center">
                            <h1 className="my-3 text-4xl font-semibold text-gray-200">Sign in</h1>
                            <p className="text-gray-400">Sign in to access the dashboard</p>
                        </div>
                        <div className="m-7">
                            <form action="">
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm text-gray-400">Wallet address</label>
                                    <input type="text" onChange={walletChange} placeholder="" className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-indigo-300 bg-gray-700 text-white placeholder-gray-500 border-gray-600 focus:ring-gray-900 focus:border-gray-500" />
                                </div>
                                <div className="mb-6">
                                    <button type="button" onClick={signIn} className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                                </div>
                                {signInerr ? <div className="w-full text-white bg-red-600 py-2 mb-2 text-center rounded-lg">{signInerr}</div> : ""}
                                <p className="text-sm text-center text-gray-400">Don&#x27;t have a wallet? <a href="https://www.getmonero.org/downloads/" className="text-indigo-400 focus:outline-none focus:underline focus:border-indigo-800">Download official wallet</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
