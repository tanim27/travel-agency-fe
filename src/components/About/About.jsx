'use client'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookMessenger, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

export const data = {
	destinations: [
		{ name: 'Bali, Indonesia', image: '/images/destinations/bali.jpeg' },
		{
			name: 'Santorini, Greece',
			image: '/images/destinations/santorini.jpg',
		},
		{ name: 'Kyoto, Japan', image: '/images/destinations/kyoto.jpg' },
		{ name: 'Paris, France', image: '/images/destinations/paris.jpg' },
		{ name: 'Maldives', image: '/images/destinations/maldives.jpg' },
	],
	features: {
		'Best Prices': 'We offer unbeatable travel deals.',
		'Expert Guides': 'Our guides ensure an amazing experience.',
		'24/7 Support': "We're here for you anytime, anywhere.",
	},
	testimonials: [
		{
			name: 'John Doe',
			review:
				'TravelGo made my trip unforgettable! The service was amazing, and the destinations were breathtaking!',
			image: '/images/team/person.jpg',
		},
		{
			name: 'Sarah Lee',
			review:
				'Amazing service and smooth booking! Highly recommend TravelGo for your next adventure.',
			image: '/images/team/person.jpg',
		},
	],
	team: [
		{
			name: 'John Doe',
			role: 'Founder & CEO',
			image: '/images/team/person.jpg',
			linkedin: 'https://www.linkedin.com/in/johndoe',
			whatsapp: '1234567890', // Use actual phone number
			messenger: 'johndoe',
		},
		{
			name: 'Sarah Smith',
			role: 'Travel Consultant',
			image: '/images/team/person.jpg',
			linkedin: 'https://www.linkedin.com/in/sarahsmith',
			whatsapp: '0987654321',
			messenger: 'sarahsmith',
		},
		{
			name: 'Michael Brown',
			role: 'Marketing Manager',
			image: '/images/team/person.jpg',
			linkedin: 'https://www.linkedin.com/in/michaelbrown',
			whatsapp: '1122334455',
			messenger: 'michaelbrown',
		},
	],
	chairman: {
		name: 'Robert Brown',
		image: '/images/team/person.jpg',
		message:
			'At TravelGo, our mission is to create unforgettable travel experiences for our customers. We strive to provide the best service, destinations, and memories that will last a lifetime.',
	},
}

export const About = () => {
	return (
		<div classname=''>
			<h1 className='font-bold text-4xl text-center text-gray-700 pt-20 mb-12'>
				About
			</h1>
			{/* Message from the Chairman */}
			<section className='bg-gray-100 py-12 px-4'>
				<div className='container mx-auto flex flex-col md:flex-row items-center gap-6'>
					<Image
						src={data.chairman.image}
						alt={data.chairman.name}
						width={300}
						height={300}
						className='rounded-xl'
					/>
					<div>
						<h2 className='font-bold text-4xl text-gray-700 mb-3'>
							Message from Our Chairman
						</h2>
						<p className='text-gray-700 italic'>
							&quot;{data.chairman.message}
						</p>
						<h3 className='font-semibold text-lg text-gray-600 mt-3'>
							{data.chairman.name}
						</h3>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className='py-16 px-6 text-white'>
				<div className='container mx-auto text-center'>
					<h2 className='font-bold text-4xl text-gray-700 mb-12'>
						Meet Our Team
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
						{data.team.map((member, index) => (
							<div
								key={index}
								className='relative bg-white p-10 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center border hover:border-[#00879E]'
							>
								{/* Floating Image with Glow */}
								<Image
									src={member.image}
									alt={member.name}
									width={120}
									height={120}
									className='h-48 w-48 rounded-full object-cover border-2 border-[#00677A] shadow-lg'
								/>

								<h3 className='mt-6 text-2xl font-bold text-[#00879E]'>
									{member.name}
								</h3>
								<p className='text-gray-700 text-lg font-medium'>
									{member.role}
								</p>

								{/* Social Icons with a Better Layout */}
								<div className='flex gap-4 mt-5'>
									<Link
										href={member.linkedin || '#'}
										target='_blank'
									>
										<FaLinkedin className='w-8 h-8 text-[#16404D] hover:text-[#00677A] transition' />
									</Link>
									<Link
										href={`https://wa.me/${member.whatsapp}`}
										target='_blank'
									>
										<FaWhatsapp className='w-8 h-8 text-[#16404D] hover:text-[#00677A] transition' />
									</Link>
									<Link
										href={`https://m.me/${member.messenger}`}
										target='_blank'
									>
										<FaFacebookMessenger className='w-8 h-8 text-[#16404D] hover:text-[#00677A] transition' />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='bg-gray-100 py-12 px-4'>
				<div className='container mx-auto text-center'>
					<h2 className='font-bold text-4xl text-gray-700 mb-6'>
						Why Choose TravelGo?
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{Object.entries(data.features).map(([title, desc], index) => (
							<div
								key={index}
								className='p-6 bg-white rounded-xl shadow-md'
							>
								<div className='text-blue-600 flex justify-center'>
									<CheckCircle size={40} />
								</div>
								<h3 className='text-xl font-semibold mt-2'>{title}</h3>
								<p className='text-gray-600 mt-1'>{desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-12 px-4 container mx-auto'>
				<h2 className='font-bold text-4xl text-gray-700 text-center mb-12'>
					What Our Customers Say
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{data.testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='p-6 bg-gray-100 rounded-xl shadow-md text-center'
						>
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								width={100}
								height={100}
								className='mx-auto rounded-full h-36 w-36'
							/>
							<p className='mt-3 text-gray-700 italic'>
								&quot;{testimonial.review}
							</p>
							<h3 className='mt-2 font-semibold'>{testimonial.name}</h3>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
