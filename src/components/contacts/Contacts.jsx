import telegram from '../../assets/telegram.svg'
import viber from '../../assets/viber.svg'
import whatsApp from '../../assets/whatsapp.png'

const Contacts = () => {
	return (
		<div className='hidden gap-4 items-center md:flex'>
			<span>+7 555 555-55-55</span>
			<img src={telegram} alt='Telegram' />
			<img src={viber} alt='Viber' />
			<img src={whatsApp} alt='WhatsApp' />
		</div>
	)
}

export default Contacts
