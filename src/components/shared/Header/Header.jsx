'use client'
import { Menu, X } from 'lucide-react' // Install lucide-react for icons
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
			<div className='container mx-auto px-4 md:px-8 flex justify-between items-center h-16'>
				{/* Logo */}
				<Link
					href='/'
					className='text-4xl font-bold text-[#00879E]'
				>
					TravelGo
				</Link>

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
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				{/* Mobile Menu */}
				{isOpen && (
					<div className='transition-all duration-200 absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden'>
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
