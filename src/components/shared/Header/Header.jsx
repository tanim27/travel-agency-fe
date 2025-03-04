'use client'
import Link from 'next/link'
import { useState } from 'react'
import { GiCrossedBones } from 'react-icons/gi'
import { LuMenu } from 'react-icons/lu'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='bg-white shadow-lg fixed top-0 left-0 w-full z-50'>
			<div className='container mx-auto px-4 md:px-8 flex justify-between items-center h-16'>
				{/* Logo */}
				<div className='text-3xl md:text-4xl font-bold text-[#00879E]'>
					<Link href='/'>Hijrat Air</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex space-x-8'>
					<Link
						href='/'
						className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A]'
					>
						Home
					</Link>
					<Link
						href='/destinations'
						className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A]'
					>
						Destinations
					</Link>
					<Link
						href='/packages'
						className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A]'
					>
						Packages
					</Link>
					<Link
						href='/about'
						className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A]'
					>
						About
					</Link>
					<Link
						href='/contact'
						className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A]'
					>
						Contact
					</Link>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden'
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <GiCrossedBones size={24} /> : <LuMenu size={32} />}
				</button>

				{/* Mobile Menu */}
				{isOpen && (
					<div
						className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden transition-all duration-300 transform ${
							isOpen
								? 'opacity-100 scale-y-100'
								: 'opacity-0 scale-y-0 pointer-events-none'
						}`}
					>
						<Link
							href='/'
							className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A] py-2'
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
						<Link
							href='/destinations'
							className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A] py-2'
							onClick={() => setIsOpen(false)}
						>
							Destinations
						</Link>
						<Link
							href='/packages'
							className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A] py-2'
							onClick={() => setIsOpen(false)}
						>
							Packages
						</Link>
						<Link
							href='/about'
							className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A] py-2'
							onClick={() => setIsOpen(false)}
						>
							About
						</Link>
						<Link
							href='/contact'
							className='transition-all duration-200 text-lg text-gray-700 hover:text-[#00677A] py-2'
							onClick={() => setIsOpen(false)}
						>
							Contact
						</Link>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
