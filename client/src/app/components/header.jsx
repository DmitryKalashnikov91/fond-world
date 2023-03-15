// Libraries
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpeg';
import MobileMenu from './mobileMenu/MobileMenu';
// import Money from './Money';
import NavBar from './navBar';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={`d-flex justify-content-between fixed-top`}>
            {/* <Money /> */}
            <div className='mt-4'>
                <img src={logo} alt='logo' width={80} height={80} onClick={() => navigate('/')} />
            </div>

            <NavBar />
            <MobileMenu />
        </header>
    );
};

export default Header;
