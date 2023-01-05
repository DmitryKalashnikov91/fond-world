// Libraries
import { Link } from 'react-router-dom';

const NavBar = () => {
    const links = [
        { id: 1, path: '', title: 'Главная' },
        { id: 2, path: 'news', title: 'Новости нашего мира' },
        { id: 3, path: 'poems', title: 'Поэзия' },
        { id: 4, path: 'video', title: 'Видео' },
        { id: 5, path: 'newspapers', title: 'СМИ о Нас' },
    ];

    return (
        <nav className='navbar mb-4 '>
            <div className='container-fluid d-flex justify-content-space-between'>
                <ul className='nav shadow'>
                    {links.map(({ id, path, title }) => (
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
