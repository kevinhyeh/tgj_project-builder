import React from 'react'
import { Button, Icon } from 'antd'
import { Link } from 'react-router-dom'

import './NavigationDrawer.css'

const NavigationDrawer = props => (
	<div className='navigationDrawer'>
		<Link to='/'>
			<Button
				type='link'
				className='navigationDrawer_category'
				onClick={props.closeModal}>
				<Icon type='home' />
				<p className='navigationDrawer_category-title tu bold'>Home</p>
			</Button>
		</Link>
		<Link to='project-info'>
			<Button
				type='link'
				className='navigationDrawer_category'
				onClick={props.closeModal}>
				<Icon type='project' />
				<p className='navigationDrawer_category-title tu bold'>Project Info</p>
			</Button>
		</Link>
		<Button
			type='link'
			className='navigationDrawer_category'
			onClick={props.closeModal}>
			<Icon type='appstore' />
			<p className='navigationDrawer_category-title tu bold'>Promotions</p>
		</Button>
		<Button
			type='link'
			className='navigationDrawer_category'
			onClick={props.closeModal}>
			<Icon type='question-circle' />
			<p className='navigationDrawer_category-title tu bold'>FAQ</p>
		</Button>
		<Button
			type='link'
			className='navigationDrawer_category'
			onClick={props.closeModal}>
			<Icon type='user' />
			<p className='navigationDrawer_category-title tu bold'>Settings</p>
		</Button>
		<Button
			type='link'
			className='navigationDrawer_category'
			onClick={props.closeModal}>
			<Icon type='login' />
			<p className='navigationDrawer_category-title tu bold'>Login</p>
		</Button>
		{/* <div className='navigationDrawer_category'>
		<Icon type="logout" />
		</div> */}
	</div>
)

export default NavigationDrawer
