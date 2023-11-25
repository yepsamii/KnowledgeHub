import Profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <header className='md:flex items-center justify-between p-4 border-b-2 mb-6'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={Profile} alt=""/>
        </header>
    );
};

export default Header;