import telegram from '../assets/telegram.svg'
import viber from '../assets/viber.svg'
import whatsApp from '../assets/whatsapp.png'

const Footer = () => {
	return (
		<footer className='w-full max-w-[1140px] m-auto flex flex-col md:flex-row md:justify-between px-6 py-10'>
			<div className='flex items-start flex-col md:flex-row justify-between gap-10 md:gap-[98px]'>
				<ul>
					<li className='uppercase text-[#656566] mb-2 text-sm font-bold'>
						О компании
					</li>
					<li>Партнёрская программа</li>
					<li>Вакансии</li>
				</ul>
				<div className='flex flex-col w-full'>
					<h4 className='uppercase text-[#656566] mb-2 text-sm font-bold'>
						Меню
					</h4>
					<div className='flex gap-20 sm:justify-between md:gap-10 w-full md:w-auto'>
						<ul>
							<li>Расчёт стоимости</li>
							<li>Услуги</li>
							<li>Виджеты</li>
							<li>Интеграции</li>
							<li>Наши клиенты</li>
						</ul>
						<ul>
							<li>Кейсы</li>
							<li>Благодарственные письма</li>
							<li>Расчёт стоимости</li>
							<li>Услуги</li>
							<li>Виджеты</li>
						</ul>
					</div>
				</div>
			</div>
			{/* -------------contacts------------ */}
			<div className='flex flex-col md:items-end mt-10'>
				<h1 className='uppercase text-[#656566] mb-2 text-sm font-bold'>
					Контакты
				</h1>
				<ul className='flex flex-col md:items-end gap-2'>
					<li>+7 555 555-55-55</li>
					<li>
						<div className='flex gap-2'>
							<img src={telegram} alt='Telegram' />
							<img src={viber} alt='Viber' />
							<img src={whatsApp} alt='WhatsApp' />
						</div>
					</li>
					<li>Москва, Путевой проезд 3с1, к 902</li>
				</ul>
				<br />
				<br />
				<p className='text-[12px]'>
					<span className='mr-1'>&copy;</span> WELBEX 2022. Все права
					защищены.
					<br />
					<a
						className='font-[400] underline hover:text-blue-400'
						href='#'
					>
						Политика конфиденциальности
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
