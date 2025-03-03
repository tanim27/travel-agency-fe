import Footer from '@/components/shared/Footer/Footer'
import Header from '@/components/shared/Header/Header'
import '@/styles/globals.css'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata = {
	title: 'Travel Agency',
	description:
		'This is a simple travel agency app created by Abdullah Al Mahmud',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='flex flex-col min-h-screen'>
				<Header />
				<main className=''>{children}</main>
				<a
					href='tel:01629358838'
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
