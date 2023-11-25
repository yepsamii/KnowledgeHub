import PropTypes from 'prop-types';
import { CiBookmark } from 'react-icons/ci';

const Blog = ({blog, handleBookmarks, handleReading}) => {
    const {title, thumbnail_img, author_name, cover_img, date, read_duration, hashtag} = blog;
    return (
        <div className='my-4'>
            <img className='w-4/5 h-auto' src={thumbnail_img} alt={title}/>
            <div className='flex justify-between items-center my-3 w-4/5 h-auto'>
                <div className='flex gap-3 items-center'>
                    <img className='w-14 h-14 rounded-full' src={cover_img} alt="" />
                    <div>
                        <h1>{author_name}</h1>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <span>{read_duration} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='ml-2'><CiBookmark></CiBookmark></button>

                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>{hashtag}</p>
            <p>
                <button onClick={() => handleReading(read_duration)}><a className='text-blue-700 underline'>Mark as read...</a></button>
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleReading: PropTypes.func
}

export default Blog;