import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { LuFacebook } from 'react-icons/lu'

const Footer = () => {
	return (
		<footer className='bg-[#00879E] text-white py-8'>
			<div className='container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
				{/* About */}
				<div>
					<h3 className='text-[#fff] text-xl font-semibold'>About Us</h3>
					<p className='mt-2 text-gray-300'>
						Hijrat Air Travels is your perfect travel companion, offering the
						best destinations and packages.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className='text-[#fff] text-xl font-semibold'>Quick Links</h3>
					<ul className='mt-2 space-y-2'>
						<li>
							<Link
								href='/about'
								className='text-gray-300 hover:text-[#333333] transition-all duration-300'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='text-gray-300 hover:text-[#333333] transition-all duration-300'
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href='/terms-&-conditions'
								className='text-gray-300 hover:text-[#333333] transition-all duration-300'
							>
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link
								href='/privacy-policy'
								className='text-gray-300 hover:text-[#333333] transition-all duration-300'
							>
								Privacy Policy
							</Link>
						</li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h3 className='text-[#fff] text-xl font-semibold'>Follow Us</h3>
					<div className='mt-2 flex space-x-4'>
						<Link
							href='https://www.facebook.com/profile.php?id=100064134243196'
							target='_blank'
							className='text-gray-300 hover:text-[#333333] transition-all duration-300'
						>
							<LuFacebook size={26} />
						</Link>
						<Link
							href='https://www.instagram.com/hijratair/'
							target='_blank'
							className='text-gray-300 hover:text-[#333333] transition-all duration-300'
						>
							<FaInstagram size={26} />
						</Link>
						<Link
							href='https://x.com/MDAsraf32972026'
							target='_blank'
							className='text-gray-300 hover:text-[#333333] transition-all duration-300'
						>
							<FaXTwitter size={26} />
						</Link>
					</div>
				</div>
			</div>

			<div className='mt-8 text-center text-[#fff] text-sm'>
				&copy; {new Date().getFullYear()} SwiftPeak. All rights reserved.
			</div>
		</footer>
	)
}

export default Footer
