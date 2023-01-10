// Libraries
import { Link } from 'react-router-dom';
import { NavLinks } from './common/navLinks';

const NavBar = () => {
    return (
        <nav className='navbar mb-4 '>
            <div className='container-fluid d-flex justify-content-space-between'>
                <ul className='nav shadow-sm p-3'>
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
