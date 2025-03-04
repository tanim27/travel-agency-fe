'use client'

import { data } from '@/JSON/Data'
import Image from 'next/image'
import Link from 'next/link'
import { BsCheck2Circle } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa6'
import { GrLinkedin } from 'react-icons/gr'
import { SiFacebook } from 'react-icons/si'

const About = () => {
	return (
		<div className='min-h-screen bg-gray-100 py-20'>
			<div className=''>
				<h1 className='text-4xl font-bold text-center text-gray-700 mb-12'>
					About Us
				</h1>
				{/* Message from the Chairman */}
				<section className='bg-gray-200 py-16 px-6'>
					<div className='container mx-auto flex flex-col md:flex-row items-center gap-6'>
						<Image
							src={data.chairman.image}
							alt={data.chairman.name}
							width={500}
							height={500}
							className='rounded-xl'
						/>
						<div>
							<h2 className='font-bold text-4xl text-gray-700 mb-3'>
								Message from Our Chairman
							</h2>
							<p className='text-justify text-gray-700 italic'>
								&quot;{data.chairman.message}&quot;
							</p>
							<h3 className='font-semibold text-lg text-justify text-[#00879E] mt-2'>
								{data.chairman.name}
							</h3>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className='py-16 px-6'>
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

				{/* Why Choose Us */}
				<section className='bg-gray-200 py-16 px-6'>
					<div className='container mx-auto text-center'>
						<h2 className='font-bold text-4xl text-gray-700 mb-6'>
							Why Choose Hijrat Air Travels?
						</h2>
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

				{/* Testimonials Section */}
				<section className='py-16 px-6'>
					<div className='container mx-auto text-center'>
						<h2 className='font-bold text-4xl text-gray-700 text-center mb-12'>
							What Our Customers Say
						</h2>
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
					</div>
				</section>
			</div>
		</div>
	)
}

export default About
