import Image from 'next/image';
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


const Page = () => {
    return (
        <div className="bg-white pt-12 pb-16 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <Image width={400} height={400}
                                    className="h-48 w-full object-cover"
                                    src="https://images.unsplash.com/photo-1642715614665-8e5534e7e427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="about"
                                />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">
                                            Our Story
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed non risus. Suspendisse lectus tortor, dignissim sit
                                            amet, adipiscing nec, ultricies sed, dolor.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <Image width={400} height={400}
                                    className="h-48 w-full object-cover"
                                    src="https://images.unsplash.com/photo-1638866411782-5f59287c19e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="about"
                                />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">
                                            Our Mission
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed non risus. Suspendisse lectus tortor, dignissim sit
                                            amet, adipiscing nec, ultricies sed, dolor.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <Image width={400} height={400}
                                    className="h-48 w-full object-cover"
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="about"
                                />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">
                                            Our Team
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed non risus. Suspendisse lectus tortor, dignissim sit
                                            amet, adipiscing nec, ultricies sed, dolor.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-0 lg:col-span-2">
                    <div className="max-w-md mx-auto sm:max-w-lg lg:max-w-xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Connect With Us
                        </h2>
                        <p className="mt-3 text-lg text-gray-500">
                            Follow us on social media to stay up-to-date with our latest news
                            and promotions!
                        </p>
                        <div className="mt-8 flow-root">
                            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                                <div className="mt-4 ml-8 flex-shrink-0 flex">
                                    <a href="#" className="inline-flex">
                                        <span className="sr-only">Twitter</span>
                                        <FaTwitter className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                                    </a>
                                </div>

                                <div className="mt-4 ml-8 flex-shrink-0 flex">
                                    <a href="#" className="inline-flex">
                                        <span className="sr-only">Facebook</span>
                                        <FaFacebook className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                                    </a>
                                </div>

                                <div className="mt-4 ml-8 flex-shrink-0 flex">
                                    <a href="#" className="inline-flex">
                                        <span className="sr-only">Instagram</span>
                                        <FaInstagram className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page