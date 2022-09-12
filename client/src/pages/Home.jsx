import React from 'react'
import FriendForm from '../components/FriendForm'
import Friends from '../components/Friends'
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className='container-center' >

            <div className="flex flex-row flex-wrap">

                <div className="basis-full center mt-5">
                    <h1 className="text-center mb-5 text-4xl font-extrabold tracking-tight leading-none text-red-900 md:text-5xl lg:text-6xl dark:text-white">
                        Welcome - MySQL/Prisma project
                    </h1>
                </div>

                <div className="basis-full center mt-0 mb-3">
                
                    <div className="flex flex-row flex-wrap w-full center">
                            <Icon icon="file-icons:prisma" className='text-4xl lg:text-7xl text-black' />  
                            <Icon icon="akar-icons:graphql-fill" className='text-4xl ml-4 md:ml-8 lg:text-6xl text-black' />                          
                            <Icon icon="logos:aws" className='text-3xl lg:text-5xl ml-4 md:ml-8'/>                     
                            <Icon icon="cib:mysql" className='text-5xl lg:text-7xl ml-4 md:ml-8'/>
                            <Icon icon="logos:cypress" className="text-3xl ml-4 md:ml-8" />    
                    </div>
                    
                </div>

                <div className="basis-full center">
                    <a href="https://github.com/krisgodina/mysql-prisma" className="font-medium text-red-800 dark:text-blue-500 hover:underline flex mb-3"><Icon icon="akar-icons:github-fill" className='text-3xl mr-2' />View Github</a>
                </div>

            </div>

            <hr/><br/>

            <div className="flex flex-row flex-wrap h-max w-full">

                <div className="basis-full center w-full">
                    <FriendForm />
                </div>

                <div className="basis-full center w-full ">
                    <Friends />
                </div>

            </div>
        </div>
    )
}

export default Home