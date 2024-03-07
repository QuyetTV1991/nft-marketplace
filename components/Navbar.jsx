import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import { logo02 } from '../assets'

const MenuItems = ({ isMobile, active, setActive }) => {
    const generateLink = (index) => {
        switch (index) {
            case 0:
                return '/';
            case 1:
                return '/created-nfts';
            case 2:
                return '/my-nfts';
            default:
                return '/';
        }
    }
    return (
        <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
            {['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((item, index) => (
                <li key={index}
                    onClick={() => setActive(item)}
                    className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 
                    ${active === item
                            ? 'dark:text-white text-nft-dark dark:hover:text-gray-200 hover:text-gray-500'
                            : 'dark:text-nft-gray-1 text-nft-gray-2 hover:text-nft-gray-3'
                        }`}>
                    <Link href={generateLink(index)} passHref>
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [active, setActive] = useState('Explore NFTs')

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

            {/*  Custom Toogle Theme */}
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

            {/*  Menu Items */}
            <div className='md:hidden flex'>
                <ul className='list-none flexCenter flex-row'>
                    <MenuItems active={active} setActive={setActive} />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar