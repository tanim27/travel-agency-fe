'use client'

import Footer from '@/components/shared/Footer/Footer'
import Header from '@/components/shared/Header/Header'
import '@/styles/globals.css'
import { SnackbarProvider } from 'notistack'
import { FaWhatsapp } from 'react-icons/fa6'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='flex flex-col min-h-screen'>
				<Header />

				<main className=''>
					<SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
				</main>

				<a
					href='https://api.whatsapp.com/send?phone=8801813298910&text=Hello%2C%20I%20am%20interested%20in%20your%20services.'
					target='_blank'
					className='fixed bottom-8 right-8 p-4 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-xl text-white text-3xl transition duration-300'
				>
					<FaWhatsapp />
				</a>
				<Footer />
			</body>
		</html>
	)
}
