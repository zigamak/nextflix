import React from 'react'
import Navbar from '../../components/Navbar'
import "./Home.scss"
import Featured from '../../components/Featured'
import List from '../../components/List'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/> 
        <Featured/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home