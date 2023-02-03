import React from 'react';
import { useInView } from 'react-intersection-observer';
import avatarsService from '../../../../services/avatar.service';

import styles from './Partners.module.scss';

const Partners = () => {
    const [avatars, setAvatars] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const req = await avatarsService.get();
            setAvatars(req);
        }
        fetchData();
    }, []);

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    return (
        <div className='' ref={ref}>
            {inView ? (
                <div className={styles.box_img}>
                    {avatars.map(({ _id, imgSrc, name }) => (
                        <div className={styles.avatar} key={_id}>
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
