import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {

    return (
        <div className="md:w-1/3">
            <h1>Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.hashtag} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;