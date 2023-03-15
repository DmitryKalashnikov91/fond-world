import Sketches from './sketches/Sketches';
import AboutProject from './aboutProject/AboutProject';
import MainButton from '../../common/MainButton';
import Gallery from './gallery/Gallery';
import Partners from './partners/Partners';

import styles from './Main.module.scss';
import Posters from './posters/Posters';
import YandexMap from './contacts/YandexMap';
import MainNews from './mainNews/MainNews';
import { useResize } from '../../../../hoc/useResize';
import TrusteesMobile from '../trustees/Trustees_mobile';
import NewsMobile from '../newspapers/NewsMobile';
import Metropol from './metropol/Metropol';

const Main = () => {
    const resize = useResize();
    return (
        <>
            <div className={styles.main}>
                <h1 className='text-danger mt-5'>ВСЕРОССИЙСКАЯ БЛАГОТВОРИТЕЛЬНАЯ АКЦИЯ</h1>

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
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/sketches%2FReady.jpeg?alt=media&token=5f4c5dd4-13fc-4696-8661-3a5cea30c77a'
                            alt='bg'
                        />
                    </div>
                </div>
            </div>
            <Metropol />
            {!resize.isScreenMd && <TrusteesMobile />}
            <MainNews />
            <Gallery />
            <Sketches />
            <AboutProject />
            {!resize.isScreenMd && <NewsMobile />}

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
