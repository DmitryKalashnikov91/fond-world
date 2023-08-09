import React from 'react';
import { useInView } from 'react-intersection-observer';
import posterService from '../../../../services/poster.service';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Posters.module.scss';

const Posters = () => {
    const [index, setIndex] = React.useState(0);
    const [posters, setPosters] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const req = await posterService.get();
            setPosters(req);
        }
        fetchData();
    }, []);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className={styles.posters} ref={ref}>
            {inView ? (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {posters.map(({ _id, posterSrc, alt }) => (
                        <Carousel.Item key={_id}>
                            <div className={styles.posters_card}>
                                <img src={posterSrc} alt={alt} />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <div className={styles.background} />
            )}
        </section>
    );
};

export default Posters;
