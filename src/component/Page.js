import React from 'react'
import Logo from './Logo.png'
import Home from './Home.png'
import Arro from './arro.png'
import Bulb from './bulb.png'
import Volu from './volu.png'
import Relod from './relod.png'
import Right from './right.png'
import Left from './left.png'
import Box from './box.png'
import Seclogo from './seclogo.png'
import Plus from './plus.png'
import Down from './down.png'
function Page() {
    return (
        <div className="bg-gray-50">
            <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img className="h-8 ml-10 w-auto mr-2" src={Logo} alt="Logo" />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-500 hover:text-white hover:border-white">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto justify-end">
                    <div className="text-18">
                        <a href="#home" className="block mt-5 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-5">
                            Home
                        </a>
                        <a href="#flashcard" className="block mt-5 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-5">
                            Flashcard
                        </a>
                        <a href="#contact" className="block mt-5 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600">
                            Contact
                        </a>
                        <a href="#contact" className="block mt-5 ml-5 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600">
                            FAQ
                        </a>
                    </div>
                    <div>
                        <a href="#login" className="inline-block text-sm ml-5 px-5 py-2 leading-none border rounded-2xl  hover:border-transparent text-gray-50 bg-gradient-to-b from-blue-900 to-blue-700 mt-5 lg:mt-0 w-full lg:w-auto">
                            Login
                        </a>

                    </div>
                </div>
            </nav>
            <div className="bg-gray-50 flex items-center ml-10 mt-8">
                <img className="h-8 ml-6 w-auto mr-2" src={Home} alt="Logo" />
                <img className="h-4 ml-4 w-auto mr-2" src={Arro} alt="Logo" />
                <p className='text-gray-500 font-semibold ml-3'>Flashcard</p>
                <img className="h-4 ml-4 w-auto mr-2" src={Arro} alt="Logo" />
                <p className='text-gray-500 font-semibold ml-3'>Mathematics</p>
                <img className="h-4 ml-4 w-auto mr-2" src={Arro} alt="Logo" />
                <p className='text-blue-900 font-semibold ml-3'>Relation and Function</p>
            </div>
            <div className='ml-10 mt-6'>
            <div className=' bg-gradient-to-b from-blue-900 to-blue-600 text-transparent bg-clip-text flex items-center ml-6 mt-8 font-bold text-2xl'>Relation and Function ( Mathematics )</div>
            </div>





            
            
            <div className='flex justify-center mt-8'>
                <a href="/" className='ml-6 w-14 pl-2 mr-6 text-blue-900 font-medium border-b-2 border-blue-900 '>Study</a>
                <a href="/" className='ml-5 mr-6 text-gray-500 font-medium'>Quiz</a>
                <a href="/" className='ml-6 mr-6 text-gray-500 font-medium'>Test</a>
                <a href="/" className='ml-6 mr-6 text-gray-500 font-medium'>Game</a>
                <a href="/" className='ml-6 mr-6 text-gray-500 font-medium'>Others</a>
            </div>

            <div className=' mt-6 max-w-xl h-72  mx-auto bg-gradient-to-bl from-blue-800 to-blue-500 rounded-3xl'>
            <div className='flex'>
            <img src={Bulb} className="h-6 mt-6 ml-6  mr-24" alt="" />
            <img src={Volu} className="h-6 mt-6  ml-96   mr-2" alt="" />
            </div>
            <p className='ml-48 mt-20 text-gray-50 font-medium text-2xl'>9 + 6 + 7x - 2x - 3</p>
            </div>
            <div className='flex justify-center pt-6'>
                <img src={Relod} className='h-6 mt-2  w-auto mr-2' alt="" />
                <img src={Right} className='h-10  w-auto mr-2 ml-28' alt="" />
                <p className='ml-8 mt-2 mr-8'>01/10</p>
                <img src={Left} className='h-10  w-auto mr-28' alt="" />
                <img src={Box} className='h-6 mt-2  w-auto mr-2' alt="" />
            </div>
            <div className='flex ml-6'>
                <img src={Seclogo} className='h-20 mt-2 ml-4 w-auto mr-96' alt="" />
                <img src={Plus} className='h-7 mt-9  w-auto mt mr-2 ml-96 pl-20 ' alt="" />
                <p className='text-blue-900 font-semibold mt-9'>Create Flashcard</p>
            </div>



            <div>
                <p className='text-blue-900 border-blue-800 mt-20 text-2xl font-semibold ml-14'>FAQ</p>
            </div>
            <div className='ml-14 mt-5'>
                <p className='rounded-lg text-gray-900 border border-tan mb-2 border-blue-600 p-3 inline-block '>Can education flashcard be used for all age groups?
                <img src={Down} className='ml-48 h-3 inline-block' alt="" /></p><br/>
                <p className='rounded-lg text-gray-900 border mb-2 border-blue-600 border-tan p-3 inline-block'>How do education flashcard work?<img src={Down} className='h-3 inline-block ml-72 pl-6' alt="" /></p><br/>
                <p   className='text-gray-900 rounded-lg border mb-72 border-blue-600 border-tan p-3 inline-block    '>Can education flashcard be used for test preparation?<img src={Down} className='h-3 ml-44 inline-block' alt="" /></p>
            </div>
        </div>

    );
}

export default Page