import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerator'

const Hero = () => {

    const words ="Transforming Concept into seamless experience"
  return (
    <div className='w-[100vw]'>
    <div className='h-[80vh] flex justify-center items-center'>
    <Spotlight className='h-screen top-10 left-[50%]' fill='purple'/>
    <Spotlight className='h-screen top-50 left-70' fill='purple'/>
    <Spotlight className='h-screen top-80 left-40' fill='purple'/>
    <div className=''>
        
      <TextGenerateEffect className="text-[10px] sm:text-5xl font-bold z-20 lg:text-6xl text-center"  words={words}/>
      <TextGenerateEffect className="text-[18px] sm:text-[20px]  font-bold z-20 lg:text-1xl text-center"  words={" Hi I am vasanth raj frontend developer "}/>

      </div>

      
    </div>

    <div className="h-[50rem] w-full opacity-[0.4] dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      

    
    </div>
  )
}

export default Hero