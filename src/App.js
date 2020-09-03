import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Form from './Components/Form/Form'
import Particles from "react-tsparticles";
import Clarifai from  'clarifai'
import Facerecognition from './Components/Facerecognition/Facerecognition'
import Header from './Components/Header/Header'
import SignIN from './Components/SignIN/SignIN'
import Register from './Components/Register/Register'

import Rank from './Components/Rank/Rank'
import './App.css'


const app = new Clarifai.App({
 apiKey: '770f55620778410483e63150ea43462c'
});

class App extends React.Component{
 
  constructor(){

    super();
    this.state={

      input:'',
      imageURL:'',
      box:{},
      route:'signin',
      isSignedIN : false
      
      
    }
  }
  

  displayFacebox=(box)=>{

     
    this.setState({box:box})


  }
  Calculatefacelocation=(data)=>{

    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementsByTagName('img')
    const width=  Number(image[1].width);
    const height= Number(image[1].height)
   

     return{

      leftcol: clarifaiFace.left_col*width,
      toprow: clarifaiFace.top_row*height,
      rightcol : width -(clarifaiFace.right_col*width),
      bottomrow :height-(clarifaiFace.bottom_row* height),
    }

    
  }


  onInput=(event)=>{

    this.setState({input:event.target.value});
   
  }
  onSubmit=()=>{

    this.setState({imageURL:this.state.input})
     
    
    

    app.models
    .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response=> this.displayFacebox(this.Calculatefacelocation(response)))
    .catch(err=> console.log("err"))
    
  
}
onRoutechange=(route)=>
{

  if(route==='signout'){
    this.setState({isSignedIN: false})
  }
  else if(route==='home'){

    this.setState({isSignedIN : true})
  }
  this.setState({route:route})
}

  render()
  {


  return ( 
    <div className="App">

    
      <Particles  className="aas"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#c4e7a4",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Navigation isSignedIN={this.state.isSignedIN} onRoutechange={this.onRoutechange}/>
      
      {
 

       this.state.route==='home'?
        
        <div>
        <Header/>
        <Logo/>
        <Rank/>
        <Form onSubmit={this.onSubmit} onInput={this.onInput}/>
        <Facerecognition box={this.state.box} imageURL={this.state.imageURL} />
        </div>
          
      
      :

      (this.state.route==='signin') ?

        <SignIN onRoutechange={this.onRoutechange}/> 
      :

      <Register onRoutechange={this.onRoutechange}/>

      
        
      
     }

    

      
    
     
    </div>
  );
}
}

export default App;
