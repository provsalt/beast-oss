import {Listbox, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import * as React from "react";

export default function Settings() {
    const currencies = [
        {value: "ARS", name: "Argentine Peso"},
        {value: "AUD", name: "Australian Dollar"},
        {value: "BDT", name: "Bangladeshi Taka"},
        {value: "BTC", name: "Bitcoin"},
        {value: "BRL", name: "Brazilian Real"},
        {value: "GBP", name: "British Pound Sterling"},
        {value: "BGN", name: "Bulgarian Lev"},
        {value: "CZK", name: "Czech Republic Koruna"},
        {value: "CNY", name: "Chinese Yuan"},
        {value: "ETH", name: "Ethereum"},
        {value: "EUR", name: "Euro"},
        {value: "INR", name: "Indian Rupee"},
        {value: "IDR", name: "Indonesian Rupiah"},
        {value: "IRR", name: "Iranian Rial"},
        {value: "JPY", name: "Japanese Yen"},
        {value: "KES", name: "Kenyan Shilling"},
        {value: "MNT", name: "Mongolian Tugrik"},
        {value: "MYR", name: "Malaysian Ringgit"},
        {value: "MXN", name: "Mexican Peso"},
        {value: "NGN", name: "Nigerian Naira"},
        {value: "NOK", name: "Norwegian Krone"},
        {value: "PHP", name: "Philippine Peso"},
        {value: "PLN", name: "Polish Zloty"},
        {value: "RON", name: "Romanian Leu"},
        {value: "RUB", name: "Russian Ruble"},
        {value: "SGD", name: "Singapore Dollar"},
        {value: "ZAR", name: "South African Rand"},
        {value: "KRW", name: "South Korean Won"},
        {value: "SEK", name: "Swedish Krona"},
        {value: "TWD", name: "Taiwan Dollar"},
        {value: "TRY", name: "Turkish Lira"},
        {value: "THB", name: "Thai Baht"},
        {value: "USD", name: "United States Dollar"},
        {value: "VND", name: "Vietnamese Dong"},
    ]
    const [currency, setCurrency] = useState(currencies[currencies.length - 2])

    function save() {
        localStorage.setItem("currency", currency.value)
    }

    return (
        <>
            <div className="min-h-screen flex bg-dracula-background">
                <div className="container-lg mx-auto">
                    <div className="max-w-3xl rounded-lg bg-dracula-background">
                        <div>
                            <h1 className="text-4xl font-extrabold ml-2 text-gray-50">Settings</h1>
                            <span className="text-md font-semibold my-2 ml-2 text-gray-100">Tweak some settings to your personal liking</span>
                        </div>
                        <div className="w-72">
                            <Listbox value={currency} onChange={setCurrency}>
                                <div className="relative mt-1">
                                    <Listbox.Button
                                        className="relative w-full py-2 pl-3 pr-10 text-center bg-gray-300 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span className="block truncate">{currency.name}</span>
                                        <span
                                            className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                        leaveTo="opacity-0">
                                        <Listbox.Options
                                            className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {currencies.map((cur, i) => (
                                                <Listbox.Option
                                                    key={i}
                                                    className={({active}) =>
                                                        `${active ? 'text-amber-900 bg-dracula-cyan' : 'bg-gray-200 text-gray-900'} cursor-default select-none relative py-2 text-center pr-4`}
                                                    value={cur}>
                                                    {({selected, active}) => (
                                                        <>
                                                            <span
                                                                className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>{cur.name}</span>
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6">
                            <button
                                onClick={save}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
