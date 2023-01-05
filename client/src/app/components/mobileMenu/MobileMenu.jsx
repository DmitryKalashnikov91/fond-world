import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';

const MobileMenu = () => {
    const links = [
        { id: 1, path: '', title: 'Главная' },
        { id: 2, path: 'news', title: 'Новости нашего мира' },
        { id: 3, path: 'poems', title: 'Поэзия' },
        { id: 4, path: 'video', title: 'Видео' },
        { id: 5, path: 'newspapers', title: 'СМИ о Нас' },
    ];
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    return (
        <>
            <BiMenu className={styles.burger} size='40px' onClick={handleClick} />
            {open && (
                <nav className={styles.mob_nav}>
                    <ul>
                        {links.map(({ id, path, title }) => (
                            <li key={id}>
                                <Link to={path} onClick={() => setOpen(false)}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default MobileMenu;
