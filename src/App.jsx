// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
