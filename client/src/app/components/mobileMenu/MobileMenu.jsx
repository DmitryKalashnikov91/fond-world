import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { NavLinks } from '../common/navLinks';

const MobileMenu = () => {
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
                        {NavLinks.map(({ id, path, title }) => (
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
