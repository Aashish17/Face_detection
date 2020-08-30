import React from 'react'
import './Form.css'

const Form=({onInput ,onSubmit})=>{
	return (
		<div>
			<p className='f3 b AK'>
				Paste your Link here To See Magic
			</p>
			<div className='center aa'>
				<div className='br3 pa4 shadow-3 center'>
					<input type='text' className='f4 pa2  center w-70' 
						onChange={onInput}/>
					<button className='w-20 link ph3 grow pv2 dib black bg-light-green' 
					onClick={onSubmit} >Detect</button>
				</div>
			</div>	
		</div>

	)

}

export default Form ;