import React from 'react'
import logoSvg from '../../assets/Vector.svg'
import logoWelbex from '../../assets/logo.svg'

const Logo = () => {
	const ref = React.useRef()
	return (
		<div className='flex items-center gap-1' ref={ref}>
			<img src={logoSvg} alt='logo' />
			<img src={logoWelbex} alt='logowelbex' />
		</div>
	)
}

export default Logo
