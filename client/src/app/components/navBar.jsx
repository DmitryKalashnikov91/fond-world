// Libraries
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLinks } from './common/navLinks';

const NavBar = () => {
    return (
        <nav className='navbar mb-4 '>
            <div className='container-fluid d-flex justify-content-space-between'>
                <ul className='nav shadow-sm p-3'>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-link'>
                            Главная
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
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
