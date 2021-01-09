import React from "react";
import Header from "./components/Header";
import { ParallaxProvider } from 'react-scroll-parallax';
import Cardn from "./components/Cardn";
import info from "./info"
import Inputf from "./components/Inputf"
import Exp from "./components/Image";
import { render } from "@testing-library/react";
import Image from "./components/Image"
import BackgroundSlider from 'react-background-slider'
import Contact from "./components/Contact"




function CreateCard(info)
{
return(
<Cardn 
    key={info.id}
    title={info.title}
     text={info.text} 
     img={info.img}
     />
)
}
 



    export default function App()
{
    
    return(
        <div>
    <BackgroundSlider
    images={['https://cdn.statically.io/img/wallpaperplay.com/walls/full/a/c/9/29100.jpg','https://ak.picdn.net/shutterstock/videos/22980022/thumb/1.jpg']}
    duration={10} transition={2} />
            <Header />   
  
            <Contact />
           <div style={{marginLeft:"auto",marginRight:"auto",display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop:'9px'}}><button onClick={() => window.location.reload(false)} className="reload">Click to reload!</button></div>

        </div>
    )
}

