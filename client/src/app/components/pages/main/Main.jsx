import Sketches from './sketches/Sketches';
import AboutProject from './aboutProject/AboutProject';
import MainButton from '../../common/MainButton';
import Gallery from './gallery/Gallery';
import Partners from './partners/Partners';
import img from './sketches/images/mainMon.webp';
import poster from './poster.test.main.png';

import styles from './Main.module.scss';
import Posters from './posters/Posters';
import YandexMap from './contacts/YandexMap';

const Main = () => {
    return (
        <>
            <div className={styles.main}>
                <h1 className='text-danger'>ВСЕРОССИЙСКАЯ БЛАГОТВОРИТЕЛЬНАЯ АКЦИЯ</h1>

                <div className={styles.main_content}>
                    <section className={styles.description}>
                        <h2 className='text-danger'>
                            Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                            &quot;Героям России&quot;
                        </h2>

                        <p className='text-primary mt-5'>
                            Все работы – оригинального характера, с указанием имени автора
                            (художника, скульптора).
                        </p>
                        <p className='text-primary mt-5'>
                            Материал – природный камень, бетон, металлы (бронза, др.).
                        </p>
                        <MainButton title='Поддержать проект' />
                    </section>

                    <div className={styles.bgimage}>
                        <img src={img} alt='bg' />
                    </div>
                </div>
            </div>

            <Gallery />
            <Sketches />
            <AboutProject />
            <section className={styles.poster}>
                <img src={poster} alt='poster' />
                <div className={styles.poster_contacts}>
                    <a href='tel:+79999152567'>+7 (999) 915-25-67</a>
                    <a href='tel:+79636188420'>+7 (963) 618-84-20</a>
                </div>
                <div className={styles.poster_links}>
                    <a href='https://kit.ru.com' target='_blank' rel='noopener noreferrer'>
                        kit.ru.com
                    </a>
                    <a href='https://presidentmedia.ru/' target='_blank' rel='noopener noreferrer'>
                        presidentmedia.ru
                    </a>
                </div>
            </section>
            <div className='sub_title' id='images'>
                <h3>Наш МИР поддержали:</h3>
            </div>
            <Partners />
            <Posters />
            <YandexMap />
        </>
    );
};

export default Main;
