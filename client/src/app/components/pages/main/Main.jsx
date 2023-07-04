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
// import { useNavigate } from 'react-router-dom';
// import Metropol from './metropol/Metropol';

const Main = () => {
    // const navigate = useNavigate();
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

                        <p className='text-primary mt-5 fs-5'>
                            08 июля 2023 года в городе воинской славы Наро-Фоминске запланировано
                            открытие первого монумента «Дети Донбасса — Дети России»
                        </p>
                        <p className='text-primary mt-5 fs-5'>
                            Материал: природный камень - Ракушечник дагестанский.
                        </p>
                        <p className='text-primary mt-5 fs-5'>
                            Монумент символизирует воссоединение народов
                        </p>
                        <MainButton title='Поддержать проект' />
                    </section>

                    <div className={styles.bgimage}>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/monum_foto.webp?alt=media&token=65419463-b622-4d6f-b153-7924be9602dd'
                            alt='bg'
                        />
                    </div>
                </div>
            </div>
            {/* <Metropol /> */}
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
