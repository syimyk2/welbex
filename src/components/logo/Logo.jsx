import React from 'react'
// import { ReactComponent as LogoSvg } from '../../assets/Vector.svg'
import logoSvg from '../../assets/Vector.svg'

const Logo = () => {
	const ref = React.useRef()
	return (
		<div className='flex items-center gap-1' ref={ref}>
			<img src={logoSvg} alt='logo' />
			<span>WELBEX</span>
			{/* <LogoSvg /> */}
		</div>
	)
}

export default Logo
