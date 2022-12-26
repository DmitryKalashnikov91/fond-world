import mon1 from './images/monument1.png';
import mon2 from './images/monument2.png';
import mon3 from './images/monument3.png';
import mon4 from './images/monument4.png';
import mon5 from './images/monument5.png';
import mon6 from './images/monument6.png';
import mon7 from './images/monument7.png';
import mon8 from './images/monument8.png';
import styles from './Sketches.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    const data = [
        { id: 1, imgSrc: mon1, alt: 'monument', caption: 'Скульптор: ' },
        { id: 2, imgSrc: mon2, alt: 'monument', caption: 'Скульптор: Алексеева Марина' },
        { id: 3, imgSrc: mon3, alt: 'monument', caption: 'Скульптор: Качев Андрей' },
        { id: 4, imgSrc: mon4, alt: 'monument', caption: 'Скульптор: Колсарчук Татьяна ' },
        { id: 5, imgSrc: mon5, alt: 'monument', caption: 'Скульптор: Колсарчук Татьяна ' },
        { id: 6, imgSrc: mon6, alt: 'monument', caption: 'Скульптор: Колсарчук Татьяна ' },
        { id: 7, imgSrc: mon7, alt: 'monument', caption: 'Скульптор: Солнечная Лариса' },
        { id: 8, imgSrc: mon8, alt: 'monument', caption: 'Скульптор: ' },
    ];

    return (
        <>
            <div className='Sketches'>
                <h2>Скульптурные группы и эскизы</h2>
                <Slider {...settings}>
                    {data.map((elem) => {
                        return (
                            <div key={elem.id} className={styles.Sketches_card}>
                                <img src={elem.imgSrc} alt='' width={280} height={350} />
                                <div className={styles.Sketches_caption}>{elem.caption}</div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            {data.map((elem) => {
                return (
                    <div key={elem.id} className={styles.Sketches_mobile}>
                        <img src={elem.imgSrc} alt='' width={280} height={350} />
                        <div className={styles.Sketches_caption}>{elem.caption}</div>
                    </div>
                );
            })}
        </>
    );
};

export default Sketches;
