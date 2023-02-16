import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { NavLinksMobile } from '../common/navLinks';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../redux/slices/userSlice';

const MobileMenu = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
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
                        {NavLinksMobile.map(({ id, path, title }) => (
                            <li key={id}>
                                <Link to={path} onClick={() => setOpen(false)}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                        {!isLoggedIn ? (
                            <li>
                                <Link to={'/auth/login'} onClick={() => setOpen(false)}>
                                    Войти
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link to={'profile'} onClick={() => setOpen(false)}>
                                    Профиль
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default MobileMenu;
