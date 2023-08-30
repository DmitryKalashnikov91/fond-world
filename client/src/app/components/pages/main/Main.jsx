import Sketches from './sketches/Sketches';
import AboutProject from './aboutProject/AboutProject';
import Gallery from './gallery/Gallery';
import Partners from './partners/Partners';

import styles from './Main.module.scss';
import Posters from './posters/Posters';
import YandexMap from './contacts/YandexMap';
import MainNews from './mainNews/MainNews';
import { useResize } from '../../../../hoc/useResize';
import TrusteesMobile from '../trustees/Trustees_mobile';
import NewsMobile from '../newspapers/NewsMobile';
import { useNavigate } from 'react-router-dom';
import { MarqLogos } from '../../common/marquee/MarqLogos';
import { Oxiterra } from './mainPartner/Oxiterra';

const Main = () => {
    const navigate = useNavigate();
    const resize = useResize();
    return (
        <>
            <div className={styles.main}>
                <h1 className='text-danger mt-5'>ВСЕРОССИЙСКАЯ БЛАГОТВОРИТЕЛЬНАЯ АКЦИЯ</h1>
                <div className={styles.main_content}>
                    <section className={styles.description}>
                        <h2 className='text-danger mt-5'>
                            Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                            &quot;Героям России&quot;
                        </h2>

                        <p className='text-primary mt-5 fs-5'>
                            21 июля 2023 года в городе Воинской Славы Наро-Фоминске состоялось
                            открытие первого монумента «Дети Донбасса — Дети России»
                        </p>
                        <p className='text-primary mt-5 fs-5'>
                            Материал: природный камень - Ракушечник дагестанский.
                        </p>
                        <p className='text-primary mt-5 fs-5'>
                            Монумент символизирует воссоединение народов
                        </p>
                    </section>

                    <div className={styles.bgimage}>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2FnewCD.webp?alt=media&token=37de6f75-6dfd-4a84-8570-cf9e3ea992cf'
                            alt='bg'
                        />
                        <button
                            className={styles.bgimage_btn}
                            onClick={() => navigate('/chields-block')}>
                            Подробно об акции
                        </button>
                    </div>
                </div>
                <div className={'main_box mt-5 ' + styles.video}>
                    <iframe
                        src='https://www.youtube.com/embed/cW-bbhlJjuQ?si=pO4klX5I4I1BoczA'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen></iframe>
                </div>
            </div>
            {/* <Metropol /> */}
            <div className={styles.components}>
                {!resize.isScreenMd && <TrusteesMobile />}

                <MainNews />
                <Oxiterra />
                <Gallery />
                <Sketches />

                {/* <AboutProject /> */}
                <h3 className='mt-5 ms-3'>Фонды и компании - партнеры</h3>
                <MarqLogos />
                {!resize.isScreenMd && <NewsMobile />}

                <div className='sub_title' id='images'>
                    <h3>Наш МИР поддержали:</h3>
                </div>
                <Partners />

                <Posters />
                <YandexMap />
            </div>
        </>
    );
};

export default Main;
