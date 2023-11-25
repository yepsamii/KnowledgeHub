// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
