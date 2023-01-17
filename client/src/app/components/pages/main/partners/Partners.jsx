import { useInView } from 'react-intersection-observer';

import { AVATARS } from './avatars/avatars';

import styles from './Partners.module.scss';

const Partners = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    console.log(AVATARS);
    return (
        <div className='' ref={ref}>
            {inView ? (
                <div className={styles.box_img}>
                    {AVATARS.map(({ id, imgSrc, name }) => (
                        <div className={styles.avatar} key={id}>
                            <img src={imgSrc} alt={name} />
                            <div className={styles.avatar_name}>
                                <span className='text-light'>{name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.box} />
            )}
        </div>
    );
};

export default Partners;
