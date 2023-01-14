import React from 'react';
import { useInView } from 'react-intersection-observer';

import { PHOTOS } from './photo/photo';
import Carousel from 'react-bootstrap/Carousel';

import styles from './Gallery.module.scss';

const Gallery = () => {
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className={styles.gallery} ref={ref}>
            <h3 className='text-light pt-5 text-center'>Галерея Нашего Фонда.</h3>
            {inView ? (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {PHOTOS.map(({ id, photoSrc }) => (
                        <Carousel.Item key={id}>
                            <div className={styles.gallery_card}>
                                <img src={photoSrc} alt='' />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <div className={styles.gallery_sceleton} />
            )}
        </div>
    );
};

export default Gallery;
