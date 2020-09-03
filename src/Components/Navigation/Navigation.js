import React from 'react';


const Navigation=({onRoutechange ,isSignedIN})=>{

	 
	 	if(isSignedIN){
			return(
	 				<nav  style={{ display:'flex' , justifyContent :'flex-end'}}>
	 					<p onClick={ ()=>onRoutechange('signout') } className='link dim black f3 underline pa3 pv0  pointer'>Sign Out</p>
	 				</nav>	
	 				)
					}
			else{
				return(<div>
						<nav  style={{ display:'flex' , justifyContent :'flex-end'}}>
	 					<p onClick={ ()=>onRoutechange('signin') } className='link dim black f3 underline pa3 pv0  pointer'>Sign In</p>
	 					<p onClick={ ()=>onRoutechange('register') } className='link dim black f3 underline pa3 pv0  pointer'>Register</p>
	 					</nav>
	 					</div>
					)
				}
	 		   
	 	}


export default Navigation;  