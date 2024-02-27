"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='py-24 mx-auto my-16 max-w-7xl rounded-2xl lg:px-8 bg-faqblue faq-bg'>
            <h3 className='mb-6 text-xl font-normal text-center text-white'>FAQ</h3>
            <h2 className='text-4xl font-semibold text-center text-white lg:text-6xl'>Frequently asked <br /> questions.</h2>
            <div className="px-4 pt-16 w-full">
                <div className="px-6 py-8 mx-auto mb-5 w-full max-w-5xl bg-white rounded-2xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between px-4 py-2 w-full text-2xl font-medium text-left rounded-lg">
                                    <span>How do I visit?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' :
                                            '' } w-5 h-5 text-purple-500  `}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                                    Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis
                                    sunt diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati beheading.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="px-6 py-8 mx-auto mb-5 w-full max-w-5xl bg-white rounded-2xl">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between px-4 py-2 w-full text-2xl font-medium text-left rounded-lg">
                                    <span>Can I bring my family?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : '' } w-5 h-5 text-purple-500 `}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                                    Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis
                                    sunt diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati beheading.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="px-6 py-8 mx-auto w-full max-w-5xl bg-white rounded-2xl">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between px-4 py-2 w-full text-2xl font-medium text-left rounded-lg">
                                    <span>Where are you located?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : '' } w-5 h-5 text-purple-500  `}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                                    Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis
                                    sunt diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati beheading.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;
