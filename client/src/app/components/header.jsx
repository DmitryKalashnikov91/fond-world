// Libraries
import { useNavigate } from 'react-router-dom';
import MobileMenu from './mobileMenu/MobileMenu';
// import Money from './Money';
import NavBar from './navBar';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={`d-flex justify-content-between fixed-top`}>
            {/* <Money /> */}
            <div className='mt-2'>
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logoNM.svg?alt=media&token=9c068682-a396-441b-82ce-c718eb6c78f7'
                    alt='logo'
                    width={80}
                    height={80}
                    onClick={() => navigate('/')}
                />
            </div>

            <NavBar />
            <MobileMenu />
        </header>
    );
};

export default Header;
