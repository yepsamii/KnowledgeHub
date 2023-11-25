import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,read}) => {

    return (
        <div className="md:w-1/3">
             <div>
                <h1 className="text-lg"> Spent Time: {read}</h1>
            </div>
            <h1>Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.hashtag} read={read} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    read: PropTypes.number
}

export default Bookmarks;