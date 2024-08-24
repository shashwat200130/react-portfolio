import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealState from '../assets/realestate.jpg'
import Ecommerce from '../assets/Ecommerce.png'
import FileShare from '../assets/FileShare.png'
import Trading from '../assets/Trading.png'
import Portfolio from '../assets/Portfolio.png'
import MLAPP from '../assets/MLAPP.png'

const Work = () => {
    return (
        <div name='work' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="py-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-400">Work</p>
                    <p className="py-6">Check out some of my recent works</p>
                </div>

                {/* Conatiner */}

                <div
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid Item */}

                    <div style={{ backgroundImage: `url(${Ecommerce})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Ecommerce Website
                            </span>
                            <div className="pt-8 text-center">
                                <a href="http://">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/shashwat200130/ecommerce_website">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${FileShare})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Filesharing App
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://file-sharing-app-opal-nine.vercel.app/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/shashwat200130/File-sharing-app">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}

                    <div style={{ backgroundImage: `url(${Trading})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Algorithmic Trading
                            </span>
                            <div className="pt-8 text-center">
                                <a href="http://">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="http://">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Portfolio})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Portfolio
                            </span>
                            <div className="pt-8 text-center">
                                <a href="http://">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/shashwat200130/react-portfolio">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}

                    <div style={{ backgroundImage: `url(${MLAPP})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Machine Learning App
                            </span>
                            <div className="pt-8 text-center">
                                <a href="http://">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/shashwat200130/ML-APP">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${RealState})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="http://">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="http://">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work