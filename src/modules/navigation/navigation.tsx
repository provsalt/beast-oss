import {Fragment, useEffect, useState} from 'react'
import * as React from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    BookmarkAltIcon,
    ChartBarIcon,
    ChatIcon,
    CogIcon,
    DocumentReportIcon,
    EmojiSadIcon,
    MailIcon,
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import {ChevronDownIcon, ClipboardCopyIcon} from '@heroicons/react/solid'
import Cookies from 'js-cookie'
import * as copy from 'copy-to-clipboard'
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const dashboards = [
    {
        name: 'Analytics',
        description: 'Get an overview of your stats on the pool today',
        href: '/dashboard/dashboard',
        icon: ChartBarIcon,
    },
    {
        name: 'Graphs',
        description: 'Get a nice graph about your miners today. WIP',
        href: '#',
        icon: DocumentReportIcon,
    },
    {
        name: 'Integrations',
        description: "Connect with third-party tools to notify you if something happens. WIP",
        href: '#',
        icon: MailIcon,
    },
    {
        name: 'Settings',
        description: 'Settings to adjust to your own liking.',
        href: '/dashboard/settings',
        icon: CogIcon,
    },
]
const resources = [
    {
        name: 'Chat',
        description: 'Talk to us on the Matrix network about your queries!',
        href: 'https://app.element.io/#/room/#xmrvsbeast:matrix.org',
        icon: ChatIcon,
    },
    {
        name: 'Reddit',
        description: 'Visit our reddit page to post your creations.',
        href: 'https://www.reddit.com/r/xmrvsbeast',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Old website',
        description: 'Return to the older, less beautiful website.',
        href: 'https://xmrvsbeast.com',
        icon: EmojiSadIcon,
    }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const [wallet, setWallet] = useState("")

    useEffect(() => {
        const wallet = Cookies.get("wallet")
        setWallet(wallet ? wallet : "")
    }, []);
    return (
        <Popover className="relative bg-dracula-background">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link to="/">
                                    <span className="sr-only">Workflow</span>
                                    <StaticImage
                                        className="h-8 w-auto sm:h-10"
                                        src="../images/icon.png"
                                        alt=""
                                        height="32"
                                        width="32"
                                    />
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button
                                    className="bg-dracula-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-gray-100">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Popover className="relative">
                                    {({open}) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-200' : 'text-white',
                                                    'group bg-dracula-background rounded-md inline-flex items-center text-base font-medium hover:text-gray-300'
                                                )}
                                            >
                                                <span>Dashboard</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-200' : 'text-white',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-300'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                >
                                                    <div
                                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div
                                                            className="relative grid gap-6 bg-dracula-background px-5 py-6 sm:gap-8 sm:p-8">
                                                            {dashboards.map((item) => (
                                                                <Link to={item.href} key={item.name}
                                                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-white">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-50">{item.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                                <Link to="/about">
                                    <a className="text-base font-medium text-white hover:text-gray-200">
                                        About
                                    </a>
                                </Link>

                                <Link to="/faq">
                                    <a className="text-base font-medium text-white hover:text-gray-200">
                                        FAQ
                                    </a>
                                </Link>

                                <Popover className="relative">
                                    {({open}) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-200' : 'text-white',
                                                    'group bg-dracula-background rounded-md inline-flex items-center text-base font-medium hover:text-gray-300'
                                                )}
                                            >
                                                <span>More</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-200' : 'text-white',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-200'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                                >
                                                    <div
                                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div
                                                            className="relative grid gap-6 bg-dracula-background px-5 py-6 sm:gap-8 sm:p-8">
                                                            {resources.map((item) => (
                                                                <Link to={item.href} key={item.name}
                                                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-white">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-50">{item.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                {wallet !== "" ?
                                    <div
                                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600">
                                        <span>Signed in as {wallet.substr(0, 8)} </span><ClipboardCopyIcon className="h-4 mx-0.5" onClick={() => copy(wallet)}/>
                                    </div>
                                    :
                                    <Link to="/login">
                                        <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                            Sign in
                                        </a>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-dracula-background divide-y-2 divide-gray-50 relative">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <StaticImage
                                                className="h-8 w-auto"
                                                src="../images/icon.png"
                                                height="32"
                                                width="32"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className="bg-dracula-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {dashboards.map((item) => (
                                                <Link to={item.href} key={item.name}
                                                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                               aria-hidden="true"/>
                                                    <span
                                                        className="ml-3 text-base font-medium text-white">{item.name}</span>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <Link to="/about">
                                            <a className="text-base font-medium text-white hover:text-gray-200">
                                                About
                                            </a>
                                        </Link>

                                        <Link to="/faq">
                                            <a className="text-base font-medium text-white hover:text-gray-200">
                                                FAQ
                                            </a>
                                        </Link>
                                        {resources.map((item) => (
                                            <Link to={item.href} key={item.name}
                                                  className="text-base font-medium text-white hover:text-gray-200">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    {Cookies.get("wallet") !== undefined ?
                                        <></>
                                        :
                                        <div>
                                            <a
                                                href="#"
                                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                            >
                                                Sign In
                                            </a>
                                        </div>

                                    }
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
