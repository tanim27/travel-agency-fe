'use client'

import Link from 'next/link'

const NotFound = () => {
	const handleMouseMove = (e) => {
		const btn = e.currentTarget
		const rect = btn.getBoundingClientRect()
		btn.style.setProperty('--x', `${e.clientX - rect.left}px`)
		btn.style.setProperty('--y', `${e.clientY - rect.top}px`)
	}

	return (
		<div className='h-screen bg-gray-100 flex flex-col items-center justify-center text-white px-6 text-center'>
			<h1 className='font-bold text-9xl text-[#00879E] animate-bounce'>404</h1>
			<h2 className='font-semibold text-3xl text-[#00879E] mt-4'>
				Page Not Found
			</h2>
			<p className='text-lg text-[#00879E] mt-2 max-w-lg'>
				Oops! The page you’re looking for doesn’t exist. It might have been
				moved or deleted.
			</p>
			<Link href='/'>
				<button
					onMouseMove={handleMouseMove}
					className='btn relative overflow-hidden inline-flex mt-4 px-8 py-3 bg-gray-300 font-semibold text-xl tracking-widest text-gray-700 hover:text-white rounded-full before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full before:bg-[#00879E] hover:before:w-[400px] hover:before:h-[400px] transition-colors duration-300'
				>
					<span className='relative z-10'>Go Home</span>
				</button>
			</Link>
		</div>
	)
}

export default NotFound
