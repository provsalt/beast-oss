import {Helmet} from "react-helmet"
import * as React from "react"
import Navigation from "../modules/navigation/navigation";

// Feel free to submit PRs to add FAQs
const faqs = [
    {
        question: "Why does it say my wallet address is invalid",
        answer: "You either have a typo or you're using an integrated address most likely belongs to an exchange which isn't supported on this pool"
    },
    {
        question: "Why is the website so incomplete",
        answer: "I'm still working on this website also I'm not being paid to do this therefore I only work on this in my free time"
    },
    {
        question: "How can I set the starting difficulty?",
        answer: "You will have to add d=value in the password field when connecting to the pool"
    },
    {
        question: "My balance does not update even after a refresh?",
        answer: "Your balance updates when a new block is found and confirmed, minimum time is 2 hours"
    },
    {
        question: "Is There a Payout Fee?",
        answer: "There is no payout fee, the pool also pays the TX fees."
    },
    {
        question: "My miner can't connect to the pool.",
        answer: "This pool has spam/dos protection and will block your IP if you try to connect multiple times in a short period of time with an invalid config. You can use telnet to verify if you have been blocked.\n" +
            "\n" +
            "telnet xmrvsbeast.com 4242"
    },
    {
        question: "My Netowrk/Firewall Does Not Allow Port 4242",
        answer: "You can try connecting to the pool with port 4444"
    },
    {
        question: "Why are my workers name Unknown?",
        answer: "You'll need to set the rig-id to something in your xmrig/xmr-stak configuration"
    }
]

export default function FAQ() {
    return (
        <>
            <Navigation />
            <div className="bg-dracula-background h-screen flex flex-col justify-center items-center">
                <Helmet>
                    <title>XMRvsBeast | FAQ</title>
                    <meta name="description" content="Some frequently asked question about the xmrvsbeast monero mining pool." />
                </Helmet>
                <span className="text-5xl text-gray-200 my-6 font-black">Frequently asked questions</span>
                {faqs.map((faq, index) => {
                    return (
                        <div tabIndex={0} key={index}
                             className="collapse w-3/5 collapse-plus bg-dracula-purple text-gray-200 static my-0.5">
                            <div className="collapse-title md:text-xl sm:text-md font-medium">
                                <p>{faq.question}</p>
                            </div>
                            <div className="collapse-content">
                                <p className="text-white flex-wrap">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
