import PropTypes from 'prop-types';

const Blog = ({blog}) => {
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

                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>{hashtag}</p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;