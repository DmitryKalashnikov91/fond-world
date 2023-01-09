import { useInView } from 'react-intersection-observer';
import { data } from './images/sketches';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Sketches.module.scss';
import Slider from 'react-slick';

const Sketches = () => {
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
    return (
        <>
            <div className={styles.Sketches} ref={ref}>
                <h2>Скульптурные группы и эскизы</h2>
                {inView ? (
                    <div className={styles.Sketches_content}>
                        <Slider {...settings} className={styles.Sketches_content__carousel}>
                            {data.map((elem) => {
                                return (
                                    <div key={elem.id} className={styles.Sketches_card}>
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
                            {data.map((elem) => {
                                return (
                                    <figure className={styles.Sketches_item} key={elem.id}>
                                        <img src={elem.imgSrc} alt={elem.caption} />
                                        <figcaption className={styles.Sketches_item___caption}>
                                            {elem.caption}
                                        </figcaption>
                                    </figure>
                                );
                            })}
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
