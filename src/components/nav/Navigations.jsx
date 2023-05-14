const Navigations = () => {
	return (
		<nav className='w-full md:w-auto flex justify-center md:block'>
			<ul className='flex gap-5 items-center justify-center'>
				<li>
					<a className='hover:text-blue-300' href='#'>
						Услуги
					</a>
				</li>
				<li>
					<a className='hover:text-blue-300' href='#'>
						Виджеты
					</a>
				</li>
				<li>
					<a className='hover:text-blue-300' href='#'>
						Интеграции
					</a>
				</li>
				<li>
					<a className='hover:text-blue-300' href='#'>
						Кейсы
					</a>
				</li>
				<li>
					<a className='hover:text-blue-300 hidden md:block' href='#'>
						Сертификаты
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigations
