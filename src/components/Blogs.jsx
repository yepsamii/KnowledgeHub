// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, handleReading}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('../../public/blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []); 
  // Empty dependency array means this effect runs once when the component mounts

  // Return your JSX
  return (
    // Your component JSX here
    <div className='md:w-2/3'>
      <h2>Blogs : {blogs.length}</h2>
      {
        blogs.map(blog => <Blog blog={blog} key={blog.id} handleReading={handleReading} handleBookmarks={handleBookmarks}></Blog>)
      }
    </div>
  );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReading: PropTypes.func
}

export default Blogs;
