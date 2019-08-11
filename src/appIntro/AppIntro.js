import React from 'react'
import { Button } from 'antd'

import './AppIntro.css'

// const { Step } = Steps

class AppIntro extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 0
		}
	}

	onStepsChange = current => {
		this.setState({
			current: current
		})
	}

	disableIntro = () => {
		this.props.showIntro(false)
	}

	render() {
		// const { current } = this.state

		return (
			<div className='appIntro'>
				<div className='appIntro_container'>
					<h2 className='appIntro_title tu bold'>The graphic jar</h2>
					<p className='appIntro_desc'>
						Welcome to The Graphic Jar's project builder tool. This tool will
						allow you to build your project in the easiest way possible. First
						time here? We recommend taking our quick tour of the place. If
						you've been here before then please go ahead an skip the tour unless
						you want to see it again.
					</p>
					{/* <Steps current={current} onChange={this.onStepsChange}>
						<Step />
						<Step />
						<Step />
						<Step />
						<Step />
						<Step />
					</Steps> */}
					<div>
						<Button
							className='tu'
							type='secondary'
							onClick={() => this.disableIntro()}>
							Skip
						</Button>
						<Button className='tu' type='primary'>
							Start
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default AppIntro
