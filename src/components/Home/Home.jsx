'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BsCheck2Circle } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa6'
import { GrLinkedin } from 'react-icons/gr'
import { SiFacebook } from 'react-icons/si'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
			name: 'Sujon Howlader',
			review:
				'Hijrat Air Travels made my trip unforgettable! The service was amazing, and the destinations were breathtaking!',
			image: '/images/team/person.jpg',
		},
		{
			name: 'Iqbal Karim',
			review:
				'Amazing service and smooth booking! Highly recommend Hijrat Air Travels for your next adventure.',
			image: '/images/team/person.jpg',
		},
	],
	team: [
		{
			name: 'Md Asraful Hoque',
			role: 'Chairman',
			image: '/images/team/Chairman.jpg',
			linkedin: 'https://www.linkedin.com/in/md-asraful-hoque-277858238/',
			whatsapp: '',
			facebook: 'https://www.facebook.com/asraful1691',
		},
		{
			name: 'Jahid Mahbub',
			role: 'Vice President',
			image: '/images/team/VicePresident.jpg',
			linkedin: 'https://www.linkedin.com/in/arabby1/',
			whatsapp: '',
			facebook: 'https://www.facebook.com/arabby1',
		},
		{
			name: 'Ziaul Haque',
			role: 'CEO',
			image: '/images/team/CEO.jpg',
			linkedin: '',
			whatsapp: '',
			facebook: 'https://www.facebook.com/ziaul.haque.960566',
		},
		{
			name: 'Jahangir Alam',
			role: 'Manager',
			image: '/images/team/Manager.jpg',
			linkedin: '',
			whatsapp: '',
			facebook: 'https://www.facebook.com/profile.php?id=100010862076691',
		},
		{
			name: 'Nanto Chandro',
			role: 'Branch Manager, Muradnagar, Cumilla',
			image: '/images/team/BranchManager.jpg',
			linkedin: '',
			whatsapp: '',
			facebook: 'https://www.facebook.com/nanto.chandra',
		},
		{
			name: 'Habibul Hoque',
			role: 'Branch Executive, Bakhrabad, Cumilla',
			image: '/images/team/BranchExecutive.jpg',
			linkedin: '',
			whatsapp: '',
			facebook: 'https://www.facebook.com/mdhabibulhaq.tushar',
		},
		{
			name: 'Abdul Kader',
			role: 'Public Relation Officer',
			image: '/images/team/PRO.jpg',
			linkedin: '',
			whatsapp: '',
			facebook: 'https://www.facebook.com/abdulkader.khan.9469',
		},
		{
			name: 'Zakariya Shanto',
			role: 'Reservation Officer & Executive',
			image: '/images/team/ROE.jpg',
			linkedin: '',
			whatsapp: '',
			facebook: 'https://www.facebook.com/fatuuu.shanto',
		},
	],
	chairman: {
		name: 'Md Asraful Hoque',
		image: '/images/team/Chairman.jpg',
		message:
			'At Hijrat Air Travels, we are committed to providing exceptional service and ensuring that every journey is a memorable one. Our team works tirelessly to make your travel dreams a reality. Thank you for trusting us with your travel needs.',
	},
}

