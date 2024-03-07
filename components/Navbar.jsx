import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import { logo02 } from '../assets'

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    return (
        <nav className='flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1'>
            <div className='flex flex-1 flex-row justify-start'>
                <Link href="/" passHref>
                    <div className='flexCenter md:hidden cursor-pointer' onClick={() => { }}>
                        <Image src={logo02} alt='Logo' width={32} height={32} objectFit='contain' />
                        <p className='dark:text-white text-nft-black-1 text-lg ml-1'>CryptoKet</p>
                    </div>
                </Link>
                <Link href="/" passHref>
                    <div className='hidden md:flex' onClick={() => { }}>
                        <Image src={logo02} alt='Logo' width={32} height={32} objectFit='contain' />
                    </div>
                </Link>
            </div>

            <div className='flex flex-initial flex-row justify-end'>
                <div className='flex items-center mr-2'>
                    <input type='checkbox' className='checkbox' id='checkbox' onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                    <label htmlFor='checkbox' className='flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label'>
                        <i className='fas fa-sun' />
                        <i className='fas fa-moon' />
                        <div className='h-3 w-3 absolute bg-white rounded-full ball' />
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default Navbar