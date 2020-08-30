import React from 'react';
import './Facerecognition.css'


const Facerecognition=({imageURL , box})=>{

	 return(
	 <div className="ma center ">
	 	<div className='mt2 absolute fb'>
	 		<img src={imageURL} id='Inputimage'alt='' width='300px' height='auto'   />
	 		<div className='bounding-box center'  style={{top:box.toprow , right: box.rightcol, bottom:box.bottomrow , left: box.leftcol} }></div>
		</div>
	 </div>	
	 )
	}
	 


export default Facerecognition;  