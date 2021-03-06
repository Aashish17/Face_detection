import React  from 'react';

const SignIN=({onRoutechange})=>{
	return(
    <article className="br2 ba dark-gray--black-10mv4  w-200 w-50-m w-25-l mw5  center .bg-orange">
		<main className="pa4 black-80 ">
      <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0  center">Sign In</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
        </div>
      
      </fieldset>
      <div className="">
        <input  onClick={()=>onRoutechange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" type="submit" value="Sign in"/>
      </div>
      <div className="lh-copy  mt3">
        <p onClick={()=>onRoutechange('register')} className="f5   link dim black db  pointer">Register</p>
      </div> 
  	</div>
	</main>
  </article>

		)


}

export default SignIN;