import Contacts from '../components/contacts/Contacts'
import Logo from '../components/logo/Logo'
import Navigations from '../components/nav/Navigations'

const Header = () => {
	return (
		<header className='flex items-start justify-between w-full max-w-[1140px] m-auto py-4 px-3 md:px-6 '>
			<div className=' flex-col items-start hidden md:flex  '>
				<Logo />
				<p className='text-[10px] max-w-[160px] mt-2'>
					крупный интегратор CRM <br /> в Росcии и ещё 8 странах
				</p>
			</div>
			<Navigations />
			<Contacts />
		</header>
	)
}

export default Header
