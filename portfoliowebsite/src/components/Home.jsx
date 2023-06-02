import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from '../Context'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  const {HomeUpdate}=useGlobalContext();
  console.log(HomeUpdate);
  useEffect(()=>{
    HomeUpdate();
  },[])
  return(
    <>
    <HeroSection/>
    <Services/>
    <Contact/>
    </>
  )
}
export default Home
