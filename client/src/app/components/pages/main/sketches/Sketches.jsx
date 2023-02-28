import { useInView } from 'react-intersection-observer';
import React from 'react';
import sketchesService from '../../../../services/sketches.service';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Sketches.module.scss';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const Sketches = () => {
    const [sketches, setSketches] = React.useState([]);
    const navigate = useNavigate();
    React.useEffect(() => {
        async function fetchData() {
            const req = await sketchesService.get();
            setSketches(req);
        }
        fetchData();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const filteredSketches = sketches.filter((sketch, index) => index < 3);
    return (
        <>
            <div className={styles.Sketches} ref={ref}>
                <h2 className='text-center mt-5'>Скульптурные группы и эскизы</h2>
                {inView ? (
                    <div className={styles.Sketches_content}>
                        <Slider {...settings} className={styles.Sketches_content__carousel}>
                            {sketches.map((elem) => {
                                return (
                                    <div key={elem._id} className={styles.Sketches_card}>
                                        <img
                                            src={elem.imgSrc}
                                            alt={elem.alt}
                                            width={280}
                                            height={350}
                                        />

                                        <div className={styles.Sketches_caption}>
                                            {elem.caption}
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        <div className={styles.Sketches_content__mobile}>
                            {filteredSketches.map((elem) => {
                                return (
                                    <figure className={styles.Sketches_item} key={elem._id}>
                                        <img src={elem.imgSrc} alt={elem.caption} />
                                        <figcaption className={styles.Sketches_item___caption}>
                                            {elem.caption}
                                        </figcaption>
                                    </figure>
                                );
                            })}
                            <button
                                className='btn btn-primary'
                                onClick={() => navigate('/sketches')}>
                                Все эскизы
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.skeleton} />
                )}
            </div>
        </>
    );
};

export default Sketches;
