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

  const [read,  setRead] =useState(0);

  const handleReading = (time,id) => {
    setRead(read + time);

    const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleReading={handleReading} handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks read={read} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App;
