import { AVATARS } from './avatars/avatars';

import styles from './Partners.module.scss';

const Partners = () => {
    return (
        <div>
            <div className='box_img'>
                {AVATARS.map(({ id, imgSrc, name }) => (
                    <div className={styles.avatar} key={id}>
                        <img src={imgSrc} alt={name} width='280' height='300' />
                        <div className={styles.avatar_name}>
                            <span className='text-light'>{name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
