// Libraries
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLinks } from './common/navLinks';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, logOut } from '../../redux/slices/userSlice';

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut());
    };
    return (
        <nav className='navbar mb-4 mt-4'>
            <div className='container-fluid d-flex justify-content-space-between'>
                <ul className='nav shadow-sm'>
                    <li className='nav-item'>
                        <Link to={'/club'} className='nav-link'>
                            Образовательная программа
                        </Link>
                    </li>
                    <li>
                        <NavDropdown
                            title='Наша команда'
                            id='navbarScrollingDropdown'
                            className='navDropdown'>
                            <NavDropdown.Item>
                                <Link to={'trustees'} className='nav-link'>
                                    Попечители Фонда
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={'regions'} className='nav-link'>
                                    Региональные представители
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to={'faces'} className='nav-link'>
                                    Наши лица
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    {NavLinks.map(({ id, path, title }) => (
                        <li key={id} className='nav-item'>
                            <Link to={path} className='nav-link'>
                                {title}
                            </Link>
                        </li>
                    ))}
                    <li className='nav-item'>
                        {!isLoggedIn ? (
                            <Link to={'auth'} className='nav-link'>
                                <i className='bi bi-box-arrow-in-right'></i>
                            </Link>
                        ) : (
                            <Dropdown>
                                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                                    <i className='bi bi-person-circle'></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href='profile'>Профиль</Dropdown.Item>
                                    <Dropdown.Item
                                        href='/'
                                        className='text-danger'
                                        onClick={handleLogOut}>
                                        Выйти
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
