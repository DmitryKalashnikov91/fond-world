import React from 'react';
import { PHOTOS } from './photo/photo';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Gallery.module.scss';

const Gallery = () => {
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={styles.gallery}>
            <h3 className='text-light pt-5 text-center'>
                Встреча в Комитете по культуре Государственной Думы РФ. 21.12.2022г.
            </h3>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {PHOTOS.map(({ id, photoSrc }) => (
                    <Carousel.Item key={id}>
                        <div className={styles.gallery_card}>
                            <img src={photoSrc} alt='' />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Gallery;
