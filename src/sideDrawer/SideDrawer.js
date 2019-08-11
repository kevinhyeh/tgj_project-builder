import React from 'react'
import { Tooltip, Button, Icon } from 'antd'

const SideDrawer = props => (
	<>
		<Tooltip placement='left' title='Menu'>
			<Button type='link' name='navigation' onClick={e => props.openNav(e)}>
				<Icon type='menu' />
			</Button>
		</Tooltip>
		<Tooltip placement='left' title='Summary'>
			<Button type='link' name='summary' onClick={e => props.openNav(e)}>
				<Icon type='dollar' />
			</Button>
		</Tooltip>
		<Tooltip placement='left' title='Checkout'>
			<Button type='link' name='summary' disabled>
				<Icon type='shopping-cart' />
			</Button>
		</Tooltip>
	</>
)

export default SideDrawer
