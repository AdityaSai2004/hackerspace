import React, { Suspense, useEffect, useRef } from "react";
import './App.css';
import Navbar from './components/navBar/nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speaker from './components/speaker/Speakers'
import Faq from './components/faq/faq'
import Clock from './components/clock/Clock'
import Sponsors from './components/sponsors/sponsors'
import Footer from './components/footer/Footer'
import About from './components/about/AboutPage'
import StartPage from "./components/start/start";
import Logo from './components/logo/logo'




export default function App() {
  let logo = 'https://cyscomvit.com/assets/images/logo.png'
  let title='HackerSpace'
  let landingPageContent = "Welcome to HackerSpace, an extraordinary one-day workshop that will immerse you in the captivating realms of Bug Bounty, OSINT, and Cyber Forensics. This unique and hands-on cybersecurity event has been meticulously designed to equip participants with the latest knowledge and practical skills in these specialized domains."
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<><Navbar currentPage='1' /><About name='Hacker Space' content={landingPageContent}/><Footer urlb='/' urlf='/speaker' /></>} />
          <Route path='speaker' element={<><Navbar currentPage='2' /><Speaker /><Footer urlb='/' urlf='/sponsors'/></>} />
          <Route path='sponsors' element={<><Navbar currentPage='3' /><Sponsors /><Footer urlb='/speaker' urlf='/faq'/></>} />
          <Route path='faq' element={<><Navbar currentPage='4' /><Faq /><Footer urlb='/sponsors' urlf='/' /></>} />
          <Route path='clock' element={<Clock />} />
        </Routes>
      </BrowserRouter>
        



    </div>
  );
}

const View1 = () => {
  <>
    <Navbar currentPage='1'/>
    <Speaker />
    <Footer />
  </>
}
