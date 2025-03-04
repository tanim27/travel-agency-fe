const PrivacyPolicy = () => {
	return (
		<div className='min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-5xl mx-auto'>
				<h1 className='font-bold text-4xl text-gray-700 text-center mb-12'>
					Privacy Policy
				</h1>
				<div className='bg-white rounded-lg shadow-lg p-8'>
					<section className='mb-6'>
						<h2 className='font-semibold text-justify text-xl text-gray-700'>
							1. Introduction
						</h2>
						<p className='text-justify text-md text-gray-700 pl-6'>
							Hijrat Air Travels values your privacy and is committed to
							protecting your personal information.
						</p>
					</section>

					<section className='mb-6'>
						<h2 className='font-semibold text-justify text-xl text-gray-700'>
							2. Information We Collect
						</h2>
						<ul className='text-justify text-md text-gray-700 list-disc pl-6'>
							<li>Personal details for booking and customer support.</li>
							<li>
								Payment details processed securely through third-party payment
								providers.
							</li>
							<li>Travel preferences and history to improve our services.</li>
						</ul>
					</section>

					<section className='mb-6'>
						<h2 className='font-semibold text-justify text-xl text-gray-700'>
							3. How We Use Your Information
						</h2>
						<ul className='text-justify text-md text-gray-700 list-disc pl-6'>
							<li>To process flight bookings and provide customer support.</li>
							<li>
								To send confirmation emails, updates, and promotional offers.
							</li>
							<li>To improve our website and services through analytics.</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	)
}

export default PrivacyPolicy
