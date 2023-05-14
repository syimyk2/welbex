import Footer from './Footer'
import Header from './Header'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className='w-full max-w-[1140px] m-auto'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
