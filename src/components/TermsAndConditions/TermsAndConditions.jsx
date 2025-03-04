const TermsAndConditions = () => {
	return (
		<div className='min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-5xl mx-auto'>
				<h1 className='font-bold text-4xl text-gray-700 text-center mb-12'>
					Terms & Conditions
				</h1>
				<div className='bg-white rounded-lg shadow-lg p-8'>
					<section className='mb-6'>
						<h2 className='font-semibold text-justify text-xl text-gray-700'>
							1. Introduction
						</h2>
						<p className='text-justify text-md text-gray-700 pl-6'>
							Welcome to Hijrat Air Travels. By accessing and using our website,
							you agree to comply with the following Terms & Conditions. If you
							do not agree, please refrain from using our services.
						</p>
					</section>

					<section className='mb-6'>
						<h2 className='font-semibold text-justify text-xl text-gray-700'>
							2. Booking & Payments
						</h2>
						<ul className='text-justify text-md text-gray-700 list-disc pl-6'>
							<li>All flight bookings are subject to availability.</li>
							<li>
								Full payment is required at the time of booking unless otherwise
								stated.
							</li>
							<li>Prices are subject to change without prior notice.</li>
						</ul>
					</section>

					<section className='mb-6'>
						<h2 className='font-semibold text-justify text-xl text-gray-700'>
							3. Cancellation & Refunds
						</h2>
						<ul className='text-justify text-md text-gray-700 list-disc pl-6'>
							<li>
								Cancellation policies vary depending on the airline and ticket
								type.
							</li>
							<li>
								Refund requests must be made in writing and may be subject to
								processing fees.
							</li>
							<li>
								We are not responsible for airline cancellations, delays, or
								rescheduling.
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	)
}

export default TermsAndConditions
