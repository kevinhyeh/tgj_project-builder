import React from 'react'
import ProjectBuilderHome from './ProjectBuilderHome'

import './ProjectBuilder.css'

class ProjectBuilder extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='projectBuilder'>
				<ProjectBuilderHome />
			</div>
		)
	}
}

export default ProjectBuilder
