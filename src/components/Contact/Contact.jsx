'use client'

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
	const handleMouseMove = (e) => {
		const btn = e.currentTarget
		const rect = btn.getBoundingClientRect()
		btn.style.setProperty('--x', `${e.clientX - rect.left}px`)
		btn.style.setProperty('--y', `${e.clientY - rect.top}px`)
	}

	return (
		<div className='min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-4xl font-bold text-center text-gray-700 mb-12'>
					Contact Us
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8'>
					{/* Contact Form */}
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-xl font-medium text-gray-700 mb-2'
							>
								Name
							</label>
							<input
								type='text'
								id='name'
								placeholder='Your Name'
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00677A] focus:border-transparent transition-all transform-300 placeholder-gray-400'
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-xl font-medium text-gray-700 mb-2'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								placeholder='Your Email'
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00677A] focus:border-transparent transition-all transform-300 placeholder-gray-400'
							/>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-xl font-medium text-gray-700 mb-2'
							>
								Message
							</label>
							<textarea
								id='message'
								rows='5'
								placeholder='Your Message'
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00677A] focus:border-transparent transition-all transform-300 placeholder-gray-400'
							/>
						</div>
						{/* Centered Send Button */}
						<div className='flex justify-center'>
							<button
								type='submit'
								onMouseMove={handleMouseMove}
								className='btn relative overflow-hidden inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl tracking-widest text-gray-700 hover:text-white rounded-full before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full before:bg-[#00879E] hover:before:w-[400px] hover:before:h-[400px] transition-colors duration-300'
							>
								<span className='relative z-10'>Send</span>
							</button>
						</div>
					</form>

					{/* Contact Information and Map */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold text-gray-700'>
								Contact Information
							</h2>
							<div className='space-y-4 text-gray-600'>
								{/* Phone */}
								<a
									href='tel:123-456-7890'
									className='flex items-center space-x-3 group hover:text-[#00677A] transition-all transform-300'
								>
									<div className='p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all transform-300'>
										<FaPhone className='text-[#00879E] group-hover:text-[#00677A] w-5 h-5' />
									</div>
									<p>Phone: 123-456-7890</p>
								</a>

								{/* Email */}
								<a
									href='mailto:info@example.com'
									className='flex items-center space-x-3 group hover:text-[#00677A] transition-all transform-300'
								>
									<div className='p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all transform-300'>
										<FaEnvelope className='text-[#00879E] group-hover:text-[#00677A] w-5 h-5' />
									</div>
									<p>Email: info@example.com</p>
								</a>

								{/* Address */}
								<a
									href='https://www.google.com/maps/search/?api=1&query=123+Main+St,+City,+State,+Zip'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center space-x-3 group hover:text-[#00677A] transition-all transform-300'
								>
									<div className='p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all transform-300'>
										<FaMapMarkerAlt className='text-[#00879E] group-hover:text-[#00677A] w-5 h-5' />
									</div>
									<p>Address: 123 Main St, City, State, Zip</p>
								</a>
							</div>
						</div>

						{/* Map */}
						<div className='rounded-lg overflow-hidden shadow-lg'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.831396447892!2d-74.00601598459156!3d40.71277577933163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259abde1c3fd3%3A0x6c22b69ec3377a62!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1626359686390!5m2!1sen!2sus'
								width='100%'
								height='300'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
								className='rounded-lg'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
