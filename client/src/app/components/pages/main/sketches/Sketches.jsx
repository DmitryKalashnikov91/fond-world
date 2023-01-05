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
        threshold: 0,
        triggerOnce: true,
    });
    return (
        <>
            <div className='Sketches' ref={ref}>
                <h2>Скульптурные группы и эскизы</h2>
                <Slider {...settings}>
                    {data.map((elem) => {
                        return (
                            <div key={elem.id} className={styles.Sketches_card}>
                                {inView ? (
                                    <img src={elem.imgSrc} alt='' width={280} height={350} />
                                ) : (
                                    <div className={styles.skeleton} />
                                )}

                                <div className={styles.Sketches_caption}>{elem.caption}</div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className={styles.Sketches_mobile}>
                {data.map((elem) => {
                    return (
                        <div key={elem.id} className={styles.card}>
                            <img src={elem.imgSrc} alt={elem.caption} />
                            <div className={styles.Sketches_caption}>{elem.caption}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Sketches;