export const Home = () => {
	const handleMouseMove = (e) => {
		const btn = e.currentTarget
		const rect = btn.getBoundingClientRect()
		btn.style.setProperty('--x', `${e.clientX - rect.left}px`)
		btn.style.setProperty('--y', `${e.clientY - rect.top}px`)
	}

	return (
		<div className='bg-gray-100 pt-16'>
			<section className='relative h-[500px] flex items-center justify-center mb-24'>
				{/* Background Image */}
				<div className='absolute inset-0 w-full h-screen'>
					<Image
						src='/images/background/background.jpg'
						alt='Travel Background'
						layout='fill'
						objectFit='cover'
						priority
					/>
					{/* Overlay */}
					<div className='absolute inset-0 bg-black/50'></div>
				</div>

				{/* Content */}
				<div className='text-center text-white z-10'>
					<h1 className='text-4xl md:text-6xl font-bold'>Explore The World</h1>
					<p className='mt-2 text-lg'>
						Discover your next adventure with Hijrat Air Travels.
					</p>
					<Link href='/destinations'>
						<button
							onMouseMove={handleMouseMove}
							className='btn relative overflow-hidden inline-flex mt-4 px-8 py-3 bg-gray-200 font-semibold text-xl tracking-widest text-gray-700 hover:text-white rounded-full before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full before:bg-[#00879E] hover:before:w-[400px] hover:before:h-[400px] transition-colors duration-300'
						>
							<span className='relative z-10'>Find Destinations</span>
						</button>
					</Link>
				</div>
			</section>

			{/* Popular Destinations (Auto Slider) */}
			<section className='py-12 px-4 container mx-auto'>
				<h1 className='font-bold text-4xl text-gray-700 text-center mb-12'>
					Popular Destinations
				</h1>
				<Swiper
					modules={[Autoplay, Pagination]}
					slidesPerView={1}
					spaceBetween={20}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					pagination={{ clickable: true }}
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					loop={true}
					className='w-full'
				>
					{data.destinations.map((dest, index) => (
						<SwiperSlide key={index}>
							<div className='relative rounded-xl overflow-hidden shadow-lg'>
								<Image
									src={dest.image}
									alt={dest.name}
									width={400}
									height={250}
									className='w-full h-64 object-cover'
								/>
								<div className='absolute bottom-0 left-0 w-full bg-black/60 p-3 text-white'>
									<h3 className='text-lg font-semibold'>{dest.name}</h3>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			{/* Testimonials Section */}
			<section className='py-12 px-4 container mx-auto'>
				<h1 className='font-bold text-4xl text-gray-700 text-center mb-12'>
					What Our Customers Say
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{data.testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='p-6 bg-white rounded-xl shadow-md text-center'
						>
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								width={100}
								height={100}
								className='mx-auto rounded-full h-36 w-36'
							/>
							<p className='mt-3 text-gray-700 italic'>
								&quot;{testimonial.review}&quot;
							</p>
							<h3 className='font-bold text-lg text-center text-[#00879E] mt-2'>
								{testimonial.name}
							</h3>
						</div>
					))}
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='bg-gray-200 py-12 px-4'>
				<div className='container mx-auto text-center'>
					<h1 className='font-bold text-4xl text-gray-700 mb-6'>
						Why Choose Hijrat Air Travels?
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{Object.entries(data.features).map(([title, desc], index) => (
							<div
								key={index}
								className='p-6 bg-white rounded-xl shadow-md'
							>
								<div className='text-[#00677A] flex justify-center'>
									<BsCheck2Circle size={40} />
								</div>
								<h3 className='text-xl font-semibold mt-2'>{title}</h3>
								<p className='text-gray-600 mt-1'>{desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className='py-16 px-6 text-white'>
				<div className='container mx-auto text-center'>
					<h1 className='font-bold text-4xl text-gray-700 mb-12'>
						Meet Our Team
					</h1>
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
										target={member.linkedin ? '_blank' : '_self'}
										rel={member.linkedin ? 'noopener noreferrer' : undefined}
									>
										<GrLinkedin className='w-8 h-8 text-[#16404D] hover:text-[#00677A] transition' />
									</Link>
									<Link
										href={
											member.whatsapp
												? `https://api.whatsapp.com/send?phone=${member.whatsapp}`
												: '#'
										}
										target={member.whatsapp ? '_blank' : '_self'}
										rel={member.whatsapp ? 'noopener noreferrer' : undefined}
									>
										<FaWhatsapp className='w-8 h-8 text-[#16404D] hover:text-[#00677A] transition' />
									</Link>
									<Link
										href={member.facebook || '#'}
										target='_blank'
									>
										<SiFacebook className='w-8 h-8 text-[#16404D] hover:text-[#00677A] transition' />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Message from the Chairman */}
			<section className='py-16 px-6'>
				<div className='container mx-auto flex flex-col md:flex-row items-center gap-6'>
					<Image
						src={data.chairman.image}
						alt={data.chairman.name}
						width={500}
						height={500}
						className='rounded-xl'
					/>
					<div>
						<h1 className='font-bold text-4xl text-gray-700 mb-3'>
							Message from Our Chairman
						</h1>
						<p className='text-justify text-gray-700 italic'>
							&quot;{data.chairman.message}&quot;
						</p>
						<h3 className='font-bold text-lg text-justify text-[#00879E] mt-2'>
							{data.chairman.name}
						</h3>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='bg-gray-200 text-white text-center py-12 '>
				<h1 className='font-bold text-3xl text-gray-700'>
					Ready for Your Next Adventure?
				</h1>
				<p className='text-gray-700 mt-2'>
					Book now and start your journey with Hijrat Air Travels.
				</p>
				<Link href='/contact'>
					<button
						onMouseMove={handleMouseMove}
						className='btn relative overflow-hidden inline-flex mt-4 px-8 py-3 bg-gray-300 font-semibold text-xl tracking-widest text-gray-800 hover:text-white rounded-full before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full before:bg-[#00879E] hover:before:w-[400px] hover:before:h-[400px] transition-colors duration-300'
					>
						<span className='relative z-10'>Contact</span>
					</button>
				</Link>
			</section>
		</div>
	)
}
