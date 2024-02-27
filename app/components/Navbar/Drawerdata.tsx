import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#aboutus-section', current: true },
    { name: 'Services', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="mx-auto w-full max-w-sm rounded-md">
            <div className="flex-1 py-1 space-y-4">
                <div className="sm:block">
                    <div className="px-5 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <button className="px-4 py-2 w-full font-medium text-white rounded border bg-navyblue hover:text-white border-purple">
                            Contact Us
                        </button>
                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
