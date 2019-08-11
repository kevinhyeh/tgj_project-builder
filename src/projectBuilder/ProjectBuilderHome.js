import React from 'react'

const ProjectBuilderHome = props => (
	<>
		<div className='projectBuilder_category'>
			<div className='projectBuilder_category-text'>
				<h3 className='projectBuilder_category-title bold tu'>Branding</h3>
				{/* <ul className='projectBuilder_category-list'>
					<li className='tu bold'>Custom Logo</li>
					<li className='tu bold'>Stylish Business Cards</li>
					<li className='tu bold'>Social Media</li>
					<li className='tu bold'>Banner</li>
				</ul> */}
			</div>
			<div className='projectBuilder_category-image projectBuilder_branding'></div>
		</div>
		<div className='projectBuilder_category'>
			<div className='projectBuilder_category-text'>
				<h3 className='projectBuilder_category-title tu bold'>Web</h3>
			</div>
			<div className='projectBuilder_category-image projectBuilder_web'></div>
		</div>
		<div className='projectBuilder_category'>
			<div className='projectBuilder_category-text'>
				<h3 className='projectBuilder_category-title tu bold'>Print</h3>
			</div>
			<div className='projectBuilder_category-image projectBuilder_print'></div>
		</div>
		<div className='projectBuilder_category'>
			<div className='projectBuilder_category-text'>
				<h3 className='projectBuilder_category-title tu bold'>Other</h3>
			</div>
			<div className='projectBuilder_category-image projectBuilder_other'></div>
		</div>
	</>
)

export default ProjectBuilderHome
