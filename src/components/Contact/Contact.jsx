'use client'

import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'

const Contact = () => {
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [errors, setErrors] = useState({})

	const handleMouseMove = (e) => {
		const btn = e.currentTarget
		const rect = btn.getBoundingClientRect()
		btn.style.setProperty('--x', `${e.clientX - rect.left}px`)
		btn.style.setProperty('--y', `${e.clientY - rect.top}px`)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })) // Clear error on change
	}

	const validateForm = () => {
		let tempErrors = {}
		if (!formData.name.trim()) tempErrors.name = 'Name is required'
		if (!formData.email.trim()) {
			tempErrors.email = 'Email is required'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			tempErrors.email = 'Invalid email format'
		}
		if (!formData.message.trim()) tempErrors.message = 'Message is required'
		setErrors(tempErrors)
		return Object.keys(tempErrors).length === 0
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!validateForm()) return

		const serviceID = 'service_ug3nf3g'
		const templateID = 'template_xczc7zg'
		const userID = 'kNCkb7_AiOtjrP6XH'

		const emailData = {
			...formData,
			to_name: 'Hijrat Air Travels', // Your business name (recipient)
			from_name: formData.name, // User's name (sender)
			from_email: formData.email, // User's email address (so you can reply)
			reply_to: formData.email, // User's email address (so you can reply)
		}

		emailjs.send(serviceID, templateID, emailData, userID).then(
			(response) => {
				enqueueSnackbar('Your message has been sent successfully!', {
					variant: 'success',
				})
				setFormData({ name: '', email: '', message: '' }) // Reset form
				router.push('/')
			},
			(error) => {
				enqueueSnackbar('Failed to send the message. Please try again.', {
					variant: 'error',
				})
			},
		)
	}

	return (
		<div className='min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-4xl font-bold text-center text-gray-700 mb-12'>
					Contact Us
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8'>
					{/* Contact Form */}
					<form
						className='space-y-6'
						onSubmit={handleSubmit}
					>
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
								name='name'
								placeholder='Your Name'
								value={formData.name}
								onChange={handleChange}
								className={`w-full px-4 py-3 border ${
									errors.name ? 'border-red-500' : 'border-gray-300'
								} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00677A] focus:border-transparent transition-all transform-300 placeholder-gray-400`}
							/>
							{errors.name && (
								<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
							)}
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
								name='email'
								placeholder='Your Email'
								value={formData.email}
								onChange={handleChange}
								className={`w-full px-4 py-3 border ${
									errors.email ? 'border-red-500' : 'border-gray-300'
								} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00677A] focus:border-transparent transition-all transform-300 placeholder-gray-400`}
							/>
							{errors.email && (
								<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
							)}
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
								name='message'
								rows='5'
								placeholder='Your Message'
								value={formData.message}
								onChange={handleChange}
								className={`w-full px-4 py-3 border ${
									errors.message ? 'border-red-500' : 'border-gray-300'
								} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00677A] focus:border-transparent transition-all transform-300 placeholder-gray-400`}
							/>
							{errors.message && (
								<p className='text-red-500 text-sm mt-1'>{errors.message}</p>
							)}
						</div>

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
								<div className='flex items-center space-x-3 group transition-all transform-300'>
									<div className='p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all transform-300'>
										<IoCall className='text-[#00879E] group-hover:text-[#00677A] w-5 h-5' />
									</div>
									<a href='tel:8801813298910'>
										<p className='group-hover:text-[#00677A] transition-all transform-300 cursor-pointer'>
											Phone: 01813298910
										</p>
									</a>
								</div>

								<div className='flex items-center space-x-3 group transition-all transform-300'>
									<div className='p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all transform-300'>
										<IoCall className='text-[#00879E] group-hover:text-[#00677A] w-5 h-5' />
									</div>
									<a href='tel:8801678170489'>
										<p className='group-hover:text-[#00677A] transition-all transform-300 cursor-pointer'>
											Phone: 01678170489
										</p>
									</a>
								</div>

								{/* Email */}
								<div className='flex items-center space-x-3 group transition-all transform-300'>
									<div className='p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all transform-300'>
										<FaEnvelope className='text-[#00879E] group-hover:text-[#00677A] w-5 h-5' />
									</div>
									<a href='mailto:hijratairweb@gmail.com'>
										<p className='group-hover:text-[#00677A] transition-all transform-300'>
											Email: hijratairweb@gmail.com
										</p>
									</a>
								</div>

								{/* Address */}
								<div className='flex items-center space-x-3 group transition-all transform-300'>
									<div className='p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all transform-300'>
										<FaMapMarkerAlt className='text-[#00879E] group-hover:text-[#00677A] w-5 h-5' />
									</div>
									<a
										href='https://maps.app.goo.gl/LpcTfENEU2PQdMDY6'
										target='_blank'
										rel='noopener noreferrer'
									>
										<p className='group-hover:text-[#00677A] transition-all transform-300'>
											65/2/1, Paramount Heights, Box Culvert Road, Purana
											Paltun, Dhaka-1000.
										</p>
									</a>
								</div>
							</div>
						</div>

						{/* Map */}
						<div className='rounded-lg overflow-hidden shadow-lg'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4454504787764!2d90.4119444740997!3d23.731489589504445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84f8fd87b8f%3A0xf7ca84a79c284559!2zUEFSQU1PVU5UIEhFSUdIVFMv4Kaq4Ka-4Kah4Ka84Ka-4Kau4Ka-4KaJ4Kao4KeN4KafIOCmueCmvuCmh-Cmn-CmuA!5e0!3m2!1sen!2sbd!4v1741018133451!5m2!1sen!2sbd'
								width='600'
								height='450'
								style={{ border: 0 }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
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
