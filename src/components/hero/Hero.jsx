const Hero = () => {
	return (
		<div className='flex w-full flex-col md:flex-row px-10 my-[40px] md:my-[68px] md:items-start md:justify-between'>
			{/* first block */}
			<div className='flex flex-col mb-10 max-w-[400px]'>
				<h1 className='text-[36px] md:text-[48px] leading-[58px]'>
					Зарабатывайте больше
				</h1>
				<h2 className='text-[36px] md:text-[68px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-500'>
					с WELBEX
				</h2>
				<p className='mt-5 whitespace-normal'>
					Развиваем и контролируем <br /> продажи за вас
				</p>
			</div>
			{/* second block */}
			<div className='flex flex-col gap-[40px]'>
				<h2 className='text-orange bold md:hidden'>
					Вместе с{' '}
					<span className='font-bold md:uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-500 to-orange-500'>
						бесплатной <br className='hidden md:block' />{' '}
						консультацией{' '}
					</span>
					мы дарим:
				</h2>
				<h2 className='text-orange bold text-left hidden md:block'>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Вместе с{' '}
					<span className='font-bold md:uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-500 to-orange-500'>
						бесплатной <br className='hidden md:block' />{' '}
						консультацией{' '}
					</span>
					мы дарим:
				</h2>
				<div className='flex md:w-full justify-evenly md:justify-between gap-6'>
					<div className='flex flex-col items-end'>
						<h4 className='uppercase md:font-bold text-right'>
							Виджеты
						</h4>
						<p className=' hidden md:block text-right'>
							30 готовых <br /> решений
						</p>
						<br />
						<h4 className='uppercase md:font-bold text-right'>
							Skype Аудит
						</h4>
						<p className='hidden md:block text-right'>
							отдела продажи <br />
							CRM системы
						</p>
					</div>
					<div>
						<h4 className=' uppercase md:font-bold text-right'>
							Dashboard
						</h4>
						<p className='hidden md:block text-right'>
							с показателями
							<br /> вашего бизнеса
						</p>
						<br />
						<h4 className='uppercase md:font-bold text-right'>
							35 дней
						</h4>
						<p className='hidden md:block text-right'>
							использования <br />
							CRM
						</p>
					</div>
				</div>
				<button className='hidden md:block py-4 px-5 bg-blue-500 rounded-none'>
					Получить консультацию
				</button>
			</div>
		</div>
	)
}

export default Hero
