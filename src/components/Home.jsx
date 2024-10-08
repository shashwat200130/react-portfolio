import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-400">Hi, My Name Is </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Shashwat Verma</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">I have experience working as a software Engineer Intern at Amazon, where I developed scalable software solutions, improved my coding skills in C++, Python and Java and became familiar with AWS service like EC2, S3 and Lamda. I'm proficient in web development with expertise in React JS, Node JS and MongoDB.
            </p>
            <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400">View Work 
                    <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3"/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home