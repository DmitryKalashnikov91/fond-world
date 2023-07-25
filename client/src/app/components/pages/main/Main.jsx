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
import { nanoid } from 'nanoid';

const Main = () => {
    const logosMassive = [
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2Flogo_promsvyazbank.png?alt=media&token=712c5b45-3df0-4315-82a3-80cb4aa66f32',
            alt: 'Промсвязьбанк',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2Fvsedobr.jpg?alt=media&token=5ab320f3-e498-4f6c-83d3-0117354af80a',
            alt: 'Вселенная добра',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2F%D0%AD%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0%20%D0%A0%D0%9D%D0%94.png?alt=media&token=c6f7cd66-5eb4-4e83-9a12-5cc40deee000',
            alt: 'Россия наш дом',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2F%D0%9C%D0%B8%D1%80%D0%9A%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D1%8B.jpg?alt=media&token=075d44df-83af-4e43-98eb-3dffdf26e74c',
            alt: 'Мир культуры и исскуства',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2F589.jpg?alt=media&token=4a722ebb-2093-469e-b916-fdb4ed07febf',
            alt: 'Женщина и политика',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2F7-19%20at%2016.35.44.jpg?alt=media&token=154999be-9966-4f0c-8d10-8688264e95c2',
            alt: 'Надежда, вера, возрождение',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2FUntitled%20(24).png?alt=media&token=515203cc-7633-48c2-ada8-dd2af007ee57',
            alt: 'Жди Меня',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2FWhatsApp%20Image%202023-07-23%20at%2009.22.53.jpg?alt=media&token=a4a91bf7-1b24-405b-8683-8e947359ff38',
            alt: 'Федеральная служба новостей',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2Flogo-rebyata.jpg?alt=media&token=ed130cfa-3c50-4819-9c6d-82265a326e80',
            alt: 'Ребята, мы с вами',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2FtDobro.jpg?alt=media&token=c3143d6b-b7aa-4252-a5ae-c41b257d7659',
            alt: 'Венец добра',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/ecoteh.png?alt=media&token=26d7caf1-0af6-473c-a159-4a08d71af57e',
            alt: 'Экотех',
        },
        {
            id: nanoid(8),
            url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/KIT_sign_BG_gradient-01.png?alt=media&token=78bdf50d-d5b7-47c3-b7e7-fbf655ffb671',
            alt: 'КИТ',
        },
    ];
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
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/monum_foto.webp?alt=media&token=65419463-b622-4d6f-b153-7924be9602dd'
                            alt='bg'
                        />
                        <button
                            className={styles.bgimage_btn}
                            onClick={() => navigate('/chields-block')}>
                            Подробно об акции
                        </button>
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
            <h3 className='mt-5'>Фонды и компании - партнеры</h3>
            <marquee direction='right' scrollamount='5' className='bg-primary mt-3'>
                <div>
                    {logosMassive.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.url}
                            alt={logo.alt}
                            width={150}
                            className='ms-5 me-5'
                        />
                    ))}
                </div>
            </marquee>
            <Posters />
            <YandexMap />
        </>
    );
};

export default Main;
