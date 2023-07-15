import React from 'react';
import Alert from 'react-bootstrap/Alert';

import styles from './AboutChields.module.scss';

const AboutChields = () => {
    return (
        <div className={styles.Chields}>
            <h3>"Дети Донбасса - Дети России"</h3>
            <div className={styles.Chields_wrapper}>
                <p></p>
                <Alert variant='primary' className={styles.Chields_wrapper__block}>
                    <div className='d-flex justify-content-around flex-wrap'>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logoNM.svg?alt=media&token=9c068682-a396-441b-82ce-c718eb6c78f7'
                            alt='logo'
                            width={180}
                            className='mb-5 me-2'
                        />
                        <p className='fs-5  mb-5 pt-2'>
                            Торжественное открытие монумента «Дети Донбасса – Дети России», в
                            качестве символа воссоединения народов, запланировано на 21 июля 2023
                            года, в городе Воинской Славы Наро-Фоминске (Московская область). Справа
                            от здания Детской Поликлиники по ул. Калинина 1
                        </p>
                    </div>
                    <Alert.Heading>С чего всё начиналось</Alert.Heading>
                    <div className={styles.Chields_wrapper__block_start}>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/sketches%2Fmon1.jpeg?alt=media&token=3bcf0a1f-9943-4cad-98e2-92c4a7b0414b'
                            alt=''
                            width={250}
                        />

                        <div>
                            <p>
                                21 июня 2022 года с главной сцены Дома Правительства Москвы
                                Организаторами и участниками Международного культурно-экономического
                                форума «Наш Мир-21век» была инициирована Всероссийская
                                благотворительная акция «Установка скульптурных групп и монументов
                                «Дети Донбасса» и «Героям России» (автор и руководитель проектов
                                Трушкин Игорь Александрович, известный также как российский писатель
                                Игорь А.Алекс).
                            </p>
                            <p>Автор эскиза – российский художник Орлова Олеся Владимировна.</p>
                            <p>
                                Лицом же проекта стал народный артист, депутат Госдумы РФ Дмитрий
                                Певцов, о чем сообщали российские СМИ.
                            </p>
                            <p>
                                Нашу инициативу поддержали Посольство Донецкой народной республики в
                                РФ в лице Чрезвычайного и Полномочного посла Макеевой Ольги
                                Александровны, Межгосударственный союз городов-героев в лице
                                генерал-полковника Шумилова Л.В. и многие другие организации.
                            </p>
                            <p>
                                Организаторы также выражают благодарность ПАО «Промсвязьбанк»,
                                оказавшему финансовую поддержку проекту.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Chields_grid}>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2FDSC_1.webp?alt=media&token=cfd07fba-148e-49a6-886e-8b1fe3bf3f6b'
                            alt=''
                            width={200}
                        />
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2Fforum14_12_22.webp?alt=media&token=adf48c9a-93f4-40ac-9181-71e81eb6829b'
                            alt=''
                            width={200}
                        />
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2FDSC_6.webp?alt=media&token=d0a21d4b-133a-4e26-af43-4364ec16b4c3'
                            alt=''
                            width={200}
                        />
                    </div>
                    <span></span>
                    <Alert.Heading>Проект утсановки в Наро-Фоминске</Alert.Heading>
                    <div>
                        <p>
                            Изначальная задумка барельефа — символ воссоединения народов —
                            дополнилась идеей о поддержке Президента РФ Владимира Путина.
                        </p>
                        <p>
                            Первый монумент «Дети Донбасса – Дети России» готов. Изготовитель и
                            соавтор проекта – российский общественный деятель и меценат Ошотин
                            Михаил Михайлович.
                        </p>
                        <div className={styles.Chields_grid}>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2Fpost.webp?alt=media&token=c89cd0a0-f6d8-4be5-abfd-d4b4777885c5'
                                alt=''
                                width={200}
                            />
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2FchieldTravel.webp?alt=media&token=7e5a6512-b2ee-49a2-aa5b-8d812ccaba4f'
                                alt=''
                                width={250}
                            />
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/monCargo.webp?alt=media&token=54deb4e3-394b-4be1-b124-2aec7e112659'
                                alt=''
                                width={250}
                            />
                        </div>
                    </div>
                </Alert>
            </div>
        </div>
    );
};

export default AboutChields;
