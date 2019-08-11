import React from 'react'
import { Drawer } from 'antd'
import { Switch, Route } from 'react-router-dom'

import AppIntro from './appIntro/AppIntro'
import SideDrawer from './sideDrawer/SideDrawer'
import ProjectBuilder from './projectBuilder/ProjectBuilder'
import ProjectInfo from './projectInfo/ProjectInfo'
import NavigationDrawer from './navigation/NavigationDrawer'

import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			navigationVisible: false,
			summaryVisible: false,
			showIntro: true
		}
	}

	openDrawer = e => {
		let modal = e.target.name + 'Visible'
		this.setState({
			[modal]: true
		})
	}

	onNavClose = () => {
		this.setState({
			navigationVisible: false
		})
	}

	onSumClose = () => {
		this.setState({
			summaryVisible: false
		})
	}

	disableIntro = bool => {
		this.setState({
			showIntro: bool
		})
	}

	render() {
		return (
			<div className='homepage'>
				{/* <ProjectBuilder /> */}
				{this.state.showIntro ? (
					<AppIntro showIntro={this.disableIntro} />
				) : null}
				<div className='homepage_drawer'>
					<SideDrawer openNav={e => this.openDrawer(e)} />
				</div>
				<Switch>
					<Route path='/project-info' component={ProjectInfo} />
					<Route path='/' component={ProjectBuilder} />
				</Switch>
				<Drawer
					placement='top'
					name='navigation'
					className='navigation'
					closable={false}
					onClose={this.onNavClose}
					visible={this.state.navigationVisible}>
					<NavigationDrawer closeModal={this.onNavClose} />
				</Drawer>
				<Drawer
					title='Project Summary'
					placement='right'
					name='summary'
					className='summary'
					closable={true}
					onClose={this.onSumClose}
					visible={this.state.summaryVisible}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</div>
		)
	}
}

export default App
